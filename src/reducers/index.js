import { combineReducers } from 'redux'
import score from './score'

const rpsApp = combineReducers({
  score
})

export default rpsApp