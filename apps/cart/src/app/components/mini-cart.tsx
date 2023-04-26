import classnames from 'classnames';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "./mini-cart.module.css";

export const MiniCart = () => {
    return <div className={classnames(styles.container, styles.red, styles.thick)}>This is your little Mini Cart!</div>
}

export default MiniCart;