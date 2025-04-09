import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteScreen from '../Favorite/FavoriteScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import Profile from '../Profile/Profile';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function TabNavigation () {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
    }}>
    <Tab.Screen name="Home"
     component={HomeScreen} 
     options={{
            tabBarLable:'Search',
            tabBarIcon:({color ,size})=>(
                <FontAwesome name="search" size={24} color="black" />
            ),
        }}
    />
    <Tab.Screen name="Favorite"
     component={FavoriteScreen}
      options={{
        tabBarIcon:({color , size})=>(
            <MaterialIcons name="favorite" size={24} color="black" />
        ),
      }}

     />
    <Tab.Screen name="Profile" component={Profile} 
        options={{
            tabBarIcon:({color , size }) => (
                <FontAwesome name="user" size={24} color="black" />
            )
        }}
    />
  </Tab.Navigator>
  );
  }