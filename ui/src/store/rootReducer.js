import {combineReducers} from 'redux';
import datasetReducer from './datasetsStore/datasetReducer';
import authReducer from './authStore/authReducer';
import searchReducer from './searchStore/searchReducer';
import notificationReducer from './notificationStore/notificationReducer';
import userReducer from './userStore/userReducer';

const rootReducer = combineReducers({
    datasets: datasetReducer,
    auth: authReducer,
    search: searchReducer,
    notifications: notificationReducer,
    user: userReducer
});

export default rootReducer;