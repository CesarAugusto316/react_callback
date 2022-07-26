import { FC, DispatchWithoutAction } from 'react';
import './navbar.css';
import {
  HiMenuAlt1, HiMoon, HiSun,
} from 'react-icons/hi';
import { Link } from 'react-router-dom';


interface NavbarProps {
  onChangeTheme: DispatchWithoutAction;
  theme: boolean
}

/**
 *
 * @description Navbar that implements light and dark mode
 */
export const Navbar: FC<NavbarProps> = ({ onChangeTheme, theme }) => {
  return (
    <nav className="navbar">
      <HiMenuAlt1 className="navbar__icon navbar__icon--toggle" />

      <div className="navbar__links-box">
        <Link to="/" className="navbar__link">Courses</Link>
        <Link to="/boxes" className="navbar__link">Boxes</Link>
      </div>

      <span onClick={onChangeTheme}>
        {theme
          ? <HiSun className="navbar__icon" title="change to dark mode" />
          : <HiMoon className="navbar__icon" title="change to light mode" />}
      </span>
    </nav>
  );
};
