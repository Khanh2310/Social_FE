// import { Button } from '../../atoms/Button';
// import { Input } from '../../atoms/Input';
// import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../../molecules/Form';
import { useForm } from 'react-hook-form';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { SignInInputSchema, SignInput } from '../../../schema/signin/type';
import { z } from 'zod';
export const SignInForm = () => {
  const defaultValues: SignInput = {
    username: '',
    password: '',
  };
  const form = useForm({
    defaultValues: { ...defaultValues },
    resolver: zodResolver(SignInInputSchema),
  });

  const onSubmit = async (values: z.infer<typeof SignInInputSchema>) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center w-full mb-5"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Username, phone or email"
                  className="authen-login_input w-full min-w-[370px] rounded-xl"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Password"
                  className="authen-login_input w-full min-w-[370px] rounded-xl"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-white py-7 rounded-xl text-[#9f9f9f]"
        >
          Log in
        </Button>
      </form>
    </Form>
    // <form className="flex flex-col w-full mb-5">
    //   <Input
    //     name="email"
    //     placeholder="Username, phone or email"
    //     className="authen-login_input w-full min-w-[370px] rounded-xl "
    //   />
    //   <Input
    //     name="password"
    //     placeholder="Password"
    //     className="authen-login_input w-full min-w-[370px] rounded-xl "
    //   />
    //   <Button className="w-full bg-white py-7 rounded-xl ">
    //     <Link to="/login" className="text-[#9f9f9f]">
    //       Log in
    //     </Link>
    //   </Button>
    // </form>
  );
};
