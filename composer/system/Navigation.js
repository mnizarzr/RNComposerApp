import React from 'react'
import { Dimensions, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { createAppContainer, createStackNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation'
import { DrawerActions } from 'react-navigation-drawer'

import LoginPage from '../views/pages/LoginPage'
import CompositionPage from '../views/pages/CompositionPage'
import HistoryPage from '../views/pages/HistoryPage'
import MaterialPage from '../views/pages/MaterialPage'
import DetailPage from '../views/pages/DetailPage'
import SideMenu from '../views/components/SideMenuLayout'
import { Color, LayoutConst } from './Collection'

const { width, height } = Dimensions.get('window')

export const MainNavigator = (isSignedIn = false) => {

    return createAppContainer(createSwitchNavigator(
        {
            Auth: {
                screen: LoginPage
            },
            Home: {
                screen: Drawer
            }
        },
        {
            initialRouteName: isSignedIn ? "Home" : "Auth"
        }
    ))

}

const Header = (props) => {
    return <TouchableOpacity onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())} >
        <Image
            style={styles.headerLeftIcon}
            source={require("../assets/images/drawer.png")}
            resizeMode="contain" />
    </TouchableOpacity>
}

const CompositionStack = createStackNavigator(
    {
        Composition: {
            screen: CompositionPage,
            navigationOptions: ({ navigation }) => ({
                title: 'Composition',
                headerStyle: styles.headerStyle,
                headerLeft: <Header navigation={navigation} />,
                headerTitleStyle: styles.headerTitle,

            })
        },
        Detail: {
            screen: DetailPage
        }
    }
)

const MaterialStack = createStackNavigator(
    {
        Material: {
            screen: MaterialPage,
            navigationOptions: ({ navigation }) => ({
                title: 'Material',
                headerStyle: styles.headerStyle,
                headerLeft: <Header navigation={navigation} />,
                headerTitleStyle: styles.headerTitle,

            })
        }
    }
)

const HistoryStack = createStackNavigator(
    {
        History: {
            screen: HistoryPage,
            navigationOptions: ({ navigation }) => ({
                title: 'History',
                headerStyle: styles.headerStyle,
                headerLeft: <Header navigation={navigation} />,
                headerTitleStyle: styles.headerTitle,

            })
        }
    }
)

const Drawer = createDrawerNavigator(
    {
        Composition: {
            screen: CompositionStack
        },
        Material: {
            screen: MaterialStack
        },
        History: {
            screen: HistoryStack
        }
    },
    {
        initialRouteName: "Composition",
        contentComponent: SideMenu,
        drawerWidth: width * 80 / 100,
        drawerType: "slide",
        overlayColor: '0%'
    }
)

const styles = StyleSheet.create({
    headerStyle: {
        elevation: 0
    },
    headerLeftIcon: {
        width: LayoutConst.regularIconSize,
        height: LayoutConst.regularIconSize,
        marginHorizontal: LayoutConst.spacing
    },
    headerTitle: {
        fontSize: LayoutConst.mediumTextSize,
        fontFamily: 'Rubik-Medium',
        color: Color.BLACK
    }
})