import { EvilPlaceholder, PlusSquare } from '@horror-corp/shared/ui';

import { FC } from 'react';
import classNames from 'classnames';
import styles from './item.module.css';

/* eslint-disable-next-line */
export interface ItemProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  description?: string;
  disabled?: boolean;
  onClick: () => void;
}

export const Item: FC<ItemProps> = ({
  title,
  subtitle,
  imageUrl,
  description,
  disabled,
  onClick,
}) => {
  return (
    <div
      className={classNames([
        styles.container,
        disabled ? styles.disabled : '',
      ])}
    >
      <div className={styles.header}>
        <img
          className={styles.image}
          src={imageUrl ?? EvilPlaceholder}
          width={100}
          height={100}
          alt="evil-character"
        />
        <div>
          <div className={styles.title}>{title}</div>
          <div className={styles.subtitle}>{subtitle}</div>
        </div>
      </div>
      <div className={styles.description}>{description}</div>
      <div>
        <button onClick={onClick} disabled={disabled}>
          {!disabled ? (
            <img src={PlusSquare} width={100} alt="add to cart" />
          ) : null}
        </button>
      </div>
    </div>
  );
};

export default Item;
