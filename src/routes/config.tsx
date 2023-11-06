import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignIn } from '../components/templates/SignIn';
import { SignUp } from '../components/templates/SignUp';
import { AuthLayout } from '../components/layouts/AuthLayout';
export const RouterConfig: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
