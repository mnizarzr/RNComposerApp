import React, { Component } from 'react'
import { Text, View , Image, StyleSheet,Dimensions} from 'react-native'
import { Color, LayoutConst } from '../../system/Collection';

const { width, height } = Dimensions.get('window')

export default class Card extends Component {
    render() {
        return (
            <View style={styles().card}>
                <View>
                    <Image
                        style={styles().picture}
                        source={{uri : this.props.item.productPicture }} />

                    <View style={{ paddingLeft: 10, justifyContent:'center', marginTop: 5}}>

                        <Text style={{ fontSize: 16 , color: '#fff', fontFamily:'Rubik-Bold' }} numberOfLines={1} ellipsizeMode={'tail'} children={this.props.item.name} />

                        <Text style={{ fontFamily: 'Rubik-Medium', color: Color.COLOR_PRIMARY, fontSize: 12 }} children={this.props.item.category} />

                    </View>
                </View>
            </View>
        )
    }
}

const styles = (props) => StyleSheet.create({
    card: {
        width: width / 2.32,
        height: width / 1.8,
        // backgroundColor: 'grey',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        margin: 2.5,
        backgroundColor: '#444'
    },
    picture: {
        width: '100%',
        height: '78%',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        // backgroundColor: 'green'
    }
})
