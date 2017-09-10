import * as Types from './constants'

export const requestGifs = term => ({
  type: Types.REQUEST_GIFS,
  term
})

export const requestGifsDone = gifs => ({
  type: Types.REQUEST_GIFS_DONE,
  gifs
})
