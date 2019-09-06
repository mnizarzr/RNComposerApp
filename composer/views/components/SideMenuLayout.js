import React, {Component} from 'react';
import {Text, View, FlatList, Image, TouchableOpacity, StyleSheet} from 'react-native'
import { LayoutConst, Color, Menu } from '../../system/Collection';


export default class SideMenuLayout extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={styles.container}>

                <FlatList
                    data={Menu}
                    style={styles.menuListContainer}
                    keyExtractor={(item) => item.id}
                    renderItem={({item, index}) => 
                        <TouchableOpacity
                            onPress={() => this.props.changeMenu(index) }>
                            <Text style={styles.menuText}>{item.name}</Text>
                        </TouchableOpacity>
                    } />
                
                <TouchableOpacity>
                    <Text style={styles.menuText}>Logout</Text>
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
        justifyContent: 'space-between',
        flexDirection: 'column'
    },

    menuText: {
        fontSize: LayoutConst.mediumTextSize,
        fontFamily: 'Rubik-Medium',
        color: Color.WHITE,
        marginBottom: 2 * LayoutConst.spacing
    },

    menuListContainer: {
        marginTop: 100,
    }

})

