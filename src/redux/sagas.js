import { all } from 'redux-saga/effects'
import appSagas from './app/saga'
import errorSagas from './error/saga'
import loadingSagas from './loading/saga'

export default function * rootSaga() {
  yield all([
    appSagas(),
    errorSagas(),
    loadingSagas()
  ]);
}
