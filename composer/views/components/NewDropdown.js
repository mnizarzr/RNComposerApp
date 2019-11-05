import React from 'react';
import { Animated, View, Image, Text, Easing, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Touchable from './PlatformTouchable';
import { Color, LayoutConst } from '../../system/Collection';
import { withNavigation } from 'react-navigation';
import Reactotron from 'reactotron-react-native'

class NewDropdown extends React.Component {

    static defaultProps = {
        defaultTitle: 'Please select...',
    };

    constructor(props) {
        super(props);

        this.state = {
            expand: false,
            selectedValue: '',
            selectedIndex: -1,
            dropDownHeight: new Animated.Value(0),
        };

        this.imageRotation = new Animated.Value(0);

    }

    componentDidMount() {
        this.setState({
            selectedValue: this.props.selectedValue === undefined ? '' : this.props.selectedValue
        })
    }

    _toggle = (index) => {

        let rotationValue = this.state.expand ? 0 : 1;
        Animated.timing(
            this.imageRotation,
            {
                toValue: rotationValue,
                duration: 300,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true
            },
        ).start();

        this.setState({ expand: !this.state.expand });

        if (index !== undefined) {
            this.setState({
                selectedIndex: index,
                selectedValue: this.props.options[index]
            }, () => this.props.onValueChange(this.state.selectedValue, this.state.selectedIndex))
        }

    };

    render() {

        let value = this.state.selectedValue === '' ? (this.props.title === undefined ? this.props.defaultTitle : this.props.title) : this.state.selectedValue

        return (
            <Animated.View
                style={[styles.container, this.props.style]}>

                <Touchable style={{ justifyContent: "center" }} onPress={() => this._toggle()}>
                    <View style={styles.valueContainer}>
                        <Text
                            style={styles.textValue}
                            children={value}
                        />
                        <View style={{ borderRadius: 50 }}>
                            <Touchable background={Touchable.Ripple('grey', true)}
                                style={{ borderRadius: 50 }} onPress={() => this._toggle()}>
                                <Animated.Image
                                    style={{
                                        width: 14,
                                        height: 14,
                                        resizeMode: 'contain',
                                        transform: [{
                                            rotate: this.imageRotation.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: ['0deg', '-180deg'],
                                            }),
                                        }],
                                    }}
                                    source={require('../../assets/images/dropdown.png')}
                                />
                            </Touchable>
                        </View>
                    </View>
                </Touchable>

                {
                    this.state.expand
                        ?
                        <ScrollView contentContainerStyle={{
                            paddingHorizontal: LayoutConst.smallSpacing, paddingBottom: LayoutConst.smallSpacing
                        }}>
                            {
                                this.props.options.map((value, index) =>
                                    <View style={{ flex: 1 }} key={index}>
                                        <Touchable
                                            style={{ paddingVertical: 12 }}
                                            onPress={() => this._toggle(index)}
                                        >
                                            <Text
                                                style={{ color: (this.state.selectedIndex === index || this.state.selectedValue === value) ? Color.COLOR_PRIMARY : Color.BLACK }}
                                                children={value}
                                            />
                                        </Touchable>
                                    </View>,
                                )
                            }
                        </ScrollView>
                        :
                        <View />
                }

            </Animated.View>
        );
    }

}

NewDropdown.propTypes = {
    title: PropTypes.string,
    selectedValue: PropTypes.string,
    onValueChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.LIGHT_GREY,
        borderRadius: LayoutConst.roundedCorner
    },
    valueContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: LayoutConst.smallSpacing,
    },
    textValue: {
        fontFamily: 'OpenSans-Regular',
        fontSize: LayoutConst.smallTextSize,
        color: Color.DARK_GREY,
    },
});

export default withNavigation(NewDropdown)
