import React, { Component } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { LayoutConst, Color, Menu } from '../../system/Collection';


export default class SideMenuLayout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menu: ["Composition", "Material", "History"]
        }
    }

    render() {

        const { navigation, activeItemKey } = this.props

        return (
            <View style={styles.container}>

                <View style={{ flex: 1 }}/>
                {
                    this.state.menu.map((name, index) =>
                        <TouchableOpacity
                            key={index}
                            onPress={() => navigation.navigate(name)}>
                            <Text
                                style={[styles.menuText, { color: activeItemKey === name ? Color.COLOR_PRIMARY : Color.WHITE }]}
                                children={name}
                            />
                        </TouchableOpacity>
                    )
                }

                <View style={{ flex: 1 }}/>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Auth")}>
                    <Text style={[styles.menuText, { color: 'white' }]}>Logout</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: LayoutConst.spacing,
        backgroundColor: Color.BLACK,
        flex: 1,
        flexDirection: 'column'
    },
    menuText: {
        fontSize: LayoutConst.mediumTextSize,
        fontFamily: 'Rubik-Medium',
        marginBottom: LayoutConst.spacing * 2
    },
})

