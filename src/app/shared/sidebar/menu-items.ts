import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '/sale',
    title: 'Venta',
    icon: 'bi bi-receipt',
    class: '',
    extralink: false,
    submenu: [],
  },
  {
    path: '/component/User/list',
    title: 'Usuarios',
    icon: 'bi bi-receipt',
    class: '',
    extralink: false,
    submenu: [{
      path: '',
      title: 'Usuarios',
      icon: 'bi bi-receipt',
      class: '',
      extralink: false,
      submenu: [],
    }],
  },
];
