import { Action } from '../system/Collection'

var initialState = {
    dataMaterial: []
}

const material = (state = initialState, action) => {
    switch (action.type) {
        case Action.ADD_MATERIAL:
            return Object.assign({}, state, { dataMaterial: action.dataMaterial });
        case Action.GET_MATERIAL:
            return Object.assign({}, state, { dataMaterial: action.dataMaterial });
        default:
            return state
    }
}

export default material;