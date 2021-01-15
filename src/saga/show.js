import { put } from 'redux-saga/effects'
import { api } from '../config'
import { actionTypes } from '../actions/show'

export function* fetchShow(action) {
  try {
    const resp = yield api.fetchSingleShow(action.name, action.embed)
    yield put({
      type: actionTypes.FETCH_SHOW_SUCCESS,
      items: resp.data,
    })
  } catch (error) {
    yield put({
      type: actionTypes.FETCH_SHOW_ERROR,
      error,
    })
  }
}
