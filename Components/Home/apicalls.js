import axios from "axios";
import { url } from "../../Backend/ip";

export async function getUsers(userid){

    console.log(`${url}users/${userid}`)

   const data =  await axios
    .get(`${url}users/${userid}`)
    .then((response) => {
     return response.data;
    })
    .catch((error) => {
      console.log("error retrieving users", error);
    });

    return data;
};
    
