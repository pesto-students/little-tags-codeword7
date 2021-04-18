import { createStore, applyMiddleware, compose  } from 'redux';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddle from 'redux-saga';

// import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddle();

export const middlewares = [sagaMiddleware, logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);

export default store;
