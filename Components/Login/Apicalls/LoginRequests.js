import { Alert } from "react-native";
import axios from "axios";

export  async function Registration(user){
    try {
        const response = await axios.post("http://192.168.93.73:8000/register", user);
        Alert.alert("Registration successful", "You have been registered Successfully");
        return response;
    } catch (error) {
        Alert.alert(
            "Registration Error",
            "An error occurred while registering"
        );
        console.log("registration failed", error, error.message);
        throw error; // Rethrow the error if needed
    }
}

export async function login(email,password){
    const user = {
        email: email,
        password: password,
      };
    try {
        const response = await axios.post("http://192.168.93.73:8000/login", user);
        Alert.alert("Logged In successful", "You have been  Successfully Logged In");
        return response;
    } catch (error) {
        Alert.alert(
            "Login Error",
            "An error occurred while Logging In"
        );
        console.log("Logging In failed", error, error.message);
        throw error; 
    }
}