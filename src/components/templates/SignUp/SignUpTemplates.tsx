import { ImagesWithText } from '../../molecules/ImagesWithText';
import { SignUpForm } from '../../organisms/SignUpForm';

export const SignUpTemplates = () => {
  return (
    <section className="max-w-[400px] text-center flex flex-col justify-center min-h-screen relative md:mt-12">
      <p className="text-base-semibold text-center text-light-1 px-10 mb-4">
        Log in with your Instagram account
      </p>
      <SignUpForm />
      <p className="text-[#777777] text-[15px] mb-4">
        You forgot your password?
      </p>
      <div className="flex items-center text-[#323333] justify-center mb-5">
        <p className="after:content-[''] flex-1 border border-b-0 border-[#323333]"></p>
        <p className="text-center text-[#777777] mx-4">or</p>
        <p className="before:content-[''] flex-1 border border-b-0 border-[#323333]"></p>
      </div>
      <ImagesWithText />
    </section>
  );
};
