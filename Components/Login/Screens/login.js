import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Dimensions, Alert } from 'react-native';
import { responsiveScreenHeight, responsiveWidth,responsiveHeight } from '../../../responsive/dimensions.tsx';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }
  };
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.rotate, { position: 'absolute', top: responsiveScreenHeight(-7),left:responsiveWidth(-10)}]}> 
      </View>
      <View style={[styles.rrotate, { position: 'absolute', top: responsiveHeight(7),backgroundColor:"orange",transform:[{ rotate: '0deg' }]}]}>
      <View style={styles.formContainer}>
        
        <TextInput  style={styles.input}  placeholder="Email"  value={email}  onChangeText={setEmail}  keyboardType="email-address"  autoCapitalize="none"/>
        <TextInput  style={styles.input}  placeholder="Password"  value={password}  onChangeText={setPassword}  secureTextEntry/>
            <Pressable style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </Pressable>
      </View>


      <Pressable style={[styles.rotate, {transform:[{ rotate: '0deg' }],position:'absolute',width:responsiveScreenHeight(50) ,top: responsiveScreenHeight(81),left:responsiveWidth(-10),borderRadius:responsiveWidth(40),backgroundColor:'green'}]} onPress={()=>{console.log('hello')}}>
                  <Text style={{top:responsiveHeight(3),left:responsiveWidth(37),color:'white'}}>new to Conet?</Text>
               <Pressable onPress={()=>{navigation.navigate('Register')}}>
               <Text style={{top:responsiveHeight(0.62),left:responsiveWidth(63),color:'orange'}}>Register</Text>
                </Pressable>  
      </Pressable>
      </View>
      
      <LottieView source={require('../../../lottie/bubble.json')} autoPlay loop style={{position:'absolute',right:responsiveWidth(-18),top:responsiveHeight(-4),width:responsiveWidth(40),height:responsiveHeight(10)}} />
      <LottieView source={require('../../../lottie/bubble.json')} autoPlay loop style={{position:'absolute',right:responsiveWidth(-2),top:responsiveHeight(92),width:responsiveWidth(10),height:responsiveHeight(15)}} />
      <LottieView source={require('../../../lottie/bubble.json')} autoPlay loop style={{position:'absolute',right:responsiveWidth(85),top:responsiveHeight(92),width:responsiveWidth(20),height:responsiveHeight(5)}} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rrotate: {
    alignContent:'center',alignItems:'center',justifyContent:'center',
    height: responsiveScreenHeight(80),
    width: responsiveWidth(95),
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: responsiveWidth(50),
    borderBottomRightRadius:responsiveWidth(50),
    borderTopRightRadius:responsiveWidth(10),
    borderBottomLeftRadius:responsiveWidth(10),
    elevation: 5,
  }
  ,
  rotate: {
    height: responsiveScreenHeight(35),
    width: responsiveWidth(80),
    backgroundColor: 'blue',
    borderRadius: responsiveWidth(50),
    elevation: 5,
    transform:[{ rotate: '45deg' }]
  },
  formContainer: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  input: { height: 40, width: '100%',  backgroundColor: 'rgba(255, 255, 255, 0.6)',  borderRadius: 5,  paddingHorizontal: 10,  marginBottom: 10, },
  loginButton: {backgroundColor: 'green',borderRadius: 5,paddingVertical: 12,paddingHorizontal: 20, alignItems: 'center', marginTop: 10,},
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Login;
