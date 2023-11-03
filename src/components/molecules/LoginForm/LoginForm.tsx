import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { Link } from 'react-router-dom';
export const LoginForm = () => {
  return (
    <div className="flex flex-col w-full mb-5">
      <form action="">
        <Input
          name="email"
          placeholder="Username, phone or email"
          className="authen-login_input"
        />
        <Input
          name="Password"
          placeholder="Password"
          className="authen-login_input"
        />
        <Button className="w-full bg-white py-6 ">
          <Link to="/login" className="text-[#9f9f9f]">
            Log in
          </Link>
        </Button>
      </form>
    </div>
  );
};
