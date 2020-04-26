import React from "react"
import { Button, View, Text, StyleSheet } from "react-native"

export default class Page1 extends React.Component {

    render() {
        const { navigation } = this.props
        return (
            <View>
                <Text style={styles.text} >
                    欢迎来到page1
                 </Text>
                <Button title="go Page2" onPress={() => {
                    navigation.navigate('Page2')
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