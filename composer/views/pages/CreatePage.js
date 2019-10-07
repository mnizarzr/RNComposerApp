import React from 'react'
import { View, StyleSheet, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Color, LayoutConst } from '../../system/Collection'
import InputText from "../components/InputText";
import Dropdown from '../components/Dropdown';
import ImagePicker from 'react-native-image-picker'
import ImageCrop from 'react-native-image-crop-picker'

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

    _imagePicker = () => {
        ImagePicker.showImagePicker(image => {
            console.log("Image: ", image)
            if (image.didCancel) console.log('User cancelled image picker');
            else if (image.error) console.log('ImagePicker Error: ', image.error);
            ImageCrop.openCropper({
                path: image.uri,
                width: 480,
                height: 480,
                cropping: true
            }).then(img => this.setState({ image: img.path }))
        })
    }

    render() {
        return (
            <View style={styles().container}>

                <View style={{ alignItems: 'center', marginVertical: 20, width: "100%" }}>

                    <TouchableOpacity onPress={() => this._imagePicker()}>
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
                                    </View> :
                                    <Image style={{ flex: 1, borderRadius: 14 }} source={{ uri: this.state.image }}/>
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