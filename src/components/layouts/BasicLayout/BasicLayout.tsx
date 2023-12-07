import { Outlet, useNavigate } from 'react-router-dom';
import { Topbar } from '../../molecules/Topbar';
import { LeftSideBar } from '../../molecules/LeftSideBar';
import { RightSideBar } from '../../molecules/RightSideBar';
import { Bottombar } from '../../molecules/Bottombar';
import { useRecoilValue } from 'recoil';
import { userAtoms } from '../../../states/authAtoms';
import { useEffect } from 'react';
export const BasicLayout = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userAtoms);
  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
