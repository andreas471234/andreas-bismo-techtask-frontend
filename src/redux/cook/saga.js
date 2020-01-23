import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import actions from './action';
import getApi from '../../methods/get';
import { ConfigUrl } from "../../configs/url"

export function* getIngredientList() {
  yield takeEvery(actions.GET_INGREDIENT_LIST_REQUEST, function* () {
    try {
      let res = yield call(getApi, { url: ConfigUrl.ingredient })
      console.log(res)
      if (res) {
        yield put({
          type: actions.GET_INGREDIENT_LIST_SUCCESS,
          data: res.data
        })
      } else {
        yield put({
          type: actions.GET_INGREDIENT_LIST_FAILURE,
          data: []
        });
      }
    }
    catch (res) {
      yield put({
        type: actions.GET_INGREDIENT_LIST_FAILURE,
        data: []
      });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(getIngredientList)
  ]);
}