import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import * as ROUTES from './constants/routes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/HeaderComponent';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import withAuthenticaton from './hoc/withAuthentication';

function App() {
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
        </Switch>
      </BrowserRouter>
      <Footer className="footer" />
    </div>
  );
}

export default withAuthenticaton(App);
