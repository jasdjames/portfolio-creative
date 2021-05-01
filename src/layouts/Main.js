import { Outlet } from 'react-router';
import { Header } from '../components';

export const Main = (props) => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className=" border-t-4 w-full h-full bg-gradient-to-r from-pink-500 to-yellow-500">
        <Outlet />
      </div>
    </>
  );
  //   <Footer />;
};
