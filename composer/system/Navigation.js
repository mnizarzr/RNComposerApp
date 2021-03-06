import React from 'react'
import { Dimensions, Image, TouchableOpacity, StyleSheet } from 'react-native'
import {
    createAppContainer,
    createStackNavigator,
    createDrawerNavigator,
    createSwitchNavigator
} from 'react-navigation'
import { DrawerActions } from 'react-navigation-drawer'

import LoginPage from '../views/pages/LoginPage'
import CompositionPage from '../views/pages/CompositionPage'
import HistoryPage from '../views/pages/HistoryPage'
import MaterialPage from '../views/pages/MaterialPage'
import AddNewMaterial from "../views/pages/AddNewMaterial";
import DetailPage from '../views/pages/DetailPage'
import CreatePage from '../views/pages/CreatePage'
import AddMaterialPage from "../views/pages/CreateAddMaterialPage";
import SelectMaterial from "../views/pages/SelectMaterial";
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

    const { navigation, back } = props

    return (
        <TouchableOpacity onPress={() =>
            back === false ?
                navigation.dispatch(DrawerActions.toggleDrawer()) :
                navigation.goBack()
        }>
            <Image
                style={styles.headerLeftIcon}
                source={
                    back === false ?
                        require("../assets/images/drawer.png") :
                        require("../assets/images/back.png")
                }
                resizeMode="contain"/>
        </TouchableOpacity>
    )
}

const CompositionStack = createStackNavigator(
    {
        Composition: {
            screen: CompositionPage,
            navigationOptions: ({ navigation }) => ({
                title: 'Composition',
                headerStyle: styles.headerStyle,
                headerLeft: <Header navigation={navigation} back={false}/>,
                headerTitleStyle: styles.headerTitle,
            })
        },
        Detail: {
            screen: DetailPage,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        Create: {
            screen: CreatePage,
            navigationOptions: ({ navigation }) => ({
                title: 'Create new composition',
                headerStyle: styles.headerStyle,
                headerLeft: <Header navigation={navigation} back={true}/>,
                headerTitleStyle: styles.headerTitleSmall
            })
        },
        AddMaterialPage: {
            screen: AddMaterialPage,
            navigationOptions: ({ navigation }) => ({
                title: 'Create new composition',
                headerStyle: styles.headerStyle,
                headerLeft: <Header navigation={navigation} back={true}/>,
                headerTitleStyle: styles.headerTitleSmall
            })
        },
        SelectMaterial: {
            screen: SelectMaterial,
            navigationOptions: ({ navigation }) => ({
                title: 'Select Material',
                headerStyle: styles.headerStyle,
                headerLeft: null,
                headerRight: (
                    <TouchableOpacity
                        style={{ marginRight: LayoutConst.spacing }}
                        onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../assets/images/close.png')}
                            style={{ width: 18, height: 18 }}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>
                ),
                headerTitleStyle: styles.headerTitleSmall
            })
        },
        AddNewMaterial: {
            screen: AddNewMaterial,
            navigationOptions: ({ navigation }) => ({
                title: 'Add New Material',
                headerStyle: styles.headerStyle,
                headerLeft: <Header navigation={navigation} back={true}/>,
                headerTitleStyle: styles.headerTitle,
            })
        }
    }
)

CompositionStack.navigationOptions = ({ navigation }) => {
    let drawerLockMode = 'unlocked';
    if (navigation.state.index > 0) {
        drawerLockMode = 'locked-closed';
    }

    return {
        drawerLockMode,
    };
}

const MaterialStack = createStackNavigator(
    {
        Material: {
            screen: MaterialPage,
            navigationOptions: ({ navigation }) => ({
                title: 'Material',
                headerStyle: styles.headerStyle,
                headerLeft: <Header navigation={navigation} back={false}/>,
                headerTitleStyle: styles.headerTitle,

            })
        },
        AddNewMaterial: {
            screen: AddNewMaterial,
            navigationOptions: ({ navigation }) => ({
                title: 'Add New Material',
                headerStyle: styles.headerStyle,
                headerLeft: <Header navigation={navigation} back={true}/>,
                headerTitleStyle: styles.headerTitle,
            })
        }
    }
)

MaterialStack.navigationOptions = ({ navigation }) => {
    let drawerLockMode = 'unlocked';
    if (navigation.state.index > 0) {
        drawerLockMode = 'locked-closed';
    }

    return {
        drawerLockMode,
    };
}

const HistoryStack = createStackNavigator(
    {
        History: {
            screen: HistoryPage,
            navigationOptions: ({ navigation }) => ({
                title: 'History',
                headerStyle: styles.headerStyle,
                headerLeft: <Header navigation={navigation} back={false}/>,
                headerTitleStyle: styles.headerTitle,

            })
        }
    }
)

HistoryStack.navigationOptions = ({ navigation }) => {
    let drawerLockMode = 'unlocked';
    if (navigation.state.index > 0) {
        drawerLockMode = 'locked-closed';
    }

    return {
        drawerLockMode,
    };
}

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
    },
    headerTitleSmall: {
        fontSize: LayoutConst.smallTextSize,
        fontFamily: 'Rubik-Medium',
        color: Color.BLACK
    }
})
