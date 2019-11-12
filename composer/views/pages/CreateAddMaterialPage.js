import React from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import { Color, LayoutConst, Action } from "../../system/Collection";
import Button from "../components/Button";
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/MaterialActions';
import CompositionTable from "../components/CompositionTable";

class CreateAddMaterialPage extends React.Component {

    constructor(props) {
        super(props);

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

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {
                    this.props.selectedMaterial.length > 0
                        ?
                        <FlatList
                            data={this.props.selectedMaterial}
                            extraData={this.props.selectedMaterial}
                            renderItem={({ item, index }) => <CompositionTable data={item} />}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        :
                        <View style={{ flex: 1 }}>
                            <Text
                                style={{
                                    color: Color.GREY,
                                    fontFamily: "OpenSans-Regular",
                                    fontSize: 13,
                                    marginHorizontal: LayoutConst.spacing
                                }}
                                children="Materials in this composition"
                            />
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