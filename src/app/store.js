import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/auth/authReducer' 

export default configureStore({
  reducer: {
    authUser: authReducer, 
  }
});
