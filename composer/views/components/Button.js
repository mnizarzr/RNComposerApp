import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Color, LayoutConst } from '../../system/Collection';


export default class Button extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <TouchableOpacity
                style={[this.props.style, styles(this.props).container]}
                onPress={this.props.onPress}>

                <Text style={styles(this.props).buttonText}>{this.props.value}</Text>
                
            </TouchableOpacity>
        )
    }
}

const styles = (props) => StyleSheet.create({
    container: {
        backgroundColor: Color.COLOR_PRIMARY,
        padding: LayoutConst.regularSpacing,
        borderRadius: LayoutConst.roundedCorner,
        
    },

    buttonText: {
        fontFamily: 'Rubik-Medium',
        fontSize: LayoutConst.regularTextSize,
        color: Color.BLACK
    }

})