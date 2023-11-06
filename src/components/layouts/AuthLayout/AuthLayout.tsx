import { BottomServices } from '../../../utils/BottomServices';
import imgHeader from '../../../assets/header_logo.png';
import qr from '../../../assets/qr_code.svg';
import { Images } from '../../atoms/Images';
import { Link, Outlet } from 'react-router-dom';
export const AuthLayout = () => {
  return (
    <div className="relative">
      <Images
        src={imgHeader}
        alt="header_image"
        className="inline-block absolute object-cover bg-auto"
      />
      <div className="md:w-full container">
        <Outlet />
      </div>
      <div className="rightsidebar-pc text-white items-center justify-center">
        <p className="text-[#777777] text-[13px]">Scan to get the app</p>
        <div className="bg-[#181818] p-5 rounded-xl border border-[#323333]">
          <Images
            src={qr}
            width={100}
            height={100}
            className="object-cover"
            alt="qr_app"
          />
        </div>
      </div>

      <div className="bottombar-pc flex items-center justify-center gap-x-3">
        {BottomServices.map((item) => (
          <Link
            key={item.label}
            to={item.route}
            className="text-[12px] font-medium text-[#777777]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
