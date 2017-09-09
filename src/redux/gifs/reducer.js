import { REQUEST_GIFS } from './actions'

const initialState = {
  data: [],
  favorited: []
}

export default function gifs (state = initialState, action) {
  switch (action.type) {
    case REQUEST_GIFS:
      return { ...state, data: action.payload.data }
    default:
      return state
  }
}