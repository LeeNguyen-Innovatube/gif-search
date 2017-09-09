export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export const openModal = gif => ({
  type: OPEN_MODAL,
  gif
})

export const closeModal = () => ({
  type: CLOSE_MODAL
})
