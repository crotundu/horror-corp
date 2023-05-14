import { getShopItems } from '../api/getShopItems';
import { useQuery } from 'react-query';

export const Items = () => {
  const query = useQuery('shopItems', getShopItems);
  return (
    <div>
      {query.data?.map((item) => (
        <div>{item.characterName}</div>
      ))}
    </div>
  );
};
