import * as Types from './constants'

const initialState = {
  data: [],
  favorited: []
}

export default function gifs (state = initialState, action) {
  switch (action.type) {
    case Types.REQUEST_GIFS_DONE:
      return { ...state, data: action.gifs }
    default:
      return state
  }
}
