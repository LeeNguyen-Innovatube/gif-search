import Firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCmjMN7wsweCSPcy2gqUOkNqRIN3LYpQPQ',
  authDomain: 'react-gifs-search.firebaseapp.com',
  databaseURL: 'https://react-gifs-search.firebaseio.com'
}

Firebase.initializeApp(config)

export const types = {
  SIGN_OUT_USER: 'SIGN_OUT_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  AUTH_USER: 'AUTH_USER'
}

export const actions = {
  authUser: () => ({ type: types.AUTH_USER }),

  authError: (error) => ({ type: types.AUTH_ERROR, payload: error }),

  signInUser: (credentials) => (dispatch) => {
    Firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(res => dispatch(actions.authUser()))
      .catch(err => dispatch(actions.authError(err)))
  },

  signUpUser: (credentials) => (dispatch) => {
    Firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(res => dispatch(actions.authUser()))
      .catch(err => dispatch(actions.authError(err)))
  },

  signOutUser: () => (dispatch) => {
    Firebase.auth().signOut().then(() => dispatch({ type: types.SIGN_OUT_USER }))
  }
}
