import React from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { Color, LayoutConst } from "../../system/Collection";
import InputText from "../components/InputText";
import Button from "../components/Button";
import NewDropdown from '../components/NewDropdown';

class AddNewMaterial extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedValue: ''
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <InputText
                    style={{ marginBottom: LayoutConst.spacing }}
                    background={Color.LIGHT_GREY}
                    placeholder="Material name"
                />
                <View style={{ flexDirection: 'row' }}>
                    <InputText
                        keyboardType={"number-pad"}
                        style={{ flex: 1, maxHeight: 50, marginBottom: 20, marginRight: LayoutConst.spacing * 0.5 }}
                        background={Color.LIGHT_GREY}
                        placeholder="Stock"
                    />
                    <NewDropdown
                        style={{ flex: 1, marginBottom: 20, marginLeft: LayoutConst.spacing * 0.5 }}
                        title="Unit"
                        selectedValue={this.state.selectedValue !== '' ? this.state.selectedValue : undefined}
                        onValueChange={(value, index) => this.setState({ selectedValue: value })}
                        options={['gram', 'mililiter', 'liter']}
                    />
                </View>

                <View style={{ flex: 1 }}/>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}/>
                    <Button
                        onPress={() => this.props.navigation.goBack()}
                        style={{}}
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

export default connect()(AddNewMaterial)
