// import { AUTH_USER, AUTH_ERROR, SIGN_OUT_USER } from './actions'
import { types } from './actions'

const initialState = {
  authenticated: false,
  error: null
}

export default function gifs (state = initialState, action) {
  switch (action.type) {
    case types.AUTH_USER:
      return { ...state, authenticated: true, error: null }
    case types.SIGN_OUT_USER:
      return { ...state, authenticated: false, error: null }
    case types.AUTH_ERROR:
      return { ...state, error: action.payload.message }
    default:
      return state
  }
}
