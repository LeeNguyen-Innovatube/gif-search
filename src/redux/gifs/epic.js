import * as Types from './constants'
import * as Actions from './actions'
import 'rxjs'
import { Observable } from 'rxjs/Observable'

const API_URL = 'http://api.giphy.com/v1/gifs/search?q='
const API_KEY = '&api_key=dc6zaTOxFJmzC'

const requestGifsEpic = action$ =>
  action$.ofType(Types.REQUEST_GIFS)
    .mergeMap(action =>
      Observable.ajax(`${API_URL}${action.term.replace(/\s/g, '+')}${API_KEY}`)
        .map(res => Actions.requestGifsDone(res.response.data))
    )

export default requestGifsEpic
