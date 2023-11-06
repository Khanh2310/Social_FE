import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthLayout } from '../components/layouts/AuthLayout';
import { BasicLayout } from '../components/layouts/BasicLayout';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
export const RouterConfig: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<BasicLayout />}></Route>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
