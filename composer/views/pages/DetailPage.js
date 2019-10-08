import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { Color, LayoutConst } from '../../system/Collection';
import DetailCompositionTable from '../components/DetailCompositionTable';
import Button from '../components/Button';
import InputText from "../components/InputText";
import Modal from 'react-native-modal';

const { width, height } = Dimensions.get('window');

class DetailPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modalVisibility: false,
            makeValue: 0,
            data: [
                {
                    'name': 'Brown Sugar',
                    'value': 20,
                    'unit': 'gram',
                },
                {
                    'name': 'Arabica Coffee',
                    'value': 50,
                    'unit': 'gram',
                },
                {
                    'name': 'Milk',
                    'value': 20,
                    'unit': 'gram',
                },
                {
                    'name': 'Hot Water',
                    'value': 150,
                    'unit': 'mililiter',
                },
            ],
        };

        this.pressInterval = null;
        this.incrementValue = this._incrementValue.bind(this);
        this.decrementValue = this._decrementValue.bind(this);
        this.stopPressInterval = this._stopPressInterval.bind(this);
    }

    _closeModal = () => this.setState({ modalVisibility: false });

    _incrementValue = () => {
        this.setState({ makeValue: parseInt(this.state.makeValue) + 1 });
        this.pressInterval = setTimeout(this._incrementValue, 100);
    }

    _decrementValue = () => {
        if (this.state.makeValue > 0) {
            this.setState({ makeValue: this.state.makeValue - 1 });
            this.pressInterval = setTimeout(this._decrementValue, 100);
        }
    }

    _stopPressInterval() {
        clearTimeout(this.pressInterval);
    }

    render() {
        return <View style={styles().container}>

            <Modal
                isVisible={this.state.modalVisibility}
                onBackButtonPress={this._closeModal}
                onBackdropPress={this._closeModal}
            >
                <View style={styles().modal}>

                    <Text
                        style={{
                            color: Color.BLACK,
                            fontSize: 16,
                            fontFamily: 'Rubik-Bold',
                            marginBottom: LayoutConst.regularSpacing,
                        }}
                        children="Amount of composition made"
                    />

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            {
                                this.state.makeValue == 0 ?
                                <Image
                                    style={styles().icon}
                                    source={require('../../assets/images/minus-circle.png')}
                                />
                                :
                                <TouchableOpacity
                                    onPressIn={this.decrementValue}
                                    onPressOut={this.stopPressInterval}
                                >
                                    <Image
                                        style={styles().icon}
                                        source={require('../../assets/images/minus-circle.png')}
                                    />
                                </TouchableOpacity>
                            }

                            <View style={styles().makeValue}>
                                <InputText
                                    value={this.state.makeValue.toString()}
                                    onChangeText={(text)=> this.setState({makeValue: text})}
                                    returnKeyType="next"
                                    keyboardType={'number-pad'}
                                    background={Color.LIGHT_GREY}
                                    // style={{ borderWidth: 1, borderColor: Color.COLOR_PRIMARY, minWidth: 50}}
                                />
                            </View>
                            
                            <TouchableOpacity
                                onPressIn={this.incrementValue}
                                onPressOut={this.stopPressInterval}
                            >
                                <Image
                                    style={styles().icon}
                                    source={require('../../assets/images/plus-circle.png')}
                                />
                            </TouchableOpacity>

                        </View>

                        <Button value="Make" onPress={() => alert(this.state.makeValue)} />

                    </View>
                </View>

            </Modal>

            <View style={{ width: width, height: height / 3 }}>
                <ImageBackground
                    style={{ flex: 1, justifyContent: 'flex-end' }}
                    source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_960_720.jpg' }}
                >
                    <View style={styles().titleContainer}>
                        <Text
                            style={{ color: Color.WHITE, fontSize: 20, fontFamily: 'Rubik-Bold' }}
                            children="Title"
                        />
                        <Text
                            style={{ color: Color.COLOR_PRIMARY, fontSize: 14, fontFamily: 'Rubik-Regular' }}
                            children="Category"
                        />
                        <Text
                            style={{ color: Color.WHITE, fontSize: 14, fontFamily: 'Rubik-Regular' }}
                            children="Description"
                        />
                    </View>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={{ position: 'absolute', top: 14, right: 14 }}>
                        <Image
                            style={{ width: 20, height: 20, resizeMode: 'contain' }}
                            source={require('../../assets/images/close.png')}
                        />
                    </TouchableOpacity>

                </ImageBackground>
            </View>

            <View style={{ flex: 1, padding: 20 }}>
                <Text
                    style={{ color: Color.BLACK, fontSize: 14, fontFamily: 'Rubik-Regular' }}
                    children="Estimated composition that can be made: 10"
                />
                <Text
                    style={{
                        color: Color.GREY,
                        fontSize: 14,
                        fontFamily: 'Rubik-Regular',
                        marginTop: LayoutConst.regularSpacing * 1.5,
                    }}
                    children="Material in this composition:"
                />
                <FlatList
                    style={{ marginTop: LayoutConst.regularSpacing }}
                    data={this.state.data}
                    renderItem={({ item, index }) => <DetailCompositionTable data={item}/>}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>

            <View style={{ padding: LayoutConst.spacing }}>
                <Button
                    style={{ alignItems: 'center' }}
                    onPress={() => this.setState({ modalVisibility: true })}
                    value="Make this composition"/>
            </View>

        </View>;
    }

}

const styles = props => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.LIGHT_GREY,
    },
    modal: {
        height: 120,
        backgroundColor: 'white',
        padding: LayoutConst.spacing,
        borderRadius: LayoutConst.roundedCorner,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    titleContainer: {
        width: width,
        height: 100,
        padding: LayoutConst.regularSpacing,
        backgroundColor: 'rgba(0,0,0,0.4)',
        alignSelf: 'flex-end',
        justifyContent: 'space-between',
    },
    makeValue: {
        width: 80,
        height: 50,
        backgroundColor: Color.LIGHT_GREY,
        borderRadius: LayoutConst.roundedCorner,
        borderColor: Color.COLOR_PRIMARY,
        borderWidth: 2,
        marginHorizontal: LayoutConst.regularSpacing,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
    },
});

function mapStateToProps(state, props) {
    return {};
}

export default connect(mapStateToProps)(DetailPage);
