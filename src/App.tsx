import './App.css';
import { AuthLayout } from './components/layouts/AuthLayout';
import { LoginForm } from './components/molecules/LoginForm';
import { ImagesWithText } from './components/molecules/ImagesWithText';
function App() {
  return (
    <>
      <AuthLayout>
        <section className="max-w-[400px] mx-auto text-center 2xl:absolute">
          <p className="text-base-semibold text-center text-light-1 px-10 mb-4">
            Log in with your Instagram account
          </p>
          <LoginForm />
          <p className="text-[#777777] text-[15px] mb-4">Forgot password?</p>
          <div className="flex items-center text-[#323333] justify-center mb-5">
            <p className="after:content-[''] flex-1 border border-b-0 border-[#323333]"></p>
            <p className="text-center text-[#777777] mx-4">or</p>
            <p className="before:content-[''] flex-1 border border-b-0 border-[#323333]"></p>
          </div>
          <ImagesWithText />
        </section>
      </AuthLayout>
    </>
  );
}

export default App;
