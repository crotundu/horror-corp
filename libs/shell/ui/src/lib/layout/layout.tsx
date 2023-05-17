import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { PropsWithChildren } from 'react';
import styles from './layout.module.css';

/* eslint-disable-next-line */
export interface LayoutProps {}

export const Layout = (props: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <Header />
      <div className={styles['container']}>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
