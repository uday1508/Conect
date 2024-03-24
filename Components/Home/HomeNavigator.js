import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home/Screens/Home';
import Users from './Screens/Users';
import Settings from './Screens/Settings';
const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  
  return (
    <Stack.Navigator screenOptions={{
        gestureEnabled :false,
        gestureDirection: 'horizontal',
        customAnimationOnGesture:true
      }}>
           <Stack.Screen name="Home" component={Home}  options={{headerShown:true}}/>
           <Stack.Screen name="Users" component={Users} options={{headerShown:false}} />
           <Stack.Screen name="Settings" component={Settings} options={{headerShown:false}} />
      </Stack.Navigator>
  )
}

export default HomeNavigator