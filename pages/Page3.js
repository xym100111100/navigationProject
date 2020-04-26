import React from "react"
import { Button, View, Text, StyleSheet } from "react-native"

export default class Page3 extends React.Component {

    render() {
        const { navigation } = this.props
        return (
            <View>
                <Text style={styles.text} >
                    欢迎来到page3
                 </Text>
                <Button title="go Back" onPress={() => {
                    navigation.navigate('Page4')
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