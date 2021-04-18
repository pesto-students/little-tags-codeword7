import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import * as ROUTES from './constants/routes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/HeaderComponent';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import withAuthenticaton from './hoc/withAuthentication';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkUserSession } from './redux/User/user.actions';
import  ProductCategory  from './components/ProductCategory/ProductCategory';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  })
  return (
    // <Dashboard />
    <div className="main-app">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.DASHBOARD}>
            <Dashboard />
          </Route>
          <Route path={ROUTES.CART}>
            <Cart />
          </Route>
          <Route exact path={ROUTES.PRODUCTS}>
            <ProductCategory />
          </Route>
          <Route path={ROUTES.PRODUCT_CATEGORY}>
            <ProductCategory />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer className="footer" />
    </div>
  );
}

export default withAuthenticaton(App);
