import React from "react"
import { Button, View, Text, StyleSheet } from "react-native"

export default class Page4 extends React.Component {

    render() {
        const { navigation } = this.props
        return (
            <View>
                <Text style={styles.text} >
                    欢迎来到page4
                 </Text>
                <Button title="go HomePage" onPress={() => {
                    navigation.navigate('HomePage')
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