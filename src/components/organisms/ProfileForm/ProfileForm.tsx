'use client';

import { ChangeEvent, useState } from 'react';
import { isBase64Image } from '../../../utils/cropimage';
import { Images } from '../../atoms/Images';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import AvatarDefault from '../../../assets/user.png';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../molecules/Form';
import { useForm } from 'react-hook-form';

export const ProfileForm = () => {
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm({});
  const onSubmit = async (values) => {
    const blob = values;
    isBase64Image(blob);
  };
  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();
    // FileReader API to read the image files and preview them.

    const filesImages = new FileReader();
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));
      if (!file.type.includes('image')) return;
      filesImages.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || '';
        fieldChange(imageDataUrl);
      };
      filesImages.readAsDataURL(file);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10"
      >
        <FormField
          control={form.control}
          name="profile_photo"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4 ">
              <FormLabel className="account-form_image-label">
                {field.value ? (
                  <Images
                    src={field.value}
                    width={96}
                    height={96}
                    alt="profile_photo"
                    className="rounded-full object-contain"
                  />
                ) : (
                  <Images
                    src={AvatarDefault}
                    width={24}
                    height={24}
                    alt="profile_photo"
                    className="object-contain w-full"
                  />
                )}
              </FormLabel>
              <FormControl className="flex-1 text-base-semibold text-gray-200">
                <Input
                  type="file"
                  accept="image/*"
                  multiple
                  placeholder="upload a photo"
                  className="account-form_image-input"
                  onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-primary-500 text-white">
          Submit
        </Button>
      </form>
    </Form>
  );
};
