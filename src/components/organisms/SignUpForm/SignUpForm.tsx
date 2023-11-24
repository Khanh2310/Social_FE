import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  RegistrationInput,
  RegistrationInputSchema,
} from '../../../schema/registration/type';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutateRegistration } from '../../hooks/useMutateUser';
import { useNavigate } from 'react-router';

const defaultValues: RegistrationInput = {
  email: '',
  name: '',
  username: '',
  password: '',
};

export const SignUpForm = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { ...defaultValues },
    resolver: zodResolver(RegistrationInputSchema),
  });
  const { mutateAsync } = useMutateRegistration();
  const navigate = useNavigate();

  const handleSignUp: SubmitHandler<typeof defaultValues> = async (values) => {
    try {
      await mutateAsync({ ...values });
      reset(defaultValues);
      navigate('/');
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
