import imageHome from '../assets/home.svg';
import imageSearch from '../assets/search.svg';
import imageHeart from '../assets/heart.svg';
import imageCreate from '../assets/create.svg';
import imageCommunity from '../assets/community.svg';
import imageUser from '../assets/user.svg';
export const sideBarLinks = [
  {
    imgURL: imageHome,
    route: '/',
    label: 'Home',
  },
  {
    imgURL: imageSearch,
    route: '/search',
    label: 'Search',
  },
  {
    imgURL: imageHeart,
    route: '/activity',
    label: 'Activity',
  },
  {
    imgURL: imageCreate,
    route: '/create-thread',
    label: 'Create Thread',
  },
  {
    imgURL: imageCommunity,
    route: '/community',
    label: 'Communities',
  },
  {
    imgURL: imageUser,
    route: '/profile',
    label: 'Profile',
  },
];
export const BottomServices = [
  {
    route: '',
    label: '© 2023',
  },
  {
    route: '/ThreadsTerms',
    label: 'Threads Terms',
  },
  {
    route: '/PrivacyPolicy',
    label: 'Privacy Policy',
  },
  {
    route: '/CookiesPolicy',
    label: 'Cookies Policy',
  },
  {
    route: '/Report',
    label: 'Report a problem',
  },
];
