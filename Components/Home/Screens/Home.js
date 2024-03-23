import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize } from '../../../responsive/dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

const Home = () => {
const navigation = useNavigation();
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
          <Ionicons  name="chatbox-ellipses-outline" size={24} color="grey" />
          <MaterialIcons
            // onPress={() => navigation.navigate("Friends")}
            name="people-outline"
            size={24}
            color="grey"
          />
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