import { Header } from './header';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });
});
