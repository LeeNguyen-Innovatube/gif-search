import request from 'superagent'
import Firebase from 'firebase'
export const REQUEST_GIFS = 'REQUEST_GIFS'
export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const SIGN_OUT_USER = 'SIGN_OUT_USER'
export const AUTH_ERROR = 'AUTH_ERROR'
export const AUTH_USER = 'AUTH_USER'

const API_URL = 'http://api.giphy.com/v1/gifs/search?q='
const API_KEY = '&api_key=dc6zaTOxFJmzC'

const config = {
  apiKey: 'AIzaSyCmjMN7wsweCSPcy2gqUOkNqRIN3LYpQPQ',
  authDomain: 'react-gifs-search.firebaseapp.com',
  databaseURL: 'https://react-gifs-search.firebaseio.com'
}

Firebase.initializeApp(config)

export const requestGifs = (term = null) =>
  (dispatch) => {
    request.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`)
      .then(res => dispatch({ type: REQUEST_GIFS, payload: res.body }))
  }

export const openModal = gif => ({
  type: OPEN_MODAL,
  gif
})

export const closeModal = () => ({
  type: CLOSE_MODAL
})

export const signInUser = (credentials) =>
  (dispatch) => {
    Firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(res => dispatch(authUser()))
      .catch(err => {
        console.log(err)
        dispatch(authError(err))
      })
  }

export const signUpUser = (credentials) =>
  (dispatch) => {
    Firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(res => dispatch(authUser()))
      .catch(err => {
        console.log(err)
        dispatch(authError(err))
      })
  }

export const signOutUser = () =>
  (dispatch) => {
    Firebase.auth().signOut().then(() => dispatch({ type: SIGN_OUT_USER }))
  }
export const verifyAuth = () =>
  (dispatch) => {
    Firebase.auth().onAuthStateChanged(user => user ? dispatch(authUser()) : dispatch(signOutUser()))
  }

export const authUser = () => ({
  type: AUTH_USER
})

export const authError = error => ({
  type: AUTH_ERROR,
  payload: error
})
