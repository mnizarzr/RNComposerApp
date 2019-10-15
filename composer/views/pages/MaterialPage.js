import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { LayoutConst, Color } from '../../system/Collection';
import Button from "../components/Button";

class MaterialPage extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={{
                        color: Color.BLACK,
                        fontFamily: 'Rubik-Medium',
                        fontSize: 24,
                        lineHeight: 36,
                        marginBottom: LayoutConst.spacing
                    }}
                    children="Before you create a new composition, you must add material first"
                />
                <Button
                    onPress={() => this.props.navigation.navigate("AddNewMaterial")}
                    style={{ width: 200 }}
                    value="Create new material"
                />
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
    return {}
}

export default connect(mapStateToProps)(MaterialPage)