import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, BackHandler, Dimensions} from 'react-native'
import SideMenu from 'react-native-side-menu'
import SideMenuLayout from '../components/SideMenuLayout'

import * as Actions from '../../actions/MainActions';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import CompositionPage from './CompositionPage';
import Header from '../components/Header';
import MaterialPage from './MaterialPage';
import HistoryPage from './HistoryPage';

class HomePage extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return(
            <SideMenu
                menu={<SideMenuLayout changeMenu={this.props.changeMenu}/>}
                isOpen={this.props.sideMenuOpened}
                openMenuOffset={Dimensions.get('window').width * 3 / 4}>

                <View style={styles.container}>

                    <Header headerText={this.props.activeMenu.name}/>

                    {
                        this.props.activeMenu.id == "0" ?
                            <CompositionPage/>
                        : this.props.activeMenu.id == "1" ?
                            <MaterialPage/>
                        : 
                            <HistoryPage/>
                    }

                    
                    
                </View>
                    
            </SideMenu>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
