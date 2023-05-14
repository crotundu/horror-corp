import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';

const Shop = React.lazy(() => import('shop/Module'));
const Cart = React.lazy(() => import('cart/Module'));

//const MiniCart = React.lazy(() => import("cart/MiniCart"));

const MiniCart = () => <div>Fake Mini</div>;

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/shop">Shop</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Welcome to your Shell!</h1>
              <MiniCart />
            </>
          }
        />

        <Route path="/shop" element={<Shop />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/mini" element={<MiniCart />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
