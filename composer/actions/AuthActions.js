import {AsyncStorage} from 'react-native'
import {Action, AuthKey} from '../system/Collection'

export function checkSigned () {
    return (dispatch) => {
        AsyncStorage.getItem ( AuthKey.IS_SIGNED).then(res => {
            dispatch({type: Action.CHECK_SIGNED, signedIn: res != null ? true : false})
        })
        .catch(err => reject(err));
    }
}

export function changeState (key, value) {
    return (dispatch) => {
        dispatch({ type: Action.CHANGE_STATE, key: key, value: value })
    }
}

export function loginPost (this2) {
    return (dispatch) => {
        this2.props.navigation.navigate('HomeStack')
        dispatch({ type: Action.LOGIN_POST })
    }
}

export function logout () {
    return (dispatch) => {
        dispatch({ type: Action.LOGOUT })
    }
}