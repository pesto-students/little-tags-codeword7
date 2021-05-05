import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import * as ROUTES from './constants/routes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import withAuthenticaton from './hoc/withAuthentication';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { checkUserSession } from './redux/User/user.actions';
import ProductCategory from './components/ProductCategory/ProductCategory';
import MainLayout from './layout/MainLayout';
import ShipmentAddress from './components/ShipmentAddress/ShipmentAddress';
import ProductDesc from './components/ProductDesc/ProductDesc';
import OrderHistory from './components/OrderHistory/OrderHistory';
import OrderSuccessConfirmation from './components/OrderSuccessConfirmation/OrderSuccessConfirmation';
import DashboardLayout from './layout/DashboardLayout/DashboardLayout';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import 'react-toastify/dist/ReactToastify.css';

const App = ({ userCheck, userAddressFlag }) => {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(checkUserSession());
  // })
  return (
    // <Dashboard />
    <div className={(userCheck || userAddressFlag) ? 'main-app-check' : 'main-app'}>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route exact path={ROUTES.DASHBOARD}>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
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
            <MainLayout>
              <ShipmentAddress />
            </MainLayout>
          </Route>
          <Route path={ROUTES.PRODUCT_DETAILS}>
            <MainLayout>
              <ProductDesc />
            </MainLayout>
          </Route>
          <Route path={ROUTES.ORDERS}>
            <MainLayout>
              <OrderHistory />
            </MainLayout>
          </Route>
          <Route path={ROUTES.ORDER_SUCCESS}>
            <MainLayout>
              <OrderSuccessConfirmation />
            </MainLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default withAuthenticaton(App);
