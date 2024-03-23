import { createSlice } from "@reduxjs/toolkit";

const userCredits = createSlice({
    name:'userCredits',
    initialState:{
        userId: "UDAY",
    },
    reducers:{
        setUserId(state,action){
            state.userId = action.payload;
        },
    },
})

export const {setUserId} = userCredits.actions;
export default userCredits.reducer;