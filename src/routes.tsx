import type { RouteObject } from 'react-router';
import Page404 from './pages/Page404';
import Home from './pages/Home';
import Stocks from './pages/Stocks';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  }, 
  {
    path: '/stocks/:symbol',
    element: <Stocks />
  },
  {
    path: '*',
    element: <Page404 />
  }
];

export default routes;
