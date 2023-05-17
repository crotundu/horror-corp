import { Link } from 'react-router-dom';
import styles from './footer.module.css';

/* eslint-disable-next-line */
export interface FooterProps {}

export const Footer = (props: FooterProps) => {
  return (
    <footer className={styles.container}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      |
      <Link className={styles.link} to="/shop">
        Shop
      </Link>
      |
      <Link className={styles.link} to="/cart">
        Cart
      </Link>
    </footer>
  );
};
