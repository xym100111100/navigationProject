import React from "react"
import { Button, View, Text ,StyleSheet} from "react-native"

export default class page1 extends React.Component {

    render() {
        const { navigation } =this.props
        return (
            <View>
                <Text style={styles} >
                    欢迎来到page1
                 </Text>
                 <Button title="go Back"  onPress={()=>{
                    navigation.goBack()
                 }} ></Button>
            </View>)
    }



}

const  styles = StyleSheet.create({

    text:{
        fontSize:20,
        color:"white"
    }
})