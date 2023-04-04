import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const activeLink = styles.header__link_active + ' ' + styles.header__link;
  const normalLink = styles.header__link;

  return (
    <header className={styles.header}>
      <div className={styles.header__logo_wrapper}>
        <div className={styles.header__logo}>G</div>
        <div className={styles.header__logo_text}>Global</div>
      </div>
      <div className={styles.header__wrapper_links}>
        <NavLink
          to="/home"
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
          to="*"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          Help
        </NavLink>
      </div>
      <button className={styles.header__button}>Sign Up</button>
    </header>
  );
};

export default Navbar;
