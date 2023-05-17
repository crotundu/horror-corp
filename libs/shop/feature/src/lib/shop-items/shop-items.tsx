import { addItem, itemExists } from '@horror-corp/shared/data-access';

import Item from '../item/item';
import { cart } from '@horror-corp/shared/data-access';
import { getShopItems } from '@horror-corp/shop/data-access';
import styles from './shop-items.module.css';
import { useQuery } from 'react-query';
import { useStore } from '@nanostores/react';

export const ShopItems = () => {
  const query = useQuery('shopItems', getShopItems);
  // This bit here makes sure we re-render when the cart store changes.
  useStore(cart);

  return (
    <div className={styles.container}>
      {query.data?.map((item) => (
        <Item
          key={item.id}
          title={item.characterName}
          subtitle={item.filmName}
          imageUrl={item.imageSrc}
          description={item.description}
          onClick={() => addItem(item)}
          disabled={itemExists(item.id)}
        />
      ))}
    </div>
  );
};
