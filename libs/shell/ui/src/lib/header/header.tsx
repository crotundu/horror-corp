import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <header className={styles.container}>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
        }
        to="/"
      >
        <span>Home</span>
      </NavLink>

      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
        }
        to="/shop"
      >
        Shop
      </NavLink>

      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
        }
        to="/cart"
      >
        Cart
      </NavLink>
    </header>
  );
};
