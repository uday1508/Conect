import { createSlice } from "@reduxjs/toolkit";

const TotalUsers = createSlice({
    name:'Users',
    initialState:{
        users:[],
    },
    reducers:{
        setUsers(state,action){
            state.users = action.payload;
        },
    },
})

export const {setUsers} = TotalUsers.actions;
export default TotalUsers.reducer;