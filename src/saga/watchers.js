import { takeEvery, all } from 'redux-saga/effects'
import { actionTypes as showActionTypes } from '../actions/show'
import { actionTypes as episodeActionTypes } from '../actions/episode'
import { fetchShow } from './show'
import { fetchEpisode } from './episode'

function* fetchShowWatcher() {
  yield takeEvery(showActionTypes.FETCH_SHOW_REQUEST, fetchShow)
}

function* fetchEpisodeWatcher() {
  yield takeEvery(episodeActionTypes.FETCH_EPISODE_REQUEST, fetchEpisode)
}

export default function* rootSaga() {
  yield all([
    fetchShowWatcher(),
    fetchEpisodeWatcher(),
  ])
}
