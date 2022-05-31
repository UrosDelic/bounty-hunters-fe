import {
  faComment,
  faListCheck,
  faListOl,
  faWallet,
  faShop,
  faCartShopping,
  faUsers,
  faDolly,
  faClipboardList,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

const sidebarData: Array<{
  role: string;
  text: string;
  route: string;
  icon: IconDefinition;
}> = [
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
  {
    role: 'admin',
    text: 'tasks',
    route: '/tasks',
    icon: faListCheck,
  },
  {
    role: 'superadmin',
    text: 'users',
    route: '/users',
    icon: faUsers,
  },
  {
    role: 'superadmin',
    text: 'products',
    route: '/products',
    icon: faDolly,
  },
  {
    role: 'superadmin',
    text: 'orders',
    route: '/orders',
    icon: faClipboardList,
  },
];

export default sidebarData;
