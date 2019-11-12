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
import Dropdown from '../components/NewDropdown';
import Card from '../components/Card';


const { width, height } = Dimensions.get('window');

class CompositionPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    id: 0,
                    name: 'Espresso',
                    category: 'Drink',
                    productPicture: 'https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_960_720.jpg',
                    description: 'Kopi puaaaaiiitttt'
                },
                {
                    id: 1,
                    name: 'Cocholaos',
                    category: 'Food',
                    productPicture: 'https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_960_720.jpg',
                    description: 'Panganan gak jelas'
                },
                // {
                //     id: 2,
                //     name: 'Chaos',
                //     category: 'Snack',
                //     productPicture: 'https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_960_720.jpg'
                // },
                // {
                //     id: 3,
                //     name: 'Chaos',
                //     category: 'Snack',
                //     productPicture: 'https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_960_720.jpg'
                // },
                {
                    id: 4,
                    name: 'Chaos',
                    category: 'Snack',
                    productPicture: 'https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_960_720.jpg',
                    description: 'Ojo dituku'
                },
                {
                    id: 5,
                    name: 'Cocholaos',
                    category: 'Food',
                    productPicture: 'https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_960_720.jpg',
                    description: 'Iki yo ojo dituku'
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
            index: 0,
            value: ''
        }
    }

    _onRefresh() {
        this.setState({
            loading: this.state.index !== 0
        })
    }

    render() {

        let dropdownOptions = this.state.dataCategory.map(el => {
            return el.category
        });

        dropdownOptions.unshift('All Composition');

        return (
            <View style={styles.container}>
                {
                    this.state.loading === true ?
                        <View style={{ flex: 1 }}>
                            <ActivityIndicator
                                size={36}
                                style={{ alignSelf: 'center' }}
                                color={'#666'} />
                        </View>
                        :
                        this.state.data.length > 0 ?
                            <View style={{ flex: 1 }}>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <View>
                                        <View style={styles.dropdown}>
                                            <Dropdown
                                                selectedValue={"All Composition"}
                                                onValueChange={(value, index) => this.setState({ value, index })}
                                                options={dropdownOptions}
                                            />
                                        </View>

                                        <View style={{ marginTop: LayoutConst.spacing }}>
                                            <FlatList
                                                data={this.state.index === 0 ? this.state.data : this.state.data.filter((x) => x.category === this.state.value)}
                                                extraData={this.state}
                                                numColumns={2}
                                                renderItem={({ item, index }) =>
                                                    <TouchableOpacity
                                                        onPress={() => this.props.navigation.navigate('Detail', { data: item })}
                                                    >

                                                        <Card
                                                            item={item}
                                                            index={index} />

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
                                        source={require('../../assets/images/plus-dark.png')} />
                                </TouchableOpacity>
                            </View>
                            :
                            <View>
                                <Text style={styles.text}>You haven't create a composition yet</Text>

                                <View style={styles.button}>
                                    <Button value="Create new composition" />
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
