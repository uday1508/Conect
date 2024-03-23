import {configureStore, combineReducers} from '@reduxjs/toolkit';
import userslice from '../Components/Home/redux/userslice';
const rootreducer = combineReducers({
    userCredits:userslice, 
  });
  
  export const MyStore = configureStore({
    reducer: rootreducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false, 
      }),
  });
  
  export default MyStore;