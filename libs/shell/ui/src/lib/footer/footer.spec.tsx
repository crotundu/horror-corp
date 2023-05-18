import { Footer } from './footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Router>
        <Footer />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });
});
