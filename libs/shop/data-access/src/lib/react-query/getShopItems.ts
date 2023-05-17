import { ShopItem } from '@horror-corp/shared/data-access';

const API_ROOT = process.env.NX_API_URL;
export const getShopItems = async (): Promise<ShopItem[]> => {
  const resp = await fetch(`${API_ROOT}/shop`);
  return await resp.json();
};
