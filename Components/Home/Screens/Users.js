import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import jwt_decode from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUserId } from '../redux/userslice';
import { getUsers } from '../apicalls';
import { setUsers } from '../redux/Users';
const Users = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [users, setUserss] = useState([]);
    const user = useSelector(state => state.userCredits.userId);
    const USERS = useSelector(state => state.Users.users);
    useEffect(()=>{
      console.log(USERS)
        if(USERS.length == 0){
        const fetchUsers = async () => {
            const token = await AsyncStorage.getItem("authToken");
            console.log(token);
            const decodedToken = jwt_decode(token);
            const userId = decodedToken.userId;
            dispatch(setUserId(userId));
            const allUsers = await getUsers(userId);
            dispatch(setUsers(allUsers))
            setUserss(allUsers);
          }
      
          fetchUsers();
        }
    },[])
  return (
    <View>
      <Text>{user}</Text>
    </View>
  )
}

export default Users