import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Color, LayoutConst } from '../../system/Collection';
import PropTypes from 'prop-types';

export default class Button extends Component<TouchableOpacityProps> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                {...this.props}
                style={[this.props.style, styles(this.props).container]}
                onPress={this.props.onPress}>

                <Text style={styles(this.props).buttonText}>{this.props.value}</Text>

            </TouchableOpacity>
        );
    }
}

Button.propTypes = {
    borderRadius: PropTypes.number,
    backgroundColor: PropTypes.string
}

const styles = (props) => StyleSheet.create({
    container: {
        backgroundColor: props.backgroundColor !== undefined ? props.backgroundColor : Color.COLOR_PRIMARY,
        padding: LayoutConst.regularSpacing,
        borderRadius: props.borderRadius !== undefined ? props.borderRadius : LayoutConst.roundedCorner,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Rubik-Medium',
        fontSize: LayoutConst.regularTextSize,
        color: Color.BLACK,
    },
});
