import Layout from './layout';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

describe('Layout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
