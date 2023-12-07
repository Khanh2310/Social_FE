import { ChangeEvent, useEffect, useState } from 'react';
import { Images } from '../../atoms/Images';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import AvatarDefault from '../../../assets/user.png';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../molecules/Form';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { userAtoms } from '../../../states/authAtoms';
import axiosInstance from '../../../config/axiosInstance';
import { UserValidation } from '../../../schema/user/type';

export const ProfileForm = () => {
  const [user] = useRecoilState(userAtoms);
  const form = useForm({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      bio: '',
      profilePic: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof UserValidation>) => {
    try {
      await axiosInstance.put(`/users/update/${user}`, values);
    } catch (error) {
      console.log(error);
    }
  };
  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();
    const filesImages = new FileReader();
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (!file.type.includes('image')) return;
      filesImages.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || '';
        fieldChange(imageDataUrl);
      };
      filesImages.readAsDataURL(file);
    }
  };

  async function getAPI() {
    try {
      await axiosInstance.get(`/users/profile/${user}`);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    // Goi api GET user by id
    // Set form value
    // console.log(form.getValues());
    // form.setValue('fullname', 'abc');
    // form.setValue('username', 'XYZ');
    getAPI();
  }, []);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-center gap-10 w-full max-w-[500px] mx-auto"
      >
        <FormField
          control={form.control}
          name="profilePic"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4 justify-center">
              <FormLabel className="account-form_image-label">
                <Images
                  src={`${field.value ? field.value : AvatarDefault}`}
                  width={96}
                  height={96}
                  alt="profile_photo"
                  className="rounded-full object-contain cursor-pointer"
                />
              </FormLabel>
              <FormControl className="flex-1 text-base-semibold text-gray-200">
                <Input
                  type="file"
                  accept="image/*"
                  multiple
                  placeholder="upload a photo"
                  className="account-form_image-input hidden cursor-pointer"
                  onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full gap-3">
              <FormLabel className="text-base-semibold text-light-2">
                Full name *
              </FormLabel>
              <FormControl className="no-focus border border-dark-4 bg-dark-3 text-light-1">
                <Input className="account-form_input no-focus" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full gap-3">
              <FormLabel className="text-base-semibold text-light-2">
                User name *
              </FormLabel>
              <FormControl className="no-focus border border-dark-4 bg-dark-3 text-light-1">
                <Input className="account-form_input no-focus" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full gap-3">
              <FormLabel className="text-base-semibold text-light-2">
                Email address *
              </FormLabel>
              <FormControl className="no-focus border border-dark-4 bg-dark-3 text-light-1">
                <Input className="account-form_input no-focus" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full gap-3">
              <FormLabel className="text-base-semibold text-light-2">
                Bio *
              </FormLabel>
              <FormControl className="no-focus border border-dark-4 bg-dark-3 text-light-1">
                <Input className="account-form_input no-focus" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-primary-500 text-white w-full max-w-[300px] mx-auto py-6"
        >
          Save Changes
        </Button>
      </form>
    </Form>
  );
};
