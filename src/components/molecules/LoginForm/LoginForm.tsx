import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { Link } from 'react-router-dom';
export const LoginForm = () => {
  return (
    <form className="flex flex-col w-full mb-5">
      <Input
        name="email"
        placeholder="Username, phone or email"
        className="authen-login_input w-full min-w-[370px] rounded-xl "
      />
      <Input
        name="password"
        placeholder="Password"
        className="authen-login_input w-full min-w-[370px] rounded-xl "
      />
      <Button className="w-full bg-white py-7 rounded-xl ">
        <Link to="/login" className="text-[#9f9f9f]">
          Log in
        </Link>
      </Button>
    </form>
  );
};
