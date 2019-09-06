import {combineReducers} from 'redux'
import {Action, Menu} from '../system/Collection'

let dataState = {
    activeMenu: Menu[0],
    sideMenuOpened: false
}

let authState = {}

const authReducer = (state = authState, action) => {
    switch (action.type) {

        case Action.CHECK_SIGNED:
            state = Object.assign({}, state, {signedIn: action.signedIn})
            return state

        case Action.CHANGE_STATE:
            state = Object.assign({}, state, { [action.key]: action.value })
            return state

        case Action.LOGIN_POST:
            console.log(state)
            state = Object.assign({}, state, {username: action.username, password: action.password})
            return state
    
        default:
            return state
    }
}

const mainReducer = (state = dataState, action) => {
    switch (action.type) {

        case Action.CHANGE_MENU:
            state = Object.assign({}, state, {activeMenu: action.activeMenu, sideMenuOpened: false})
            return state

        case Action.TOGGLE_MENU:
            state = Object.assign({}, state, {sideMenuOpened: action.sideMenuOpened})
            return state

        default:
            return state

    }
}

const rootReducer = combineReducers({
    authReducer, mainReducer
})

export default rootReducer