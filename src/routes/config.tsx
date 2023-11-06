import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignIn } from '../components/templates/SignIn';
export const RouterConfig: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
