import React, {Component} from 'react'
import {createStackNavigator, createDrawerNavigator, createAppContainer} from 'react-navigation'

import {CustomDrawerContentComponent} from '../views/components/DrawerNavigation'
import HeaderLeft from '../views/components/HeaderLeft'
import LoginPage from '../views/pages/LoginPage'
import CompositionPage from '../views/pages/CompositionPage'
import MaterialPage from '../views/pages/MaterialPage'
import HistoryPage from '../views/pages/HistoryPage'
import HomePage from '../views/pages/HomePage';

export const MainNavigator = (signedIn = false) => {

    return createStackNavigator(
        {
            AuthStack: {
                screen: LoginPage,
                navigationOptions: ({ navigation }) => ({
                    headerMode: null
                }),
            },
            HomeStack: {
                screen: HomePage,
            }
        },
        {
            initialRouteName: signedIn ? 'HomeStack' : 'AuthStack',
            headerMode: 'none'
        }
    )

}

export const HomeDrawer = createDrawerNavigator(
    {
        Composition: {
            screen: () => <CompositionStack/>,
            navigationOptions: {
                drawerLabel: 'Composition'
            }
        },
        Material: {
            screen: () => <MaterialStack/>,
            navigationOptions: {
                drawerLabel: 'Material'
            }
        },
        History: {
            screen: () => <HistoryStack/>,
            navigationOptions: {
                drawerLabel: 'History'
            }
        }
    },
    {
        initialRouteName: 'Composition',
        drawerPosition: 'left',
        contentComponent: CustomDrawerContentComponent,
    }
) 

let CompositionStack = createAppContainer(createStackNavigator(
    {
        CompositionHome: {
            screen:() => <CompositionPage/>,
            navigationOptions: ({ navigation }) => ({
                title: 'Composition',
                headerLeft: <HeaderLeft navigationProps={navigation} />,
            }),

        }, 

    },
    {
        initialRouteName: 'CompositionHome',
    }
))

let MaterialStack = createAppContainer(createStackNavigator(
    {
        MaterialHome: {
            screen: () => <MaterialPage/>,
            navigationOptions: ({ navigation }) => ({
                title: 'Material',
                headerLeft: <HeaderLeft navigationProps={navigation} />,
            }),
        }, 

    },
    {
        initialRouteName: 'MaterialHome',
    }
))

let HistoryStack = createAppContainer(createStackNavigator(
    {
        HistoryHome: {
            screen: () => <HistoryPage/>,
            navigationOptions: ({ navigation }) => ({
                title: 'History',
                headerLeft: <HeaderLeft navigationProps={navigation} />,
            }),
        }, 

    },
    {
        initialRouteName: 'HistoryHome',
    }
))