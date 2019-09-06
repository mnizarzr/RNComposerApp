import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StatusBar, StyleSheet} from 'react-native'
import { LayoutConst, Color } from '../../system/Collection';

import * as Actions from '../../actions/MainActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={styles(this.props).container}>

                <StatusBar
                    backgroundColor={Color.WHITE}
                    barStyle="dark-content"
                />

                <TouchableOpacity
                    onPress={() => this.props.toggleMenu(this.props.sideMenuOpened) } >

                    <Image
                        style={styles(this.props).leftIcon}
                        source={require("../../assets/images/drawer.png")}
                        resizeMode="contain" />

                </TouchableOpacity>

                <Text style={styles(this.props).headerText}>{this.props.headerText}</Text>

                <View style={styles(this.props).rightIconContainer}>

                    <TouchableOpacity>
                        <Image
                            style={styles(this.props).rightIcon}
                            source={require("../../assets/images/search.png")}
                            resizeMode="center" />
                    </TouchableOpacity>

                </View>
                
                
            </View>
        )
    }
}

const styles = (props) => StyleSheet.create({
    container: {
        padding: LayoutConst.spacing,
        backgroundColor: Color.WHITE,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    },

    leftIcon: {
        width: LayoutConst.regularIconSize,
        height: LayoutConst.regularIconSize,
        marginRight: LayoutConst.spacing
    },

    headerText: {
        fontSize: LayoutConst.mediumTextSize,
        fontFamily: 'Rubik-Medium',
        color: Color.BLACK
    },

    rightIcon: {
        width: LayoutConst.smallIconSize,
        height: LayoutConst.smallIconSize,
    },

    rightIconContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        display: 'none'
    }
})

function mapStateToProps(state, props) {
    return {
        activeMenu: state.mainReducer.activeMenu,
        sideMenuOpened: state.mainReducer.sideMenuOpened,
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);