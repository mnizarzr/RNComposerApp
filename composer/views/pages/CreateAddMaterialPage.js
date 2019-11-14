import React from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import { Color, LayoutConst, Action } from "../../system/Collection";
import Button from "../components/Button";
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/MaterialActions';
import CompositionTable from "../components/CompositionTable";
import DraggableFlatList from 'react-native-draggable-flatlist';

class CreateAddMaterialPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.selectedMaterial
        }
        this.subscribe = null;
    }

    // componentDidMount() {
    //     this.subscribe = this.props.navigation.addListener('didFocus', payload => {
    //         this.props.getSelectedMaterial();
    //     });
    // }

    // componentWillUnmount() {
    //     this.subscribe.remove();
    // }

    rearrangeSelectedMaterial(data, oldIndex, newIndex) {
        const movingItem = data[oldIndex];
        data.splice(oldIndex, 1);
        data.splice(newIndex, 0, movingItem);
        console.log('data :' ,data);
        console.log('oldIndex :' ,oldIndex);
        console.log('newIndex :' ,newIndex);
        console.log('moving :' ,movingItem);
        
        return this.setState({ data: data });
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text
                    style={{
                        color: Color.GREY,
                        fontFamily: "OpenSans-Regular",
                        fontSize: 13,
                        marginHorizontal: LayoutConst.spacing
                    }}
                    children="Materials in this composition"
                />
                {
                    this.props.selectedMaterial.length > 0
                        ?
                        <DraggableFlatList
                            data={this.state.data}
                            extraData={this.state.data}
                            scrollPercent={5}
                            renderItem={({ item, index, move, moveEnd }) => <CompositionTable data={item} move={move} moveEnd={moveEnd} />}
                            keyExtractor={(item, index) => index.toString()}
                            style={{ marginVertical: 25 }}
                            onMoveEnd={({ data, to, from }) => this.rearrangeSelectedMaterial(data, from, to)}
                        />
                        :
                        <View style={{ flex: 1 }}>

                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text
                                    style={{
                                        color: Color.GREY,
                                        fontFamily: "OpenSans-Regular",
                                        fontSize: 16,
                                        marginBottom: LayoutConst.regularSpacing
                                    }}
                                    children="No Material"
                                />
                                <Button
                                    onPress={() => this.props.navigation.navigate("SelectMaterial")}
                                    value="Add from material list"
                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: LayoutConst.spacing }}>
                                <Button
                                    onPress={() => this.props.navigation.goBack()}
                                    backgroundColor={Color.LIGHT_GREY}
                                    style={{ width: 90 }}
                                    value="Back"
                                />
                                <Button
                                    backgroundColor={Color.DARK_GREY}
                                    style={{ width: 90 }}
                                    value="Create"
                                />
                            </View>
                        </View>
                }
                {
                    this.props.selectedMaterial.length > 0
                        ?
                        <View style={{ alignContent: 'flex-start' }}>
                            <Button
                                backgroundColor={Color.LIGHT_GREY}
                                value={'Add or remove material'}
                                onPress={() => this.props.navigation.navigate("SelectMaterial")} />
                        </View>
                        :
                        <View />
                }

            </View>
        )
    }


}

function mapStateToProps(state, props) {
    return state.material
}

// function mapDispatchToProps(dispatch) {
//     return { getSelectedMaterial: () => dispatch({ type: Action.GET_SELECTED_MATERIAL }) };
// }

export default connect(mapStateToProps)(CreateAddMaterialPage)