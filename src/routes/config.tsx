import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignIn } from '../components/templates/SignIn';
import { SignUp } from '../components/templates/SignUp';
export const RouterConfig: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
