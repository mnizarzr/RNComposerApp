import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    Image,
    Dimensions,
    FlatList,
    ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { Color, LayoutConst } from '../../system/Collection';
import Button from '../components/Button';
import Dropdown, { value, index } from '../components/Dropdown';
import Card from '../components/Card';

const { width, height } = Dimensions.get('window')

class CompositionPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    name: 'Espresso',
                    category: 'Drink',
                    productPicture: 'https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_960_720.jpg'
                },
                {
                    name: 'Cocholaos',
                    category: 'Food',
                    productPicture: 'https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_960_720.jpg'
                },
                // {
                //     name: 'Chaos',
                //     category: 'Snack',
                //     productPicture: 'https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_960_720.jpg'
                // },
                // {
                //     name: 'Chaos',
                //     category: 'Snack',
                //     productPicture: 'https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_960_720.jpg'
                // },
                {
                    name: 'Chaos',
                    category: 'Snack',
                    productPicture: 'https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_960_720.jpg'
                },
                {
                    name: 'Cocholaos',
                    category: 'Food',
                    productPicture: 'https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_960_720.jpg'
                }
            ],
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
            loading: false,
            tempIndex : index
        }
    }

    _onRefresh() {
        this.setState({
            loading: index != index ? true : false
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.loading === true ?
                        <View style={{ flex: 1 }}>
                            <ActivityIndicator
                                size={36}
                                style={{ alignSelf: 'center' }}
                                color={'#666'}/>
                        </View>
                        :
                        this.state.data.length > 0 ?
                            <View style={{ flex: 1 }}>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <View>
                                        <View style={styles.dropdown}>
                                            <Dropdown value="All Composition" datadropdown={this.state.dataCategory}/>
                                        </View>

                                        <View style={{ marginTop: LayoutConst.spacing }}>
                                            <FlatList
                                                data={index === 0 ? this.state.data : this.state.data.filter((x) => x.category === value)}
                                                numColumns={2}
                                                renderItem={({ item, index }) =>
                                                    <TouchableOpacity
                                                        onPress={() => this.props.navigation.navigate('Detail')}
                                                    >

                                                        <Card
                                                            item={item}
                                                            index={index}/>

                                                    </TouchableOpacity>
                                                }
                                                onRefresh={() => this._onRefresh()}
                                                refreshing={this.state.loading}
                                                keyExtractor={(item, index) => index.toString()}
                                            />
                                        </View>
                                    </View>
                                </ScrollView>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Create')}
                                    style={{
                                        position: "absolute",
                                        bottom: 25,
                                        right: 0,
                                        width: 60,
                                        height: 60,
                                        backgroundColor: Color.COLOR_PRIMARY,
                                        borderRadius: 50,
                                        justifyContent: "center",
                                        alignContent: 'center'
                                    }}>
                                    <Image style={{ width: 24, height: 24, alignSelf: 'center' }}
                                           source={require('../../assets/images/plus-dark.png')}/>
                                </TouchableOpacity>
                            </View>
                            :
                            <View>
                                <Text style={styles.text}>You haven't create a composition yet</Text>

                                <View style={styles.button}>
                                    <Button value="Create new composition"/>
                                </View>
                            </View>
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: LayoutConst.spacing,
        backgroundColor: Color.WHITE
    },
    text: {
        fontFamily: 'Rubik-Medium',
        fontSize: LayoutConst.largeTextSize,
        marginTop: LayoutConst.spacing
    },
    button: {
        marginTop: LayoutConst.spacing,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    dropdown: {
        marginTop: LayoutConst.smallSpacing,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    }
})


function mapStateToProps(state, props) {
    return {}
}

export default connect(mapStateToProps)(CompositionPage)
