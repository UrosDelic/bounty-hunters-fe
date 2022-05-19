import {
  faComment,
  faListCheck,
  faListOl,
  faWallet,
  faShop,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';

const sidebarData = [
  {
    role: 'employee',
    text: 'feed',
    route: '/feed',
    icon: faComment,
  },
  {
    role: 'employee',
    text: 'new tasks',
    route: '/new-tasks',
    icon: faListCheck,
  },
  {
    role: 'employee',
    text: 'my tasks',
    route: '/my-tasks',
    icon: faListOl,
  },
  {
    role: 'employee',
    text: 'wallet',
    route: '/wallet',
    icon: faWallet,
  },
  {
    role: 'employee',
    text: 'store',
    route: '/store',
    icon: faShop,
  },
  {
    role: 'employee',
    text: 'my orders',
    route: '/my-orders',
    icon: faCartShopping,
  },
];

export default sidebarData;
