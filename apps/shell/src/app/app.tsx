import * as React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Layout } from '@horror-corp/shell/ui';

const Shop = React.lazy(() => import('shop/Module'));
const Cart = React.lazy(() => import('cart/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<h1 className="text-gradient">Shop of Horrors</h1>}
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </React.Suspense>
  );
}

export default App;
