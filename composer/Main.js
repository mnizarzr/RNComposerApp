import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { MainNavigator, HomeStack } from './system/Navigation';
import { checkSigned } from './actions/AuthActions';
import { connect } from 'react-redux';
import { from } from 'rxjs';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            signedIn: this.props.signedIn,
        };
    }

    render() {

        const MainNavigation = MainNavigator(this.state.signedIn);
        return <MainNavigation/>;

    }
}


function mapStateToProps(state, props) {
    return {
        signedIn: state.auth.signedIn,
    };
}

export default connect(mapStateToProps)(Main);

