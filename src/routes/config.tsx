import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthLayout } from '../components/layouts/AuthLayout';
import { BasicLayout } from '../components/layouts/BasicLayout';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Home } from '../components/templates/Home';
import { ProfileForm } from '../components/organisms/ProfileForm';
export const RouterConfig: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="profile" element={<ProfileForm />} />
          <Route path="/" element={<BasicLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
