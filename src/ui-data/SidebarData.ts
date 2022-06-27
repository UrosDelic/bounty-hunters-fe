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
  faSwatchbook,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { UserTypes } from '../context/userTypes';

const sidebarData: Array<{
  role: UserTypes;
  text: string;
  route: string;
  icon: IconDefinition;
}> = [
  {
    role: UserTypes.EMPLOYEE,
    text: 'feed',
    route: '/feed',
    icon: faComment,
  },
  {
    role: UserTypes.EMPLOYEE,
    text: 'new tasks',
    route: '/new-tasks',
    icon: faListCheck,
  },
  {
    role: UserTypes.EMPLOYEE,
    text: 'my tasks',
    route: '/my-tasks',
    icon: faListOl,
  },
  {
    role: UserTypes.EMPLOYEE,
    text: 'wallet',
    route: '/wallet',
    icon: faWallet,
  },
  {
    role: UserTypes.EMPLOYEE,
    text: 'store',
    route: '/store',
    icon: faShop,
  },
  {
    role: UserTypes.EMPLOYEE,
    text: 'my orders',
    route: '/my-orders',
    icon: faCartShopping,
  },
  {
    role: UserTypes.ADMIN,
    text: 'all tasks',
    route: '/all-tasks',
    icon: faList,
  },
  {
    role: UserTypes.SUPER_ADMIN,
    text: 'users',
    route: '/users',
    icon: faUsers,
  },
  {
    role: UserTypes.SUPER_ADMIN,
    text: 'products',
    route: '/products',
    icon: faDolly,
  },
  {
    role: UserTypes.SUPER_ADMIN,
    text: 'all orders',
    route: '/all-orders',
    icon: faClipboardList,
  },
  {
    role: UserTypes.SUPER_ADMIN,
    text: 'attributes',
    route: '/attributes',
    icon: faSwatchbook,
  },
];

export default sidebarData;
