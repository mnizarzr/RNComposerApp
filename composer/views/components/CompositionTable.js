import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Animated } from "react-native";
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { connect } from "react-redux";
import { Color, LayoutConst } from "../../system/Collection";
import InputText from './InputText';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/MaterialActions'
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

class CompositionTable extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: false,
            materialValue: 0,
        }
    }

    _setText(state, text) {
        this.setState({
            [state]: text
        })
    }

    _onSelect = async () => {
        await this.setState(prevState => ({ selected: !prevState.selected }));
        if (this.state.selected) this.props.addSelectedMaterial(this.props.data);
        else this.props.deleteSelectedMaterial(this.props.data)
    }

    renderInMaterials() {

        const { materialName, stock, unit } = this.props.data

        return <View style={styles.container}>
            <Text
                style={{
                    color: Color.BLACK,
                    fontSize: 16,
                    fontFamily: "Rubik-Bold",
                    flex: 2.5
                }}
                numberOfLines={1}
                children={materialName}
            />
            <View style={{ flexDirection: "row", flex: 1.5, justifyContent: "space-evenly" }}>
                <Text
                    style={{
                        color: Color.BLACK,
                        fontSize: 14,
                        flex: 1,
                        fontFamily: "Rubik-Regular",
                        marginEnd: 6,
                        textAlign: 'right'
                    }}
                    numberOfLines={1}
                    children={stock}
                />
                <Text
                    style={{
                        color: Color.BLACK,
                        fontSize: 14,
                        flex: 1,
                        fontFamily: "Rubik-Regular",
                        textAlign: 'right'
                    }}
                    numberOfLines={1}
                    children={unit}
                />
            </View>
        </View>
    }

    renderLeftActions = (progress, dragX) => {
        const { materialName, stock, unit } = this.props.data

        const trans = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 0],
        });
        return (
            <RectButton style={{ flex: 1 }} onPress={this.close}>
                <Animated.View
                    style={[
                        {
                            transform: [{ translateX: trans }],
                            flex: 1
                        },
                    ]}>
                    <View style={[styles.container, {
                        height: 50,
                        backgroundColor: Color.WHITE,
                        borderWidth: 0.5,
                        borderColor: Color.GREY,
                        borderRadius: 14,
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        paddingRight: 0,
                    }]}>
                        <View style={{ flex: 0.3, justifyContent: 'center' }}>
                            <Image source={require('../../assets/images/check-green.png')} style={{ width: 20, height: 20 }} />
                        </View>
                        <View style={{ flex: 2.2, marginLeft: 15 }}>
                            <Text style={{
                                fontFamily: 'Rubik-Bold',
                                fontSize: 16,
                                color: Color.BLACK,
                            }}
                                numberOfLines={1}
                                children={materialName}
                            />
                        </View>

                        <View style={{ flexDirection: "row", flex: 1.5, justifyContent: "space-evenly", marginRight: 10 }}>
                            <Text
                                style={{
                                    color: Color.BLACK,
                                    fontSize: 14,
                                    flex: 1,
                                    fontFamily: "Rubik-Regular",
                                    marginEnd: 6,
                                    textAlign: 'right'
                                }}
                                numberOfLines={1}
                                children={stock}
                            />
                            <Text
                                style={{
                                    color: Color.BLACK,
                                    fontSize: 14,
                                    flex: 1,
                                    fontFamily: "Rubik-Regular",
                                    textAlign: 'right'
                                }}
                                numberOfLines={1}
                                children={unit}
                            />
                        </View>

                        <View style={{
                            height: 50,
                            width: 35,
                            backgroundColor: Color.COLOR_PRIMARY,
                            borderRadius: 14,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                            children={<Image source={require('../../assets/images/chevron-right.png')} style={{ width: 10, height: 10 }} />}
                        />
                        
                    </View>
                </Animated.View>
            </RectButton>
        );
    };

    swipeableList() {
        const { materialName, stock, unit } = this.props.data

        return (

            <Swipeable renderLeftActions={this.renderLeftActions}>
                <View style={[styles.container, {
                    height: 50,
                    backgroundColor: Color.LIGHT_GREY,
                    borderRadius: 14,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 0,
                }]}>
                    <View style={{
                        height: 50,
                        width: 35,
                        backgroundColor: Color.COLOR_PRIMARY,
                        borderRadius: 14,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                        children={<Image source={require('../../assets/images/chevron-right.png')} style={{ width: 10, height: 10 }} />}
                    />
                    <View style={{ flex: 2.5, marginLeft: 15 }}>
                        <Text style={{
                            fontFamily: 'Rubik-Bold',
                            fontSize: 16,
                            color: Color.BLACK,
                        }}
                            numberOfLines={1}
                            children={materialName}
                        />
                    </View>

                    <View style={{ flexDirection: "row", flex: 1.5, justifyContent: "space-evenly" }}>
                        <Text
                            style={{
                                color: Color.BLACK,
                                fontSize: 14,
                                flex: 1,
                                fontFamily: "Rubik-Regular",
                                marginEnd: 6,
                                textAlign: 'right'
                            }}
                            numberOfLines={1}
                            children={stock}
                        />
                        <Text
                            style={{
                                color: Color.BLACK,
                                fontSize: 14,
                                flex: 1,
                                fontFamily: "Rubik-Regular",
                                textAlign: 'right'
                            }}
                            numberOfLines={1}
                            children={unit}
                        />
                    </View>

                </View>
            </Swipeable>
        )
    }

    selectMaterialView() {
        const { materialName, stock, unit } = this.props.data

        return (
            <TouchableOpacity
                onPress={() => this._onSelect()}>
                <View style={[styles.container, { paddingHorizontal: 25, alignItems: 'center' }]}>
                    <View style={{ flex: 0.5 }}>
                        <View style={{
                            width: 22,
                            height: 22,
                            backgroundColor: this.state.selected == true ? Color.COLOR_PRIMARY : Color.GREY,
                            borderRadius: 11,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} >
                            {
                                this.state.selected == true
                                    ?
                                    <Image style={{ width: 12, height: 12 }} source={require('../../assets/images/check.png')} />
                                    :
                                    <View />
                            }
                        </View>
                    </View>

                    <View style={{ flex: 2.5 }}>
                        <Text style={{
                            fontFamily: 'Rubik-Bold',
                            fontSize: 16,
                            color: this.state.selected == true ? Color.BLACK : Color.GREY
                        }}
                            numberOfLines={1}
                            children={materialName}
                        />
                    </View>

                    <View style={{ flex: 1.5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                        <TextInput
                            value={this.state.materialValue.toString()}
                            // children={<Text children={this.state.defaultMaterialValue} numberOfLines={1} style={{width: 32}} ellipsizeMode={'tail'} />}
                            onChangeText={(text) => this._setText('materialValue', text)}
                            style={{
                                textAlign: "right",
                                padding: 0,
                                color: this.state.selected == true ? Color.BLACK : Color.GREY,
                                fontFamily: 'Rubik-Regular',
                                fontSize: 16,
                                width: 48,
                                // borderColor: Color.GREY,
                                // borderBottomWidth: 1
                            }}
                            numberOfLines={1}
                            keyboardType={"number-pad"}
                        />


                        <Text style={{
                            fontFamily: 'Rubik-Regular',
                            fontSize: 16,
                            color: this.state.selected == true ? Color.BLACK : Color.GREY
                        }}
                            children={unit}
                        />
                    </View>

                </View>
            </TouchableOpacity>
        )
    }

    renderAddMaterialPage() {
        const { materialName, stock, unit } = this.props.data

        return (
            <View style={[styles.container, { paddingHorizontal: 25, alignItems: 'center' }]}>
                <View style={{ flex: 0.5 }}>
                    <TouchableOpacity onLongPress={this.props.move} onPressOut={this.props.moveEnd} >
                        <Image style={{ width: 22, height: 22 }} source={require('../../assets/images/paragraph.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 2.5 }}>
                    <Text style={{
                        fontFamily: 'Rubik-Bold',
                        fontSize: 16,
                        color: Color.BLACK
                    }}
                        numberOfLines={1}
                        children={materialName}
                    />
                </View>

                <View style={{ flex: 1.5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                    <Text
                        style={{
                            textAlign: "right",
                            padding: 0,
                            color: Color.BLACK,
                            fontFamily: 'Rubik-Regular',
                            fontSize: 16,
                            width: 48,
                            // borderColor: Color.GREY,
                            // borderBottomWidth: 1
                        }}
                        children={stock}
                    />


                    <Text style={{
                        fontFamily: 'Rubik-Regular',
                        fontSize: 16,
                        color: Color.BLACK
                    }}
                        children={unit}
                    />
                </View>

            </View>
        )
    }

    defaultRender() {
        return (
            <View>
                <Text>Yes</Text>
            </View>
        )
    }

    chooseView() {
        switch (this.props.navigation.state.routeName) {
            case 'Material':
                return this.swipeableList();
                break;

            case 'SelectMaterial':
                return this.selectMaterialView();
                break;

            case 'AddMaterialPage':
                return this.renderAddMaterialPage();
                break;

            case 'Detail':
                return this.renderInMaterials();
                break;

            default:
                return this.defaultRender();
                break;
        }
    }

    render() {
        return (
            <View>
                {this.chooseView()}
            </View>
        )

    }

}

CompositionTable.propTypes = {
    data: PropTypes.object
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: LayoutConst.regularSpacing * 0.5,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: LayoutConst.spacing
    }
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch)
}

export default connect(null, mapDispatchToProps)(withNavigation(CompositionTable))