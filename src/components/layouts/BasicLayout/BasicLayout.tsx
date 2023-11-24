import { Outlet } from 'react-router-dom';
import { Topbar } from '../../molecules/Topbar';
import { LeftSideBar } from '../../molecules/LeftSideBar';
import { RightSideBar } from '../../molecules/RightSideBar';
import { Bottombar } from '../../molecules/Bottombar';
export const BasicLayout = () => {
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
