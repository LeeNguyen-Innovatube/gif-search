export const types = {
  REQUEST_GIFS: 'REQUEST_GIFS',
  REQUEST_GIFS_DONE: 'REQUEST_GIFS_DONE'
}

export const actions = {
  requestGifs: (term) => ({ type: types.REQUEST_GIFS, term }),
  requestGifsDone: (gifs) => ({ type: types.REQUEST_GIFS_DONE, gifs })
}
