import { Suspense, lazy } from 'react';
import Search from '../components/Search';

const Cards = lazy(() => import('../components/Cards'))

const Home = () => {
  return (
    <>
      <Search />
      <Suspense fallback={<div>Loading...</div>}>
        <Cards />
      </Suspense>
    </>
  );
}

export default Home;