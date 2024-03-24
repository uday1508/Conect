import { Alert } from "react-native";
import axios from "axios";
import { url } from "../../../Backend/ip";

export  async function Registration(user){
    try {
        const response = await axios.post(`${url}register`, user);
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
    console.log(url);
    const user = {
        email: email,
        password: password,
      };
    try {
        const response = await axios.post(`${url}login`, user);
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