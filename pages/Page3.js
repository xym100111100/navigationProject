import React from "react"
import { Button, View, Text, StyleSheet,TextInput } from "react-native"

export default class Page3 extends React.Component {

    render() {
        const { navigation } = this.props;
        const { state, setParams } = navigation;
        const { params } = state;
        const showText = params && params.mode === 'edit' ? "正在编辑" : "编辑完成"
        return (
            <View>
                <Text style={styles.text} >
                    欢迎来到page3
                 </Text>
                <Text>{showText}</Text>
                <Button title="go Back" onPress={() => {
                    navigation.navigate('Page4')
                }} ></Button>
                <TextInput style={styles.input} onChangeText={(val)=>{
                    setParams({name:val})
                }} />
            </View>)
    }



}

const styles = StyleSheet.create({

    text: {
        fontSize: 20,
        color: "red"
    },
    input:{
        height:50,
        borderWidth:1,
        borderColor:'red'
    }
})