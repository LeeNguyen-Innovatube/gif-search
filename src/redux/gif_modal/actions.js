export const types = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
}

export const actions = {
  openModal: (gif) => ({ type: types.OPEN_MODAL, gif }),
  closeModal: () => ({ type: types.CLOSE_MODAL })
}
