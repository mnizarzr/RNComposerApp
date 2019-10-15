import React, { Component } from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native'
import { Color, LayoutConst } from '../../system/Collection';
import PropTypes from 'prop-types';

type Props = {
    hasRef? : () => void
};

export default class InputText extends React.Component<TextInputProps, Props> {

    constructor(props) {
        super(props)

        this.state = {
            isFocused: false
        }
    }

    componentDidMount() {
        if (this.props.hasRef != null) this.props.hasRef(this);
    }

    onSubmitEditing() {
        this.props.onSubmitEditing();
    }

    focus = () => this.inputRef.focus();

    _handleInputFocus = () => this.setState({ isFocused: true });
    _handleInputBlur = () => this.setState({ isFocused: false });

    render() {
        return <TextInput
            {...this.props}
            ref={ref => (this.inputRef = ref)}
            style={[styles(this.props).container, this.props.style, this.state.isFocused ? {
                borderColor: Color.COLOR_PRIMARY,
                borderWidth: 1
            } : undefined]}
            placeholder={this.props.placeholder}
            onSubmitEditing={this.onSubmitEditing.bind(this)}
            onFocus={this._handleInputFocus}
            onBlur={this._handleInputBlur}
        />
    }
}

InputText.propTypes = {
    background: PropTypes.string,
    borderRadius: PropTypes.number
}

const styles = (props) => StyleSheet.create({
    container: {
        backgroundColor: props.background,
        padding: LayoutConst.smallSpacing,
        borderRadius: props.borderRadius || LayoutConst.roundedCorner,
        fontFamily: 'OpenSans-Regular'
    }
})
