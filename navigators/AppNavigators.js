import React from "react"
import { createStackNavigator } from "react-navigation-stack"
import Page1 from "../pages/Page1"
import Page2 from "../pages/Page2"
import Page3 from "../pages/Page3"
import Page4 from "../pages/Page4"
import HomePage from "../pages/HomePage"
import { Button, Text } from "react-native"
import { createBottomTabNavigator } from "react-navigation-tabs"
import Ionicons from 'react-native-vector-icons/Ionicons'

const BottomTabNavigator = createBottomTabNavigator(
    {
        Page1: {
            screen: Page1,
            navigationOptions: {
                //tabBarLabel: 'page1',  // 这里除了字符串还可以接受一个组件,下面为例子,切记加上后面的对齐属性
                tabBarLabel: ({ tintColor, focused }) => (
                    <Text style={{ color: focused ? 'orange' : 'grey', textAlign: 'center' }} >page1</Text>
                ),
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons
                        name={'ios-home'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                )


            }
        },
        Page2: {
            screen: Page2,
            navigationOptions: {
                tabBarLabel: ({ tintColor, focused }) => (
                    <Text style={{ color: focused ? 'orange' : 'grey', textAlign: 'center' }} >page2</Text>
                ),
                tabBarIcon: ({ tintColor, focused }) => {
                    return (
                        <Ionicons
                            name={'ios-people'}
                            size={26}
                            style={{ color: tintColor }}
                        />
                    )

                }
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: 'red'
        }
    }
)


export const AppStackNavigator = createStackNavigator(
    {

        HomePage: {
            //screen: HomePage
            screen: BottomTabNavigator,
            navigationOptions: {
                title: '底部导航',
                headerShown: false
            }
        },
        Page1: {
            screen: Page1,
            navigationOptions: ({ navigation }) => (
                // 这里的写法{ navigation } 是取出props对象里面的navigation
                {
                    //动态接受参数作为页面名
                    title: `${navigation.state.params && navigation.state.params.name}页面名`
                }
            )
        },
        Page2: {
            screen: Page2,
            navigationOptions: {
                title: "导航标题",
                headerShown: false //隐藏header
            }
        },
        Page3: {
            screen: Page3,
            navigationOptions: (props) => {
                const { navigation } = props;
                const { state, setParams } = navigation;
                // 这里注意state，与react中的state相似，这里可以使用setParams设置，页面表现和react的state一样
                const { params } = state;
                return {
                    title: params ? params.name : "this is paee3",
                    headerRight: () => (<Button
                        title={params.mode === 'edit' ? '编辑' : '保存'}
                        onPress={() => {
                            setParams({ mode: params.mode === 'edit' ? '' : 'edit' })
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
            // headerShown: false //可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        }
    }
)





