import React from "react"
import { Button, View, Text, StyleSheet } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome';
// 引入图标显示x，需要重新react-native run-android,直到看到android/app/src/main/assets/font/有很多图标文件

export default class HomePage extends React.Component {
    static navigationOptions = {
        title: "home",
        headerBackTitle: '返回', // 有长度相纸android不支持
    }
    render() {
        const { navigation } = this.props
        return (
            <View>
                <Text style={styles.text} >
                    欢迎来到home
                    {/* <AntDesign
                        name={'down'}
                        size={50}
                        style={{ color: 'red' }}
                    />
                    <Icon name="rocket" size={30} color="#900" /> */}
                    <Ionicons
                        name={'ios-home'}
                        size={26}
                        style={{ color: 'red' }}
                    />
                </Text>
                <Button title="go page1" onPress={() => {
                    navigation.navigate('Page1', { name: '猫咪' })

                }} ></Button>
            </View>)
    }



}

const styles = StyleSheet.create({

    text: {
        fontSize: 20,
        color: "red"
    }
})