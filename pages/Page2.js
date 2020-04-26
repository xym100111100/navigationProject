import React from "react"
import { Button, View, Text, StyleSheet } from "react-native"

export default class Page2 extends React.Component {

    render() {
        const { navigation } = this.props
        return (
            <View>
                <Text style={styles.text} >
                    欢迎来到page2
                 </Text>
                <Button title="go Page3" onPress={() => {
                    navigation.navigate('Page3', { name: '动态页面', mode: 'edit' })
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