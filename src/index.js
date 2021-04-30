import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import FirebaseContext from './Config/Firebase/context';
// import Firebase from './Config/Firebase/Firebase';
import { Provider } from 'react-redux';
import store from './redux/createStore';
import { LanguageProvider } from './Config/Language';

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
