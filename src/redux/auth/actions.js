import Firebase from 'firebase'

export const SIGN_OUT_USER = 'SIGN_OUT_USER'
export const AUTH_ERROR = 'AUTH_ERROR'
export const AUTH_USER = 'AUTH_USER'

const config = {
  apiKey: 'AIzaSyCmjMN7wsweCSPcy2gqUOkNqRIN3LYpQPQ',
  authDomain: 'react-gifs-search.firebaseapp.com',
  databaseURL: 'https://react-gifs-search.firebaseio.com'
}

Firebase.initializeApp(config)

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
