import React from "react"
import { Button, View, Text, StyleSheet } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome';
// 引入图标显示x，需要重新react-native run-android,直到看到android/app/src/main/assets/font/有很多图标文件

export default class HomePage extends React.Component {
    static navigationOptions = {
        title: "home",
        headerBackTitle: '返回', // 有长度限制，android不支持
    }
    render() {
        const { navigation } = this.props
        return (
            <View>
                <Text style={styles.text} >
                    欢迎来到
                    <Ionicons
                        name={'ios-home'}
                        size={26}
                        style={{ color: 'red' }}
                    />
                    home
                </Text>
                <View style={styles.button}  >
                    <Button title="page1 动态传参数" onPress={() => {
                        navigation.navigate('Page1', { name: '猫咪' })

                    }} />

                </View>
                <View style={styles.button} >
                    <Button title="BottomTabNavigator 底部导航 " onPress={() => {
                        navigation.navigate('BottomTabNavigator', { name: '猫咪' })

                    }} />
                </View>
                <View style={styles.button}  >
                    <Button style={styles.button} title="page3 修改导航参数" onPress={() => {
                        navigation.navigate('Page3', { name: '猫咪' })

                    }} />
                </View>
                <View style={styles.button}  >
                    <Button style={styles.button} title="MaterialTopTabNavigator 顶部导航 " onPress={() => {
                        navigation.navigate('MaterialTopTabNavigator', { name: '猫咪' })

                    }} />
                </View>
            </View>)
    }



}

const styles = StyleSheet.create({

    text: {
        fontSize: 20,
        color: "red",
        textAlign:'center'
    },
    button: {
        marginTop: 10,
        color: 'red'
    }
})