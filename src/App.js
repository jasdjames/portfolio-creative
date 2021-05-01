import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Main } from './layouts/Main';
import { Photo, Coding } from './pages';
import Contact from './pages/Contact';
// import { Photo } from './pages/Photo';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Main />
        <Routes>
          {/* <Route element={<Main />}> */}
          <Route path="/" exact element={<Contact />} />
          <Route path="/photography" exact element={<Photo />} />
          <Route path="/coding" exact element={<Coding />} />
          {/* <Route path="/teaching" element={<Teaching />} /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
