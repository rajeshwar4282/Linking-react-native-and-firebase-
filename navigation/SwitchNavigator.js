import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Profile from '../screens/Profile'
import Details from '../screens/Details'
const SwitchNavigator = createSwitchNavigator(
    {
        Login: {
            screen: Login
        },
        Signup: {
            screen: Signup
        },
        Profile: {
            screen: Profile
        },
        Details: {
            screen: Details
        }
    },
    {
        initialRouteName: 'Signup'
    }
)

export default createAppContainer(SwitchNavigator)
