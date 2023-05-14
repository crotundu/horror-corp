import { ErrorBoundary } from 'react-error-boundary';
import { Items } from '../components/items';
import { QueryClientProvider } from 'react-query';
import { SillyComponent } from '@horror-corp/cart';
import { Suspense } from 'react';
import { queryClient } from '../api/react-query';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallback={<div>Oops! Something went wrong!</div>}>
        <h1>Welcome to Shop!!</h1>
        <div>Items:</div>
        <Suspense fallback={<div>No items available</div>}>
          <Items />
          <SillyComponent />
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
