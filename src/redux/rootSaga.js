import { all, call } from 'redux-saga/effects';

import userSagas from './User/user.sagas';
import productSagas from './Products/prodcuts.saga';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(productSagas)
  ])
}