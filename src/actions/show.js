export const actionTypes = {
  FETCH_SHOW_REQUEST: 'show/FETCH_SHOW_REQUEST',
  FETCH_SHOW_SUCCESS: 'show/FETCH_SHOW_SUCCESS',
  FETCH_SHOW_ERROR: 'show/FETCH_SHOW_ERROR',
}

export const fetchShow = () => ({
  type: actionTypes.FETCH_SHOW_REQUEST,
  name: 'Powerpuff Girls',
  embed: 'episodes',
})
