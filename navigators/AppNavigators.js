import React from "react"
import { createStackNavigator } from "react-navigation-stack"
import Page1 from "../pages/Page1"
import HomePage from "../pages/HomePage"

export const AppStackNavigator = createStackNavigator(
    {

        HomePage: {
            screen: HomePage
        },
        Page1: {
            screen: Page1
        }


    },
    {
        defaultNavigationOptions: {//全局默认属性，对当前导航器的所有页面有效
            //headerShown: false //可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        }
    }
)





