import { ShopItem } from '../models/shop-item';
import { persistentAtom } from '@nanostores/persistent';

export const cart = persistentAtom<ShopItem[]>('cart', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export const addItem = (item: ShopItem) => {
  cart.set([...cart.get(), item]);
};

export const removeItem = (itemId: string) => {
  cart.set(cart.get().filter((item) => item.id !== itemId));
};

export const itemExists = (itemId: string) => {
  return !!cart.get().find((item) => item.id === itemId);
};

export const reset = () => cart.set([]);
