import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import { Color, LayoutConst } from '../../system/Collection';

class CompositionPage extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Composition Home</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: LayoutConst.spacing,
        backgroundColor: Color.WHITE
    }
})


function mapStateToProps(state, props) {
    return {}
}

export default connect(mapStateToProps)(CompositionPage)
