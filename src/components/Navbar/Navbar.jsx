import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const activeLink = styles.nav__link_active + ' ' + styles.nav__link;
  const normalLink = styles.nav__link;

  return (
    <nav className={styles.nav}>
      {/* <div className='burger-btn'></div> */}
      <div className={styles.nav__logo_wrapper}>
        <div className={styles.nav__logo}>G</div>
        <div className={styles.nav__logo_text}>Global</div>
      </div>
      <div className={styles.nav__wrapper_links}>
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
      <button className={styles.nav__button}>Sign Up</button>
    </nav>
  );
};

export default Navbar;
