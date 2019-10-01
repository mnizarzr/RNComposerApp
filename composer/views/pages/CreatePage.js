import React from 'react'
import { View, StyleSheet, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Color, LayoutConst } from '../../system/Collection'
import InputText from "../components/InputText";
import Dropdown from '../components/Dropdown';

const { width, height } = Dimensions.get('window')


class CreatePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dataCategory: [
                {
                    category: 'Snack',
                },
                {
                    category: 'Food',
                },
                {
                    category: 'Drink',
                }
            ],
            image: null
        }
    }

    render() {
        return (
            <View style={styles().container}>

                <View style={{ alignItems: 'center', marginVertical: 20, width: "100%" }}>

                    <TouchableOpacity
                    onPress={() => undefined}>
                        <View style={styles().imageContainer}>
                            {
                                this.state.image === null ?
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={require('../../assets/images/plus-dark.png')}/>
                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                fontSize: 20,
                                                fontFamily: 'Rubik-Bold',
                                                color: '#444'
                                            }}
                                            children="Composition Image"
                                        />
                                    </View> : <View/>
                            }
                        </View>
                    </TouchableOpacity>

                </View>

                <InputText
                    placeholder={"Composition Name"}
                    returnKeyType="next"
                    background={Color.LIGHT_GREY}
                    style={{ marginBottom: LayoutConst.spacing }}
                />

                <InputText
                    placeholder={"Description (optional)"}
                    returnKeyType="next"
                    background={Color.LIGHT_GREY}
                    style={{ marginBottom: LayoutConst.spacing }}
                />

                <Dropdown value={'Select Category'} datadropdown={this.state.dataCategory}/>

            </View>
        )
    }

}

const styles = props => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.WHITE,
        paddingHorizontal: LayoutConst.spacing
    },
    imageContainer: {
        width: width / 2.5,
        height: width / 2.5,
        backgroundColor: Color.LIGHT_GREY,
        borderRadius: 14
    }
})

export default connect()(CreatePage)