import { Action } from '../system/Collection'

var initialState = {
    
}

const auth = (state = initialState, action) => {
    switch (action.type) {

        case Action.CHECK_SIGNED:
            state = Object.assign({}, state, { signedIn: action.signedIn })
            return state

        case Action.CHANGE_STATE:
            state = Object.assign({}, state, { [action.key]: action.value })
            return state

        case Action.LOGIN_POST:
            state = Object.assign({}, state, { username: action.username, password: action.password })
            return state

        default:
            return state
    }
}

export default auth;