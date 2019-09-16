import React, { Component } from 'react';
import { KeyboardAvoidingView, View, StyleSheet, Text, StatusBar } from 'react-native'
import InputText from '../components/InputText';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/AuthActions';
import { Color, LayoutConst } from '../../system/Collection';
import Button from '../components/Button';

class LoginPage extends Component {

    constructor(props) {
        super(props)

        this.focusNextField = this.focusNextField.bind(this);
        this.inputs = {};
    }


    focusNextField(id) {
        this.inputs[id].focus();
    }

    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <StatusBar
                        backgroundColor={Color.LIGHT_GREY}
                        barStyle="dark-content"
                    />

                    <Text
                        style={styles.composerText}
                        children="Composer" />

                    <Text
                        style={styles.loginDescText}
                        children="Login using Remap account" />

                    <InputText
                        placeholder={"Username"}
                        background={Color.WHITE}
                        inputType={"text"}
                        style={styles.inputText}
                        returnKeyType="next"
                        onChangeText={(text) => this.props.changeState('username', text)}
                        onSubmitEditing={() => {
                            this.focusNextField('password');
                        }} />

                    <InputText
                        hasRef={(ref) => {
                            this.inputs['password'] = ref;
                        }}
                        placeholder={"Password"}
                        background={Color.WHITE}
                        inputType={"password"}
                        style={styles.inputText}
                        secureTextEntry
                        onChangeText={(text) => this.props.changeState('password', text)} />

                    <View style={styles.button}>
                        <Button
                            onPress={() => this.props.loginPost(this)}
                            value="Sign in" />
                    </View>

                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: LayoutConst.spacing,
        backgroundColor: Color.LIGHT_GREY
    },
    composerText: {
        marginVertical: 100,
        fontSize: LayoutConst.extraLargeTextSize,
        color: Color.BLACK,
        fontFamily: 'Rubik-Medium'
    },
    loginDescText: {
        marginBottom: LayoutConst.spacing,
        fontSize: LayoutConst.smallTextSize,
        fontFamily: 'OpenSans-Regular',
        color: Color.BLACK
    },
    inputText: {
        marginBottom: LayoutConst.spacing
    },
    button: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    }
})

function mapStateToProps(state, props) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
