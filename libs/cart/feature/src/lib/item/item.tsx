import { EvilPlaceholder, MinusSquare } from '@horror-corp/shared/ui';

import { FC } from 'react';
import styles from './item.module.css';

/* eslint-disable-next-line */
export interface ItemProps {
  title: string;
  imageUrl?: string;
  description?: string;
  onClick: () => void;
}

export const Item: FC<ItemProps> = ({ title, imageUrl, onClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          className={styles.image}
          src={imageUrl ?? EvilPlaceholder}
          width={50}
          height={50}
          alt="evil-character"
        />

        <div className={styles.title}>{title}</div>
      </div>
      <div>
        <button onClick={onClick}>
          <img src={MinusSquare} width={50} aria-label="remove from cart" />
        </button>
      </div>
    </div>
  );
};

export default Item;
