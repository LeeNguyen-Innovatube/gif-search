import { createStore, compose, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './reducer'
import CreateHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import * as AuthActions from './auth/actions'

export const history = CreateHistory()

export default function configureStore (initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(reduxThunk, routerMiddleware(history)),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer').default
      store.replaceReducer(nextRootReducer)
    })
  }

  store.dispatch(AuthActions.verifyAuth())

  return store
}
