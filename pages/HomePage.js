import React from "react"
import { Button, View, Text, StyleSheet } from "react-native"

export default class HomePage extends React.Component {
    static navigationOptions = {
        title:"home",
        headerBackTitle:'返回', // 有长度相纸android不支持
    }
    render() {
        const { navigation } = this.props
        return (
            <View>
                <Text style={styles.text} >
                    欢迎来到home
                 </Text>
                <Button title="go page1" onPress={() => {
                    navigation.navigate('Page1',{name:'猫咪'})    

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