import { all, takeEvery, fork, put } from 'redux-saga/effects'
import actions from './action'

export function * requestMonitor () {
  yield takeEvery('*', function * (payload) {
    const { type } = payload
    const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type)

    if (!matches) return

    const [, requestName, requestState] = matches
    yield put({ type: actions.UPDATE_ERROR_STATES, target: {[requestName]: requestState === 'FAILURE'} })
    // yield put({ type: actions.UPDATE_ERROR_STATES, target: {[requestName]: requestState === 'FAILURE' ? (payload.message || `${requestName} FAILED`) : ''} })
  })
}

export default function * rootSaga () {
  yield all([
    fork(requestMonitor)
  ])
}
