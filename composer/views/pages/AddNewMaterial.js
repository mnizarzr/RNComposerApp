import React from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { Color, LayoutConst } from "../../system/Collection";
import InputText from "../components/InputText";
import Button from "../components/Button";

class AddNewMaterial extends React.Component {

    constructor(props) {
        super(props);

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
                        style={{ flex: 1, marginRight: 10 }}
                        background={Color.LIGHT_GREY}
                        placeholder="Stock"
                    />
                    <InputText
                        style={{ flex: 1, marginLeft: 10 }}
                        background={Color.LIGHT_GREY}
                        placeholder="Select Unit"
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