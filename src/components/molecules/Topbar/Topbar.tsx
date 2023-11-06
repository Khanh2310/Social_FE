import { Link } from 'react-router-dom';
import { Images } from '../../atoms/Images';
import Logo from '../../../assets/logotheads.svg';
import Logout from '../../../assets/logout.svg';
export const Topbar = () => {
  return (
    <nav className="topbar">
      <Link to="/" className="flex items-center gap-4 ">
        <Images src={Logo} width={50} height={50} alt="logo" className="" />
        {/* <p className="text-heading3-bold text-light-1 max-xs:hidden">NextJS</p> */}
      </Link>
      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <div className="flex cursor-pointer">
            <Images src={Logout} width={24} height={24} alt="logout" />
          </div>
        </div>
      </div>
    </nav>
  );
};
