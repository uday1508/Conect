import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

// Navigation.navigate("Navigator",{screen:'Register'})
const Settings = () => {
    const Navigation = useNavigation();

  return (
    <View>
        <Pressable style={{height:40,width:40,backgroundColor:'red'}} onPress={async ()=>{
            await AsyncStorage.removeItem('authToken')
            Navigation.navigate("Navigator",{screen:'Register'})
            }}>

        </Pressable>
      <Text>Settings</Text>
    </View>
  )
}

export default Settings