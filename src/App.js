import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import * as ROUTES from './constants/routes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import withAuthenticaton from './hoc/withAuthentication';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkUserSession } from './redux/User/user.actions';
import ProductCategory from './components/ProductCategory/ProductCategory';
import MainLayout from './layout/MainLayout';
import ShipmentAddress from './components/ShipmentAddress/ShipmentAddress';
import ProductDesc from './components/ProductDesc/ProductDesc';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { publishableKey } from './config/StripeConfig';

const stripePromise = loadStripe(publishableKey);

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  })
  return (
    // <Dashboard />
    <div className="main-app">
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.DASHBOARD}>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </Route>
          <Route path={ROUTES.CART}>
            <MainLayout>
              <Cart />
            </MainLayout>
          </Route>
          <Route exact path={ROUTES.PRODUCTS}>
            <MainLayout>
              <ProductCategory />
            </MainLayout>
          </Route>
          <Route path={ROUTES.PRODUCT_CATEGORY}>
            <MainLayout>
              <ProductCategory />
            </MainLayout>
          </Route>
          <Route path={ROUTES.PAYMENT}>
            <Elements stripe={stripePromise}>
              <MainLayout>
                <ShipmentAddress />
              </MainLayout>
            </Elements>
          </Route>
          <Route path={ROUTES.PRODUCT_DETAILS}>
            <MainLayout>
              <ProductDesc />
            </MainLayout>
          </Route>
          <Route path={ROUTES.ORDERS}>
            <MainLayout>
              <ProductDesc />
            </MainLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default withAuthenticaton(App);
