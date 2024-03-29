import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigator from '../Login/Navigations/Navigator';
import HomeNavigator from '../Home/HomeNavigator';

const Stack = createNativeStackNavigator();

const Masternavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen name="Navigator" component={Navigator}  options={{headerShown:false}}/>
            <Stack.Screen name="HomeNavigator" component={HomeNavigator} options={{headerShown:false}}/>
        </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Masternavigator