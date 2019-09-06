import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native'

import {connect} from 'react-redux'
import { LayoutConst, Color } from '../../system/Collection';

class HistoryPage extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>History Home</Text>
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

export default connect(mapStateToProps)(HistoryPage)