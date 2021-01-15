/* eslint-disable import/no-anonymous-default-export */
import { actionTypes } from '../actions/episode'

const defaultState = {
  isFetching: false,
  data: {
    id: null,
    name: null,
    summary: null,
    image: {
      medium: null,
      original: null,
    },
  },
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_EPISODE_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case actionTypes.FETCH_EPISODE_SUCCESS: {
      const { items } = action
      return {
        ...state,
        isFetching: false,
        data: items,
      }
    }
    case actionTypes.FETCH_EPISODE_ERROR:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}
