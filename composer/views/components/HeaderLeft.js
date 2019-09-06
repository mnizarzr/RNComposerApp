import React, {Component} from 'react'
import {View, TouchableOpacity, Image, } from 'react-native'
import {DrawerActions } from 'react-navigation'

export default class NavigationDrawerStructure extends Component {

    constructor(props) {
        super(props)

        this.toggleDrawer = this.toggleDrawer.bind(this)
    }

    
    toggleDrawer = () => {

        this.props.navigationProps.dispatch(
            DrawerActions.openDrawer()
        )

    };
    
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => this.toggleDrawer()}>
                    <Image
                        source={require('../../assets/images/drawer.png')}
                        style={{ width: 25, height: 25, marginLeft: 20 }} />
                </TouchableOpacity>
            </View>
        );
    }
  }
  