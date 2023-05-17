import { ShopItems } from './shop-items';
import { render } from '@testing-library/react';

describe('Items', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShopItems />);
    expect(baseElement).toBeTruthy();
  });
});
