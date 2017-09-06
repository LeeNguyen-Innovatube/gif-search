import { REQUEST_GIFS } from '../actions/index'

const initialState = []

export default function gifs (state = initialState, action) {
  switch (action.type) {
    case REQUEST_GIFS:
      return action.payload.body.data
    default:
      return state
  }
}
