import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import bikesReducer from './bikes/bikesSlice';
import userReducer from './users/userSlice';

export default configureStore({
  reducer: {
    bikes: bikesReducer,
    user: userReducer,
  },
  middleware: [thunk, logger],
});
