import React from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { Color, LayoutConst } from "../../system/Collection";
import InputText from "../components/InputText";
import Button from "../components/Button";
import NewDropdown from '../components/NewDropdown';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/MaterialActions'

class AddNewMaterial extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            materialName: '',
            stock: 0,
            unit: '',
        }

    }

    _setText = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    _goBack = () => {
        this.props.addMaterial(this.state);
        this.props.navigation.goBack();
    }

    render() {

        let isFilled = (this.state.materialName !== '' && this.state.stock !== 0 && this.state.unit !== '');

        return (
            <View style={styles.container}>
                <InputText
                    style={{ marginBottom: LayoutConst.spacing }}
                    background={Color.LIGHT_GREY}
                    placeholder="Material name"
                    onChangeText={(text) => this._setText('materialName', text)}
                />
                <View style={{ flexDirection: 'row' }}>
                    <InputText
                        keyboardType={"number-pad"}
                        style={{ flex: 1, maxHeight: 50, marginBottom: 20, marginRight: LayoutConst.spacing * 0.5 }}
                        background={Color.LIGHT_GREY}
                        placeholder="Stock"
                        onChangeText={(text) => this._setText('stock', text)}
                    />
                    <NewDropdown
                        style={{ flex: 1, marginBottom: 20, marginLeft: LayoutConst.spacing * 0.5 }}
                        title="Unit"
                        selectedValue={this.state.unit !== '' ? this.state.unit : undefined}
                        onValueChange={(value, index) => this.setState({ unit: value })}
                        options={['gram', 'mililiter', 'liter']}
                    />
                </View>

                <View style={{ flex: 1 }} />

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }} />
                    <Button
                        disabled={!isFilled}
                        onPress={() => this._goBack()}
                        backgroundColor={!isFilled ? Color.GREY : undefined}
                        value="Save"
                    />
                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: LayoutConst.spacing,
        backgroundColor: Color.WHITE
    }
})


function mapStateToProps(state, props) {
    // console.log("Redux This State::", state);
    // console.log("Redux This Props::", props);
    return {}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewMaterial)
