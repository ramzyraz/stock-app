import { Suspense, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Slider from '../components/Slider';

type Props = {
  children: ReactNode;
};

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
