import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainRoute from './components/MainRoute.jsx';
import Shop from './components/Shop.jsx';
import NotFound from './components/NotFound.jsx';
import Registar from './components/Registar.jsx';
import Login from './components/Login.jsx';
import Wishlist from './components/Wishlist.jsx';
import Cart from './components/Cart.jsx';
import checkout from './components/Checkout.jsx';
import Profile from './components/Profile.jsx';
import Details from './components/Details.jsx';
import Navbar from './components/Navbar.jsx';
import Categoryproduct from './components/Categoryproduct.jsx';
import Searchproduct from './components/Searchproduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainRoute,
    children: [
      { index: true, Component: App },
      { path: 'shop', Component: Shop },
      { path: '*', Component: NotFound },
      { path: 'registar', Component: Registar },
      { path: 'login', Component: Login },
      { path: 'wishlist', Component: Wishlist },
      { path: 'cart', Component: Cart },
      { path: 'checkout', Component: checkout},
      { path: 'profile', Component: Profile},
      { path: 'product/detail/:id', Component: Details},
      { path: 'products/category/:slug', Component: Categoryproduct},
      { path: 'search/product/:keyword', Component: Searchproduct},
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
