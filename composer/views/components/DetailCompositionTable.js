import React from 'react'
import { View, Text } from "react-native";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Color, LayoutConst } from "../../system/Collection";

class DetailCompositionTable extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { name, value, unit } = this.props.data

        return <View style={{
            flex: 1,
            paddingHorizontal: LayoutConst.regularSpacing * 0.5,
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: LayoutConst.spacing
        }}>
            <Text
                style={{
                    color: Color.BLACK,
                    fontSize: 16,
                    fontFamily: "Rubik-Bold"
                }}
                children={name}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                <Text
                    style={{
                        color: Color.BLACK,
                        fontSize: 14,
                        fontFamily: "Rubik-Regular",
                        marginEnd: 6
                    }}
                    children={value}
                />
                <Text
                    style={{
                        color: Color.BLACK,
                        fontSize: 14,
                        fontFamily: "Rubik-Regular"
                    }}
                    children={unit}
                />
            </View>
        </View>
    }

}

DetailCompositionTable.propTypes = {
    data: PropTypes.object
}

export default connect()(DetailCompositionTable)