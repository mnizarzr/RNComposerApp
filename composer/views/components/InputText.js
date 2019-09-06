import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native'
import { LayoutConst } from '../../system/Collection';


export default class InputText extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <TextInput
                style={[this.props.style, styles(this.props).container ]}
                placeholder={this.props.placeholder}>
                
                {this.props.value}
                
            </TextInput>
        )
    }
}

const styles = (props) => StyleSheet.create({
    container: {
        backgroundColor: props.background,
        padding: LayoutConst.smallSpacing,
        borderRadius: LayoutConst.roundedCorner,
        fontFamily: 'OpenSans-Regular'
    }
})