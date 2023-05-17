import Footer from './footer';
import { render } from '@testing-library/react';

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Footer />);
    expect(baseElement).toBeTruthy();
  });
});
