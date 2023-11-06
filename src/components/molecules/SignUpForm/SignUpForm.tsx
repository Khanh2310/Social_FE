import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SignUpInput, SignUpInputSchema } from '../../../schema/SignUp/type';
import { zodResolver } from '@hookform/resolvers/zod';

const defaultValues: SignUpInput = {
  email: '',
  name: '',
  username: '',
  password: '',
};
export const SignUpForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: { ...defaultValues },
    resolver: zodResolver(SignUpInputSchema),
  });

  const handleSignUp: SubmitHandler<typeof defaultValues> = (values) => {
    console.log(values);
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
        className="w-full bg-white text-[#9f9f9f py-7 rounded-xl"
        type="submit"
      >
        Sign Up
      </Button>
    </form>
  );
};
