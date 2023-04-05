import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { useState } from 'react';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const activeLink = styles.nav__link_active + ' ' + styles.nav__link;
  const normalLink = styles.nav__link;

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo_wrapper}>
        <div className={styles.nav__logo}>G</div>
        <div className={styles.nav__logo_text}>Global</div>
      </div>
      <div
        className={
          menuActive
            ? styles.nav__wrapper_links + ' ' + styles.active
            : styles.nav__wrapper_links
        }
      >
        <NavLink
          to="/test-task/"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          Mobile Top Up
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          About
        </NavLink>
        <NavLink
          to="/rate"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          Rate
        </NavLink>
        <NavLink
          to="/help"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          Help
        </NavLink>
      </div>
      <button className={styles.nav__button}>Sign Up</button>
      <button
        onClick={() => setMenuActive(!menuActive)}
        className={styles.nav__burger_btn}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;
