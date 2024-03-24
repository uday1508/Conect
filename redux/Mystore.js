import {configureStore, combineReducers} from '@reduxjs/toolkit';
import userslice from '../Components/Home/redux/userslice';
import Users from '../Components/Home/redux/Users';
const rootreducer = combineReducers({
    userCredits:userslice, 
    Users:Users
  });
  
  export const MyStore = configureStore({
    reducer: rootreducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false, 
      }),
  });
  
  export default MyStore;