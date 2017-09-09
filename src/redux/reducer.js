import { combineReducers } from 'redux'

import AuthReducer from './auth/reducer'
import GifsReducer from './gifs/reducer'
import ModalReducer from './gif_modal/reducer'

import { routerReducer } from 'react-router-redux'
import { reducer as FormReducer } from 'redux-form'

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  gifs: GifsReducer,
  modal: ModalReducer,
  router: routerReducer
})

export default rootReducer
