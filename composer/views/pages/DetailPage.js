import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import { Color, LayoutConst } from '../../system/Collection'

class DetailPage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <View style={styles().container} >
            <Text children="Hello Detail" />
        </View>
    }

}

const styles = props => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.LIGHT_GREY,
        paddingHorizontal: LayoutConst.spacing
    }
})

export default connect()(DetailPage)