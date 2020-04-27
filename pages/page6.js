import React from "react"
import { Button, View, Text } from "react-native"
import { DrawerActions } from "react-navigation-drawer"

export default class page6 extends React.Component {
   /**
    * this.props.navigation.openDrawer();
    * this.props.navigation.closeDrawer();
    * this.props.navigation.toggleDrawer();
    * 或者
    * this.props.navigation.dispatch(DrawerActions.openDrawer());
    * this.props.navigation.dispatch(DrawerActions.closeDrawer());
    * this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    */
   render() {
      const { navigation } = this.props
      return (
         <View>
            <Text>欢迎来到page6</Text>
            <Button title="page6" onPress={() => {
               navigation.navigate('page7')
            }} />
            <Button title="openDrawer " onPress={() => {
               navigation.dispatch(DrawerActions.openDrawer())
            }} />
         </View>
      )
   }

}