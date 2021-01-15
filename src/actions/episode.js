export const actionTypes = {
  FETCH_EPISODE_REQUEST: 'episode/FETCH_EPISODE_REQUEST',
  FETCH_EPISODE_SUCCESS: 'episode/FETCH_EPISODE_SUCCESS',
  FETCH_EPISODE_ERROR: 'episode/FETCH_EPISODE_ERROR',
}

export const fetchEpisode = (id) => ({
  type: actionTypes.FETCH_EPISODE_REQUEST,
  id,
})
