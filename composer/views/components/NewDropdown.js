import React from 'react';
import { Animated, View, Image, Text, Easing, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Touchable from './PlatformTouchable';
import { Color, LayoutConst } from '../../system/Collection';
import { withNavigation } from 'react-navigation';

class NewDropdown extends React.Component {

    static defaultProps = {
        defaultValue: 'Please select...',
    };

    constructor(props) {
        super(props);

        this.state = {
            expand: false,
            selectedValue: props.selectedValue,
            selectedIndex: 0,
        };

        this.imageRotation = new Animated.Value(0);
        this.heightTransform = new Animated.Value(0);

    }

    onOpenOrClose = (index) => {
        if (this.state.expand) {
            this.collapse();
            this.setState({
                selectedIndex: index,
            });
        } else {
            this.expand();
        }
    };

    expand = () => {
        Animated.timing(
            this.imageRotation,
            {
                toValue: 1,
                duration: 300,
                easing: Easing.linear,
            },
        ).start();
        this.heightTransform.setValue(0);
        Animated.decay(this.heightTransform, { velocity: 1 }).start();
    };

    collapse = () => {
        Animated.timing(
            this.imageRotation,
            {
                toValue: 0,
                duration: 300,
                easing: Easing.linear,
            },
        ).start();
        this.heightTransform.setValue(1);
        Animated.decay(this.heightTransform, { velocity: 0 }).start();

    };

    render() {

        let value = this.state.selectedValue || this.props.defaultValue;

        return (
            <Animated.View
                style={{
                    maxHeight: 300,
                    transform: [{
                        scaleY: this.heightTransform.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 300],
                        }),
                    }],
                }}
            >
                <View style={{ justifyContent: 'space-between', padding: 6 }}>
                    <Touchable
                        onPress={this.onOpenOrClose.bind(this)}
                    >

                        <Text
                            style={styles.textValue}
                            children={value}
                        />

                    </Touchable>

                    <Touchable
                        onPress={() => this.setState({ expand: !this.state.expand })}
                    >
                        <Animated.Image
                            style={{
                                width: 14,
                                height: 14,
                                resizeMode: 'contain',
                                transform: [{
                                    rotate: this.imageRotation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '360deg'],
                                    }),
                                }],
                            }}
                            source={require('../../assets/images/dropdown.png')}
                        />
                    </Touchable>
                </View>

                {
                    this.state.expand
                        ?
                        <ScrollView contentContainerStyle={{ alignItems: 'flex-start', padding: 6 }}>
                            {
                                this.props.options.map((value, index) =>
                                    <Touchable key={value}>
                                        <Text
                                            style={{ color: this.state.selectedIndex === index ? Color.COLOR_PRIMARY : Color.BLACK }}
                                            children={value}
                                        />
                                    </Touchable>,
                                )
                            }
                        </ScrollView>
                        :
                        <View/>
                }

            </Animated.View>
        );
    }

}

NewDropdown.propTypes = {
    selectedValue: PropTypes.string,
    onValueChange: PropTypes.func,
    options: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.objectOf(PropTypes.string)]).isRequired,
};

const styles = StyleSheet.create({
    textValue: {
        fontFamily: 'OpenSans-Regular',
        fontSize: LayoutConst.smallTextSize,
        color: Color.DARK_GREY,
    },
});

export default withNavigation(NewDropdown)
