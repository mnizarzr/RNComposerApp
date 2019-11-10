import { combineReducers } from 'redux'
import auth from './auth'
import material from './material'

export default combineReducers({
    auth, material
})