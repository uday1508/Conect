import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useLayoutEffect,useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize } from '../../../responsive/dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUserId } from '../redux/userslice';
import jwt_decode from "jwt-decode";
import { getUsers } from '../apicalls';

const Home = () => {
const navigation = useNavigation();
const dispatch = useDispatch();
const [users, setUsers] = useState([]);
const user = useSelector(state => state.userCredits.userId);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <Text>
        <Text style={{ color: 'green',fontSize:responsiveFontSize(4) }}>C</Text>
        <Text style={{ color: 'orange',fontSize:responsiveFontSize(2)}}>O</Text>
        <Text style={{ color: 'blue',fontSize:responsiveFontSize(2) }}>N</Text>
        <Text style={{ color: 'grey' ,fontSize:responsiveFontSize(2)}}>E</Text>
        <Text style={{ color: 'green',fontSize:responsiveFontSize(2) }}>T</Text>
        </Text>
      ),
      headerRight: () => (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Ionicons onPress={() => navigation.navigate("Settings")} name="settings-outline" size={24} color="grey" />
          <MaterialIcons onPress={() => navigation.navigate("Users")} name="people-outline"  size={24}  color="grey"/>
        </View>
      ),
    });
  }, []);

 

  return (
    <View>
      <Text>{user}</Text>
    </View>
  )
}

export default Home