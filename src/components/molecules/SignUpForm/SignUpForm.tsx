import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  RegistrationInput,
  RegistrationInputSchema,
} from '../../../schema/registration/type';
import { zodResolver } from '@hookform/resolvers/zod';

const defaultValues: RegistrationInput = {
  email: '',
  name: '',
  username: '',
  password: '',
};
export const SignUpForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: { ...defaultValues },
    resolver: zodResolver(RegistrationInputSchema),
  });

  const handleSignUp: SubmitHandler<typeof defaultValues> = async (values) => {
    try {
      const res = await fetch('/api/users/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      className="flex flex-col w-full mb-5"
      onSubmit={handleSubmit(handleSignUp)}
    >
      <div className="flex items-center justify-between gap-x-5">
        <Input
          placeholder="Fullname"
          className="authen-login_input rounded-xl"
          {...register('name')}
        />
        <Input
          placeholder="Usename"
          className="authen-login_input rounded-xl"
          {...register('username')}
        />
      </div>
      <Input
        placeholder="Email"
        className="authen-login_input rounded-xl"
        {...register('email')}
      />
      <Input
        placeholder="Password"
        className="authen-login_input rounded-xl"
        {...register('password')}
      />
      <Button
        className="w-full bg-white text-[#9f9f9f py-7 rounded-xl cursor-pointer"
        type="submit"
      >
        Sign Up
      </Button>
    </form>
  );
};
