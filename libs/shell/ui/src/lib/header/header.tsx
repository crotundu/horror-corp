import { Link } from 'react-router-dom';
import styles from './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Header!</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/shop">Shop</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
