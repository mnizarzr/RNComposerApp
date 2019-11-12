import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, Dimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/MaterialActions'
import { Color, Action } from '../../system/Collection';
import Button from '../components/Button';
import CompositionTable from '../components/CompositionTable';


class SelectMaterial extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedMaterial: [],
            materialValue: 0,
            selected: false
        }
    }

    async componentDidMount() {
        await this.props.getMaterial();
    }

    // _onSelectMaterial = async (item) => {
    //     this.state.selectedMaterial.push(item);
    //     await this.setState({ selectedMaterial: this.state.selectedMaterial },
    //         () => console.log("SELECT MATERiAL:", this.state.selectedMaterial))
    // }


    // _onChangeMaterialValue(text) {
    //     this.setState({
    //         materialValue: text
    //     })
    // }

    _goBack() {
        this.props.getSelectedMaterial();
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {
                    (this.props.data === null || this.props.data === undefined || this.props.data === [])
                        ?
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Rubik-Regular', fontSize: 16, width: 200, textAlign: 'center', color: Color.DARK_GREY, marginBottom: 20 }}
                                numberOfLines={2}
                                children={'You haven\'t added new material yet '} />

                            <Button value={'Add new material'} onPress={() => this.props.navigation.navigate("AddNewMaterial")} />
                        </View>
                        :
                        <ScrollView>
                            <View style={{ flex: 1 }}>
                                <FlatList
                                    data={this.props.data}
                                    extraData={this.props.data}
                                    renderItem={({ item, index }) => <CompositionTable data={item} index={index} />}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>
                        </ScrollView>
                }
                {
                    (this.props.data === null || this.props.data === undefined || this.props.data === [])
                        ?
                        <View />
                        :
                        <View style={{
                            marginTop: 5,
                            marginBottom: 15,
                            width: Dimensions.get('window').width,
                            paddingHorizontal: 25,
                            justifyContent: "space-between",
                            alignContent: 'center',
                            flexDirection: 'row'
                        }}>
                            <Button value={'Add new material'}
                                onPress={() => this.props.navigation.navigate("AddNewMaterial")}
                                backgroundColor={Color.LIGHT_GREY}
                            />

                            <Button value={'Ok'}
                                onPress={() => this._goBack()}
                                backgroundColor={Color.COLOR_PRIMARY}
                            />
                        </View>
                }
            </View>
        )
    }

}
function mapStateToProps(state, props) {
    let { dataMaterial } = state.material
    return { data: dataMaterial }
}

function mapDispatchToProps(dispatch) {
    return Object.assign(bindActionCreators(Actions, dispatch), { getSelectedMaterial: () => dispatch({ type: Action.GET_SELECTED_MATERIAL }) })
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectMaterial)
