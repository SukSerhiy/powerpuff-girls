import { put } from 'redux-saga/effects'
import { api } from '../config'
import { actionTypes } from '../actions/episode'

export function* fetchEpisode(action) {
  try {
    const resp = yield api.fetchEpisode(action.id)
    yield put({
      type: actionTypes.FETCH_EPISODE_SUCCESS,
      items: resp.data,
    })
  } catch (error) {
    yield put({
      type: actionTypes.FETCH_EPISODE_ERROR,
      error,
    })
  }
}
