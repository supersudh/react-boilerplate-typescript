import { takeLatest, call, put, select, fork } from 'redux-saga/effects';

import ActionTypes from './constants';

import { updateCounter } from './actions';

// Individual exports for testing
export default function* dataGridSaga() {
  // See example in containers/HomePage/saga.js
  yield fork(updateCounterWatcher);
}

function* updateCounterWatcher() {
  yield takeLatest(ActionTypes.ON_UPDATE_COUNTER, function*() {
    const {
      dataGrid: {
        counter,
      },
    } = yield select();
    yield put(updateCounter(counter + 1));
  });
}
