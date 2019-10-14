import React from 'react'
import { View } from "react-native";
import { connect } from "react-redux";

class SelectMaterial extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>

            </View>
        )
    }

}

export default connect()(SelectMaterial)