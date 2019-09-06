import { Menu, Action } from "../system/Collection";


export function changeMenu (id) {
    return (dispatch) => {
        dispatch({ type: Action.CHANGE_MENU, activeMenu: Menu[id] })
    }
}

export function toggleMenu (isOpened) {
    return (dispatch) => {
        dispatch({ type: Action.TOGGLE_MENU, sideMenuOpened: !isOpened })
    }
}