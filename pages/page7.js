import React from "react"
import { Button, Text, View } from "react-native"

export default class page7 extends React.Component {

   render() {
      const { navigation } = this.props
      return (
         <View>
            <Text>欢迎来到page7</Text>
            <Button title="page7" onPress={() => {
               navigation.navigate('page6')
            }} />
            <Button title="openDrawer" onPress={() => {
               navigation.toggleDrawer()
            }} />

         </View>
      )
   }
}
