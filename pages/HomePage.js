import React from "react"
import { Button, View, Text, StyleSheet } from "react-native"

export default class HomePage extends React.Component {
    static navigationOptions = {
        title:"home5"
    }
    render() {
        const { navigation } = this.props
        return (
            <View>
                <Text style={styles} >
                    欢迎来到home
                 </Text>
                <Button title="go page1" onPress={() => {
                    navigation.navigate('Page1')    

                }} ></Button>
            </View>)
    }



}

const styles = StyleSheet.create({

    text: {
        fontSize: 20,
        color: "white"
    }
})