import { Suspense, ReactNode, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

type Props = {
  children: ReactNode;
};

const Slider = lazy(() => import('../components/Slider'))

const Layout = ({ children }: Props) => {
  return (
    <>      
      <Suspense fallback={<div>Loading...</div>}>
        <Slider />
      </Suspense>
      <Header />
      <main>{children}</main>
      <Outlet />
    </>
  );
};

export default Layout;
