import React, { Component } from 'react'
import { Text, View , StyleSheet, TouchableOpacity, Image, LayoutAnimation, FlatList} from 'react-native'
import { Color, LayoutConst } from '../../system/Collection';

export var value = 'All Compositions'
export var index = 0

export default class Dropdown extends Component {
    constructor(props){
        super(props)
        this.state = {
            expand : false,
            // value : value == null ? this.props.value : 'Value index 0'  
            data: []
        }
    }

    componentDidMount(){
        this.props.datadropdown.splice(0,0,{category: 'All Compositions'})
        // value = this.props.datadropdown[0].category
    }
    
    _setValue(newVal,newIndex) {
        value = newVal,
        index = newIndex
    }

    render() {
        return (
            <View>
                 <TouchableOpacity
                    style={[this.props.style, styles(this.state.expand).container,{alignItems:'stretch'}]}
                    onPress={() =>  this.setState({
                        expand : !this.state.expand
                    })}>

                    <Text style={[styles().buttonText,{fontFamily:'OpenSans-SemiBold'}]}>{value}</Text>

                    <TouchableOpacity 
                        onPress={() =>  this.setState({
                            expand : !this.state.expand
                        })}>
                        {
                            this.state.expand === false ? 
                                <Image
                                    style={[styles().rightIcon]}
                                    source={require("../../assets/images/dropdown.png")}
                                    resizeMode="center" />
                                :
                                <Image
                                    style={styles().rightIcon}
                                    source={require("../../assets/images/collapse.png")}
                                    resizeMode="center" />
                        }
                    </TouchableOpacity>

                </TouchableOpacity>
                {
                    this.state.expand == true ? 
                        <View style={[styles(this.state.expand).expandContainer,{}]}>
                            <FlatList
                                data={this.props.datadropdown}
                                renderItem={({ item, index }) =>
                                    <TouchableOpacity onPress={()=> [this.setState({
                                        expand: !this.state.expand
                                    }),this._setValue(item.category,index.toString())]}>

                                        <Text style={styles().buttonText}>{item.category}</Text>

                                    </TouchableOpacity>
                                }
                                keyExtractor={(item, index) => index.toString()}
                            />
                            {
                                this.props.add == true ?
                                    <View style={{marginTop: LayoutConst.spacing}}>
                                        <TouchableOpacity style={{flexDirection: "row"}} onPress={this.props.onPressAdd}>
                                            <Image
                                                style={styles().leftIcon}
                                                source={require("../../assets/images/plus-gold.png")}
                                                resizeMode="center" />

                                            <Text style={[styles().buttonText,{color: Color.COLOR_PRIMARY}]}>Add New Category</Text>
                                        </TouchableOpacity>
                                    </View>
                                    :
                                    <View/>
                            }
                        </View>
                        :
                        <View/>
                }
            </View>
        )
    }
}
const styles = (props) => StyleSheet.create({
    container: {
        backgroundColor: Color.LIGHT_GREY,
        padding: LayoutConst.smallSpacing,
        paddingBottom: props === false ? LayoutConst.smallSpacing : 0, 
        borderRadius: props === false ? 50 : 20,
        borderBottomStartRadius: props === false ? 50 : 0,
        borderBottomEndRadius: props === false ? 50 : 0,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    expandContainer: {
        backgroundColor: Color.LIGHT_GREY,
        padding: LayoutConst.smallSpacing,
        paddingTop: 0,
        borderRadius: 20,
        borderTopStartRadius: 0,
        borderTopEndRadius: 0
    },
    rightIcon: {
        right: 0,
        top: 2,
        marginLeft: 20,
        width: 14,
        height: 14,
    },
    leftIcon: {
        left: 0,
        top: 2,
        marginRight: 5,
        width: 14,
        height: 14,
    },
    buttonText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: LayoutConst.smallTextSize,
        color: Color.DARK_GREY
    },
})
