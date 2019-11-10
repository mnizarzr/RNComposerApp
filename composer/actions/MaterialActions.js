import { Action } from "../system/Collection";
import AsyncStorage from "@react-native-community/async-storage";

export function addMaterial(data) {
    return async (dispatch) => {

        const items = await AsyncStorage.getItem('@dummy_material');
        let newItems = items !== null ? JSON.parse(items) : [data];
        if (items !== null) newItems.push(data);

        try {
            await AsyncStorage.setItem('@dummy_material', JSON.stringify(newItems), err => console.log(err));
            dispatch({ type: Action.ADD_MATERIAL, dataMaterial: newItems })
        }
        catch (e) {
            console.log(e)
        }
    }
}

export function getMaterial() {
    return async (dispatch) => {
        let item = await AsyncStorage.getItem('@dummy_material');
        dispatch({ type: Action.GET_MATERIAL, dataMaterial: JSON.parse(item) })
    }
}