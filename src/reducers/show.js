/* eslint-disable import/no-anonymous-default-export */
import { actionTypes } from '../actions/show'

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
    _embedded: {
      episodes: []
    }
  },
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SHOW_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case actionTypes.FETCH_SHOW_SUCCESS: {
      const { items } = action
      return {
        ...state,
        isFetching: false,
        data: items,
      }
    }
    case actionTypes.FETCH_SHOW_ERROR:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}