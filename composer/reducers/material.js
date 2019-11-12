import { Action } from '../system/Collection'

var initialState = {
    dataMaterial: [],
    selectedMaterial: [],
}

const material = (state = initialState, action) => {
    switch (action.type) {
        case Action.ADD_MATERIAL:
            return Object.assign({}, state, { dataMaterial: action.dataMaterial });
        case Action.GET_MATERIAL:
            return Object.assign({}, state, { dataMaterial: action.dataMaterial });
        case Action.ADD_SELECTED_MATERIAL:
            return Object.assign({}, state, { selectedMaterial: action.selectedMaterial });
        case Action.GET_SELECTED_MATERIAL:
            return Object.assign({}, state, { get: true });
        case Action.DELETE_SELECTED_MATERIAL:
            return Object.assign({}, state, { selectedMaterial: action.selectedMaterial })
        default:
            return state
    }
}

export default material;