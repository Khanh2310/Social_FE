import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Images } from '../../atoms/Images';
import { sideBarLinks } from '../../../utils/BottomServices';
import Logout from '../../../assets/logout.svg';
import { useRecoilValue } from 'recoil';
import { userAtoms } from '../../../states/authAtoms';
import { useMutateLogout } from '../../hooks/useMutateUser';

export const LeftSideBar = () => {
  const { pathname } = useLocation();
  const user = useRecoilValue(userAtoms);
  const { mutateAsync } = useMutateLogout();
  const navigate = useNavigate();
  const handleLogout = async () => {
    mutateAsync({}).finally(() => {
      navigate('/sign-in');
    });
  };
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sideBarLinks &&
          sideBarLinks.length > 0 &&
          sideBarLinks.map((link) => {
            const isActive =
              (pathname.includes(link.route) && link.route.length > 1) ||
              pathname === link.route;
            return (
              <Link
                to={link.route}
                className={`leftsidebar_link ${isActive && 'bg-primary-500 '} `}
                key={link.label}
              >
                <Images
                  src={link.imgURL}
                  alt={link.label}
                  width={24}
                  height={24}
                />
                <p className="text-light-1 max-lg:hidden">{link.label}</p>
              </Link>
            );
          })}
      </div>
      {user && (
        <div className="mt-10 px-6">
          <button
            className="flex cursor-pointer gap-4 p-4"
            onClick={handleLogout}
          >
            <Images src={Logout} width={24} height={24} alt="logout" />
            <p className="text-light-2 max-lg:hidden">Logout</p>
          </button>
        </div>
      )}
    </section>
  );
};
