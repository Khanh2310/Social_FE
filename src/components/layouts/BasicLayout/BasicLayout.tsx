import { Navigate, Outlet } from 'react-router-dom';
import { Topbar } from '../../molecules/Topbar';
import { LeftSideBar } from '../../molecules/LeftSideBar';
import { RightSideBar } from '../../molecules/RightSideBar';
import { Bottombar } from '../../molecules/Bottombar';
import { useRecoilValue } from 'recoil';
import { userAtoms } from '../../../states/authAtoms';
export const BasicLayout = () => {
  const user = useRecoilValue(userAtoms);
  console.log(user);
  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <>
      <Topbar />
      <main className="flex flex-row">
        <LeftSideBar />
        <section className="main-container">
          <div className="w-full max-w-4xl">
            <Outlet />
          </div>
        </section>
        <RightSideBar />
      </main>
      <Bottombar />
    </>
  );
};
