import { Link, useLocation } from 'react-router-dom';
import { sideBarLinks } from '../../../utils/BottomServices';
import { Images } from '../../atoms/Images';

export const Bottombar = () => {
  const { pathname } = useLocation();
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sideBarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              to={link.route}
              className={`${isActive && 'bg-primary-500'} bottombar_link`}
              key={link.label}
            >
              <Images
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-subtle-medium text-light-1 max-sm:hidden">
                {link.label.split(/\s+/)[0]}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
