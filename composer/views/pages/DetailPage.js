import React from 'react'
import { View, StyleSheet, Text, Dimensions, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Color, LayoutConst } from '../../system/Collection'
import { StackActions } from "react-navigation";

const { width, height } = Dimensions.get('window')

class DetailPage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <View style={styles().container}>
            <View style={{ width: width, height: height / 3 }}>
                <ImageBackground
                    style={{ flex: 1, justifyContent: 'flex-end' }}
                    source={{ uri: "https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_960_720.jpg" }}
                >
                    <View style={{
                        width: width,
                        height: 100,
                        padding: LayoutConst.regularSpacing,
                        backgroundColor: "rgba(0,0,0,0.4)",
                        alignSelf: 'flex-end',
                        justifyContent: 'space-between'
                    }}>
                        <Text
                            style={{ color: Color.WHITE, fontSize: 20, fontFamily: "Rubik-Bold" }}
                            children="Title"
                        />
                        <Text
                            style={{ color: Color.COLOR_PRIMARY, fontSize: 14, fontFamily: "Rubik-Regular" }}
                            children="Category"
                        />
                        <Text
                            style={{ color: Color.WHITE, fontSize: 14, fontFamily: "Rubik-Regular" }}
                            children="Description"
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={{
                            position: 'absolute',
                            top: 14,
                            right: 14,
                        }}>
                        <Image
                            style={{
                                width: 20,
                                height: 20,
                                resizeMode: 'contain'
                            }}
                            source={require("../../assets/images/close.png")}
                        />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </View>
    }

}

const styles = props => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.LIGHT_GREY
    }
})

export default connect()(DetailPage)