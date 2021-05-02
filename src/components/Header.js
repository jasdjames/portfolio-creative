import { NavBar } from './Navbar';

export const Header = () => {
  return (
    <header className=" p-3 bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="font-mono text-white text-center text-4xl text- m-3">
        <span className="text-black">{'{'}</span>
        JasDJames<span className="text-black ">{'}'}</span>
      </h1>

      <div className="m-4 text-center text-xl">
        <p>Creative Portfolio</p>
      </div>
      <div className="container">
        <div className="flex justify-end">
          <NavBar />
        </div>
      </div>
    </header>
  );
};
