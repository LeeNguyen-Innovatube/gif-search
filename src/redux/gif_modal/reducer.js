import { types } from './actions'

const initialState = {
  selectedGif: null,
  modalIsOpen: false
}

export default function modal (state = initialState, action) {
  switch (action.type) {
    case types.OPEN_MODAL:
      return { ...state, modalIsOpen: true, selectedGif: action.gif }
    case types.CLOSE_MODAL:
      return { ...state, modalIsOpen: false, selectedGif: null }
    default:
      return state
  }
}
