import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home/Screens/Home';
const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  
  return (
    <Stack.Navigator screenOptions={{
        gestureEnabled :false,
        gestureDirection: 'horizontal',
        customAnimationOnGesture:true
      }}>
           <Stack.Screen name="Home" component={Home}  options={{headerShown:true}}/>
           {/* <Stack.Screen name="Test" component={Test} options={{headerShown:false}} /> */}
      </Stack.Navigator>
  )
}

export default HomeNavigator