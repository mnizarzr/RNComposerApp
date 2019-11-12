import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, FlatList, Image } from 'react-native'
import { connect } from 'react-redux'
import { LayoutConst, Color } from '../../system/Collection';
import Button from "../components/Button";
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/MaterialActions'
import CompositionTable from '../components/CompositionTable';

class MaterialPage extends Component {

    constructor(props) {
        super(props)

    }

    async componentDidMount() {
        await this.props.getMaterial();
    }

    render() {
        return (
            <View style={styles.container}>

                {
                    (this.props.data === null || this.props.data === undefined || this.props.data === [])
                        ?
                        <View>
                            <Text
                                style={{
                                    color: Color.BLACK,
                                    fontFamily: 'Rubik-Medium',
                                    fontSize: 24,
                                    lineHeight: 36,
                                    marginBottom: LayoutConst.spacing
                                }}
                                children="Before you create a new composition, you must add material first"
                            />
                            <Button
                                onPress={() => this.props.navigation.navigate("AddNewMaterial")}
                                style={{ width: 200 }}
                                value="Create new material"
                            />
                        </View>
                        :
                        <FlatList
                            data={this.props.data}
                            extraData={this.props.data}
                            renderItem={({ item, index }) => <CompositionTable data={item} navigation={this.props.navigation} index={index} />}
                            keyExtractor={(item, index) => index.toString()}
                        />
                }

                {
                    (this.props.data === null || this.props.data === undefined || this.props.data === [])
                        ?
                        <View />
                        :
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("AddNewMaterial")}
                            style={{
                                position: "absolute",
                                bottom: 25,
                                right: 25,
                                width: 60,
                                height: 60,
                                backgroundColor: Color.COLOR_PRIMARY,
                                borderRadius: 50,
                                justifyContent: "center",
                                alignContent: 'center'
                            }}>
                            <Image style={{ width: 24, height: 24, alignSelf: 'center' }}
                                source={require('../../assets/images/plus-dark.png')} />
                        </TouchableOpacity>
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: LayoutConst.spacing,
        backgroundColor: Color.WHITE
    }
})


function mapStateToProps(state, props) {
    let { dataMaterial } = state.material
    return { data: dataMaterial }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MaterialPage)