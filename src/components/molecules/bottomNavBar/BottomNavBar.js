import React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../../../screens/WelcomeScreen"

const Tabs = createBottomTabNavigator();

const BottomNavBar = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={Home} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default BottomNavBar
