import { cart, removeItem } from '@horror-corp/shared/data-access';

import Item from '../item/item';
import styles from './cart-items.module.css';
import { useStore } from '@nanostores/react';

export const CartItems = () => {
  const cartItems = useStore(cart);

  return (
    <div className={styles.container}>
      {cartItems.map((item) => (
        <Item
          key={item.id}
          title={item.characterName}
          imageUrl={item.imageSrc}
          onClick={() => removeItem(item.id)}
        />
      ))}
    </div>
  );
};
