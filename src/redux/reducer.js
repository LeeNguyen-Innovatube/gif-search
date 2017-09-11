import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as form } from 'redux-form'

import auth from './auth/reducer'
import gifs from './gifs/reducer'
import modal from './gif_modal/reducer'

const rootReducer = combineReducers({
  form,
  router,
  auth,
  gifs,
  modal
})

export default rootReducer
