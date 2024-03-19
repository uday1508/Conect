import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Register from '../Screens/Register';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      gestureEnabled :false,
      gestureDirection: 'horizontal',
      customAnimationOnGesture:true
    }}>
         <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
         <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

export default Navigator