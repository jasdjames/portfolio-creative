import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './layouts/Main';
import { Photo, Coding, Teaching, Contact, Intro } from './pages';

// import { Photo } from './pages/Photo';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Intro />} />
          <Route path="/photography" element={<Photo />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
