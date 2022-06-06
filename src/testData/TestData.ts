import shirt from '../img/shirt.jpg';
import sticker from '../img/sticker.jpg';
import mug from '../img/mug.jpg';

const gainedPoints = [
  {
    id: 1,
    name: 'writing article',
    points: 50,
    date: '10/19/2022',
  },
  {
    id: 2,
    name: 'writing article',
    points: 40,
    date: '10/18/2022',
  },
  {
    id: 3,
    name: 'mentoring',
    points: 120,
    date: '10/19/2022',
  },
  {
    id: 4,
    name: 'reviewing requests',
    points: 100,
    date: '10/02/2022',
  },
];

const spentPoints = [
  {
    id: 1,
    name: 'quantox shirt',
    points: 70,
    date: '10/18/2022',
  },
  {
    id: 2,
    name: 'quantox mug',
    points: 50,
    date: '09/19/2022',
  },
  {
    id: 3,
    name: 'q sticker',
    points: 10,
    date: '10/19/2022',
  },
];

const productsList = [
  {
    id: 1,
    name: 'Shirt',
    points: 40,
    image: shirt,
    description: 'this is a product',
  },
  {
    id: 2,
    name: 'Quantox Mug',
    points: 20,
    image: mug,
    description: 'this is a product',
  },
  {
    id: 3,
    name: 'Quantox Mug',
    points: 20,
    image: mug,
    description: 'this is a product',
  },
  {
    id: 4,
    name: 'Shirt',
    points: 40,
    image: shirt,
    description: 'this is a product',
  },
  {
    id: 5,
    name: 'Sticker',
    points: 10,
    image: sticker,
    description: 'this is a sticker',
  },
  {
    id: 6,
    name: 'Shirt',
    points: 40,
    image: shirt,
    description: 'this is a product',
  },
  {
    id: 7,
    name: 'Shirt',
    points: 40,
    image: shirt,
    description: 'this is a product',
  },
  {
    id: 8,
    name: 'Shirt',
    points: 40,
    image: shirt,
    description: 'this is a product',
  },
  {
    id: 9,
    name: 'Shirt',
    points: 40,
    image: shirt,
    description: 'this is a product',
  },
  {
    id: 10,
    name: 'Sticker',
    points: 10,
    image: sticker,
    description: 'this is a product',
  },
];

export enum Status {
  pending = 'PENDING',
  in_progress = 'IN_PROGRESS',
  fulfilled = 'FULFILLED',
}

const ordersList = [
  {
    id: 1,
    name: '#1',
    image: shirt,
    points: 40,
    status: Status.pending,
    date: '28/12/1992',
    shippingAdress: 'Cvijiceva br. 4',
  },
  {
    id: 2,
    name: '#2',
    image: mug,
    points: 20,
    status: Status.in_progress,
    date: '27/12/1992',
    shippingAdress: 'Milentijeva br. 5',
  },
  {
    id: 3,
    name: '#3',
    image: mug,
    points: 20,
    status: Status.fulfilled,
    date: '28/12/1992',
    shippingAdress: 'Cvijiceva br. 4',
  },
  {
    id: 4,
    name: '#4',
    image: shirt,
    points: 40,
    status: Status.fulfilled,
    date: '20/12/1997',
    shippingAdress: 'Cvijiceva br. 4',
  },
  {
    id: 5,
    name: '#5',
    image: sticker,
    points: 10,
    status: Status.fulfilled,
    date: '20/11/2002',
    shippingAdress: 'Cvijiceva br. 4',
  },
];

const usersList = [
  {
    id: 1,
    name: 'Vuk Stojanovic',
    role: ['employee', 'admin', 'superadmin'],
  },
  {
    id: 2,
    name: 'Milos Ciric',
    role: ['superadmin'],
  },
  {
    id: 3,
    name: 'Milan Jovanovic',
    role: ['admin', 'superadmin'],
  },
  {
    id: 4,
    name: 'Stefan Meza',
    role: ['employee', 'admin'],
  },
  {
    id: 5,
    name: 'Danilo Markicevic',
    role: ['admin'],
  },
  {
    id: 6,
    name: 'Vladimir Stojanovic',
    role: ['superadmin'],
  },
  {
    id: 7,
    name: 'Petar Antic',
    role: ['employee'],
  },
];

export { gainedPoints, spentPoints, productsList, ordersList, usersList };
