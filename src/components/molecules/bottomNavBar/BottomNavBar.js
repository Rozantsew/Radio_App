import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons"

import Home from "../../../screens/WelcomeScreen"
import Radio from "../../../screens/RadioScreen"
import Contact from "../../../screens/ContactScreen"

import Colors from "../../../assets/Styles/Colors"

const Tabs = createBottomTabNavigator();

const BottomNavBar = () => {
  return (
    <NavigationContainer>
          <Tabs.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = 'home';
                }
                else if (route.name === 'Radio') {
                    return <Feather name='radio' size={26} color={color}/>;
                }
                else if (route.name === 'Contact') {
                  return <MaterialIcons name="person-outline" size={26} color={color} />
                }
                // You can return any component that you like here!
                return <AntDesign name={iconName} size={26} color={color}/>;
              },
            })}


            tabBarOptions={{
                activeTintColor: '#fff',
                inactiveBackgroundColor: '#060A2F',
                  labelStyle: {
                        fontSize: 16,
                        marginTop: 5,
                        padding: 0,
                      },
                  style: {
                    backgroundColor: '#060A2F',
                    border: '0',
                    },
                  tabStyle: {
                    height: 60,
                    paddingVertical: 5,
                  },
                }}
            >
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Radio" component={Radio} />
        <Tabs.Screen name="Contact" component={Contact} />

      </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default BottomNavBar

