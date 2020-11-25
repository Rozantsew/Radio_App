import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import Home from "../../../screens/WelcomeScreen"
import Radio from "../../../screens/RadioScreen"
import Contact from "../../../screens/ContactScreen"
import {fontSize} from "styled-system";

const Tab = createMaterialBottomTabNavigator();
const size = 18;

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#ffffff"
        inactiveColor="#d6d6d6"
        textLabelsize = "18"
        fontSize="18"
        barStyle={{ backgroundColor: '#060A2F', fontSize: '16', }}
      >
      <Tab.Screen
        name="Home"
        component={Home}
        size={18}

      />
      <Tab.Screen
        name="Radio"
        component={Radio}
        size={18}
        options={{
          tabBarLabel: 'Radio',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="radio" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs
