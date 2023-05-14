import { environment } from '../environments/environment';

const API_ROOT = environment.API_URL;
export const getShopItems = async (): Promise<any[]> => {
  const resp = await fetch(`${API_ROOT}/shop`);
  const items = await resp.json();
  return items;
};
