import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { Color, LayoutConst } from "../../system/Collection";
import Button from "../components/Button";

class CreateAddMaterialPage extends React.Component {

    constructor(props) {
        super(props);

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
        )
    }


}

export default connect()(CreateAddMaterialPage)