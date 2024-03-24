import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { responsiveHeight, responsiveScreenHeight, responsiveWidth } from '../../../responsive/dimensions';
import LottieView from 'lottie-react-native';
import axios from 'axios';
import User from '../../../Backend/Api/Models/user';
import { Registration } from '../Apicalls/LoginRequests';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'react-native-image-picker';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [occupation, setOccupation] = useState('');
  const navigation = useNavigation();
  const [base,setBase] = useState("");
  const openImageLibrary = () => {
    setImage(null)
    ImagePicker.launchImageLibrary({mediaType: 'photo', includeBase64: true}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        //console.log(response.assets[0].base64)
        setImage(response.assets[0].uri);
        setBase(response.assets[0].base64)
      }
    });
  };

  const handleRegister = async () => {

    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }
    
    const user = { name: name, email: email, password: password, image:base};
     const res = await  Registration(user);
     console.log(res);
     if(res.status == "200" || res.status == 200){
      navigation.replace("Login");
           setEmail("");
           setName("");
           setPassword("");
           setOccupation("");
     }else{
           console.log("error occured in If");
     }
    
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
          <Pressable onPress={openImageLibrary} style={[styles.rotate, { position: 'absolute', top: responsiveScreenHeight(-7),left:responsiveWidth(-10),justifyContent:'center'}]}> 
              {image && <Text style={{transform:[{ rotate: '314.2deg'}],position:'absolute',left:responsiveWidth(2),fontSize:28,top:responsiveHeight(10),color:'white'}}>Click to Change PIC</Text>}
         </Pressable>
         <Pressable onPress={openImageLibrary} style={{height:responsiveHeight(15),width:responsiveWidth(30),borderRadius:responsiveWidth(15),zIndex:1,justifyContent:'center',alignContent:'center',alignItems:'center',position:'absolute',top:responsiveHeight(15)}}>
       {!image && <LottieView source={require('../../../lottie/profileimage')} autoPlay loop style={{width:responsiveWidth(40),height:responsiveHeight(20)}}/>}
        </Pressable>
      

      <View style={[styles.rrotate, {  elevation: 5,position: 'absolute',top: responsiveHeight(7),backgroundColor:"orange",transform:[{ rotate: '0deg' }]}]}>
      {image && <Image source={{uri:image}} style={[StyleSheet.absoluteFillObject,styles.rrotate]}/>}
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none"/>
        <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} autoCapitalize="words"/>
        <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry/>
       
       
        <Pressable style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Register</Text>
        </Pressable>
      </View>


      <Pressable style={[styles.rotate, {transform:[{ rotate: '0deg' }],position:'absolute',width:responsiveScreenHeight(50) ,top: responsiveScreenHeight(81),left:responsiveWidth(-10),borderRadius:responsiveWidth(40),backgroundColor:'green'}]} onPress={()=>{console.log('hello')}}>
                  <Text style={{top:responsiveHeight(3),left:responsiveWidth(37),color:'white'}}>Having Account?</Text>
               <Pressable onPress={()=>{navigation.navigate('Login')}}>
               <Text style={{top:responsiveHeight(0.62),left:responsiveWidth(67),color:'orange'}}>Login</Text>
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
  input: {
    height: 40,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Register;