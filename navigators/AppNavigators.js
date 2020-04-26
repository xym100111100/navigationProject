import React from "react"
import { createStackNavigator } from "react-navigation-stack"
import Page1 from "../pages/Page1"
import Page2 from "../pages/Page2"
import Page3 from "../pages/Page3"
import Page4 from "../pages/Page4"
import HomePage from "../pages/HomePage"
import { Button } from "react-native"
export const AppStackNavigator = createStackNavigator(
    {

        HomePage: {
            screen: HomePage
        },
        Page1: {
            screen: Page1,
            navigationOptions: ({ navigation }) => (
                {
                    //动态接受参数作为页面名
                    title: `${navigation.state.params && navigation.state.params.name}页面名`
                }
            )
        },
        Page2: {
            screen: Page2,
            navigationOptions: {
                title: "导航标题"
            }
        },
        Page3: {
            screen: Page3,
            navigationOptions: (props) => {
                const { navigation } = props;
                const { state, setParams } = navigation;
                const { params } = state;
                return {
                    title: params ? params.name : "this is paee3",
                    headerRight: () => (<Button
                        title={params.mode === 'edit' ? '编辑' : '保存'}
                        onPress={() => {
                            setParams({ mode: params.mode === 'edit' ? '编辑完成' : '保存完成' })
                        }}
                    />)
                }
            }
        },
        Page4: {
            screen: Page4
        }


    },
    {
        defaultNavigationOptions: {//全局默认属性，对当前导航器的所有页面有效
            //headerShown: false //可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        }
    }
)





