import type { RouteObject } from 'react-router';
import Home from './pages/Home';
import Stocks from './pages/Stocks';

const routes: RouteObject[] = [
  {
    path: '*',
    element: <Home />
  }, 
  {
    path: '/stocks/:symbol',
    element: <Stocks />
  }
];

export default routes;
