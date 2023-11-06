import { Link } from 'react-router-dom';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';

export const SignUpForm = () => {
  return (
    <form className="flex flex-col w-full mb-5">
      <div className="flex items-center justify-between gap-x-5">
        <Input
          name="fullname"
          placeholder="Fullname"
          className="authen-login_input rounded-xl "
        />
        <Input
          name="usename"
          placeholder="Usename"
          className="authen-login_input rounded-xl "
        />
      </div>
      <Input
        name="email"
        placeholder="Email"
        className="authen-login_input rounded-xl "
      />
      <Input
        name="password"
        placeholder="Password"
        className="authen-login_input rounded-xl "
      />
      <Button className="w-full bg-white py-7 rounded-xl ">
        <Link to="/login" className="text-[#9f9f9f]">
          Sign Up
        </Link>
      </Button>
    </form>
  );
};
