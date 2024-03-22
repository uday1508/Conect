import { View, Text, StyleSheet ,ActivityIndicator} from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { responsiveHeight, responsiveWidth } from '../../responsive/dimensions'

const Home = () => {
  return (
   
       <View style={[styles.container, styles.horizontal]}>
           <ActivityIndicator size="large" color={'green'}/>
           <ActivityIndicator size="large" color="yellow" />
           <ActivityIndicator size="large" color="orange" />
         </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Home