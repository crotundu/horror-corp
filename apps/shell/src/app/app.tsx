import * as React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Header } from 'libs/shell/ui/src';

const Shop = React.lazy(() => import('shop/Module'));
const Cart = React.lazy(() => import('cart/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Welcome to your Shell!</h1>
            </>
          }
        />

        <Route path="/shop" element={<Shop />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
