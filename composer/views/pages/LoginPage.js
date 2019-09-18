import React, { Component } from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import InputText from '../components/InputText';
import { Header } from 'react-navigation'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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

    state = {
        hide: true,
        press: require("../../assets/images/merem.png")
    }

    handlePassword = () => {
        if (this.state.hide != true) {
            this.setState({ hide: true, press: require("../../assets/images/merem.png") })
        } else {
            this.setState({ hide: false, press: require("../../assets/images/melek.png") })
        }
    }

    focusNextField(id) {
        this.inputs[id].focus();
    }

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding">
                <ScrollView>

                    <StatusBar
                        backgroundColor={Color.LIGHT_GREY}
                        barStyle="dark-content"
                    />

                    <View style={{ padding: LayoutConst.spacing }}>
                        <Text
                            style={styles.composerText}
                            children="Composer" />

                        <Text
                            style={styles.loginDescText}
                            children="Login using Remap account" />


                        <InputText
                            placeholder={"Username"}
                            autoCompleteType={"email"}
                            keyboardType={"email-address"}
                            textContentType={"emailAddress"}
                            returnKeyType="next"
                            background={Color.WHITE}
                            style={{ marginBottom: LayoutConst.spacing }}
                            onChangeText={(text) => this.props.changeState('username', text)}
                            onSubmitEditing={() => {
                                this.focusNextField('password');
                            }} />

                        <View style={{ flexDirection: 'row' }} >
                            <InputText
                                hasRef={(ref) => {
                                    this.inputs['password'] = ref;
                                }}
                                placeholder={"Password"}
                                autoCompleteType={"password"}
                                keyboardType={!this.state.hide ? 'visible-password' : undefined}
                                textContentType={"password"}
                                background={Color.WHITE}
                                style={{ flex: 1, paddingRight: 35 }}
                                secureTextEntry={this.state.hide}
                                onChangeText={(text) => this.props.changeState('password', text)}
                                onSubmitEditing={() => this.props.loginPost(this)} />

                            <TouchableOpacity style={{
                                position: 'absolute',
                                alignSelf: 'center',
                                right: 0,
                                paddingRight: 10
                            }}
                                onPress={this.handlePassword}>
                                <Image style={{ height: 20, width: 16 }} resizeMode="contain" source={this.state.press} />
                            </TouchableOpacity>
                        </View>


                        <View style={styles.button}>
                            <Button
                                onPress={() => this.props.loginPost(this)}
                                value="Sign in" />
                        </View>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginTop: LayoutConst.spacing,
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
