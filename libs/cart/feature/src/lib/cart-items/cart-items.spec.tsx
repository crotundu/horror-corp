import { CartItems } from './cart-items';
import { render } from '@testing-library/react';

describe('Items', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CartItems />);
    expect(baseElement).toBeTruthy();
  });
});
