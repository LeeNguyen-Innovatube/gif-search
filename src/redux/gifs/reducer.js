import { types } from './actions'

const initialState = {
  data: [],
  favorited: []
}

export default function gifs (state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_GIFS_DONE:
      return { ...state, data: action.gifs }
    default:
      return state
  }
}
