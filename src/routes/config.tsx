import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthLayout } from '../components/layouts/AuthLayout';
import { BasicLayout } from '../components/layouts/BasicLayout';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Home } from '../components/templates/Home';
import { Profile } from '../components/templates/Profile';
import { EditProfileForm } from '../components/organisms/EditProfileForm';
export const RouterConfig: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasicLayout />}>
            <Route index element={<Home />} />
            <Route path="/:username" element={<Profile />} />
            <Route path="/edit" element={<EditProfileForm />} />
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
