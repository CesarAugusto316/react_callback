import { FC, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CardsList, Navbar, Box } from './components';


export const App: FC = () => {
  const [toggleTheme, setToogleTheme] = useReducer((state) => !state, false);

  return (
    <div className="app" data-theme={toggleTheme ? 'light' : 'dark'}>
      <Navbar onChangeTheme={setToogleTheme} theme={toggleTheme} />

      <section className="section">
        <Routes>
          <Route path="/" element={<CardsList />} />
          <Route path="/boxes" element={<Box />} />
          <Route path="/*" element={<h1>Page not Found 404</h1>} />
        </Routes>
      </section>
    </div>
  );
};
