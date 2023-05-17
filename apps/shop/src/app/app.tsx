import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from 'react-query';
import { ShopItems } from '@horror-corp/shop/feature';
import { Suspense } from 'react';
import { queryClient } from '@horror-corp/shop/data-access';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallback={<div>Oops! Something went wrong!</div>}>
        <Suspense fallback={<div>No items available</div>}>
          <ShopItems />
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
