import {
  faComment,
  faList,
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
import { Roles } from '../types';

const sidebarData: Array<{
  role: Roles;
  text: string;
  route: string;
  icon: IconDefinition;
}> = [
  {
    role: Roles.EMPLOYEE,
    text: 'feed',
    route: '/feed',
    icon: faComment,
  },
  {
    role: Roles.EMPLOYEE,
    text: 'new tasks',
    route: '/new-tasks',
    icon: faListCheck,
  },
  {
    role: Roles.EMPLOYEE,
    text: 'my tasks',
    route: '/my-tasks',
    icon: faListOl,
  },
  {
    role: Roles.EMPLOYEE,
    text: 'wallet',
    route: '/wallet',
    icon: faWallet,
  },
  {
    role: Roles.EMPLOYEE,
    text: 'store',
    route: '/store',
    icon: faShop,
  },
  {
    role: Roles.EMPLOYEE,
    text: 'my orders',
    route: '/my-orders',
    icon: faCartShopping,
  },
  {
    role: Roles.ADMIN,
    text: 'Admin Panel',
    route: '/admin-panel',
    icon: faList,
  },
  {
    role: Roles.SUPER_ADMIN,
    text: 'users',
    route: '/users',
    icon: faUsers,
  },
  {
    role: Roles.SUPER_ADMIN,
    text: 'products',
    route: '/products',
    icon: faDolly,
  },
  {
    role: Roles.SUPER_ADMIN,
    text: 'all orders',
    route: '/all-orders',
    icon: faClipboardList,
  },
];

export default sidebarData;
