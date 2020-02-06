import axios from 'axios';
import {setAlert} from './alert';

import {
    GET_PROFILE,
    PROFILE_ERROR,
    CLEAR_PROFILE,
    ACCOUNT_DELETED,
    GET_PROFILES
} from './types';


// get current users profile

export const getCurrentProfile = () => async dispatch =>{
    try {
        const res = await axios.get('/profile/me');

        dispatch ({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}

// get all profiles

export const getAllProfiles = () => async dispatch =>{
    dispatch({ type: CLEAR_PROFILE})
    try {
        const res = await axios.get('/profile');

        dispatch ({
            type: GET_PROFILES,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}

// get profile by ID

export const getProfileById = userId => async dispatch =>{
   
    try {
        const res = await axios.get(`/profile/user/${userId}`);

        dispatch ({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}


//create update profile

export const createProfile = (formData, history, edit = false) => async dispatch =>{
    try {
       const config ={
           headers: {
               'Content-Type': 'application/json'
           }
       }

       const res = await axios.post('/profile', formData, config);
        
       dispatch ({
        type: GET_PROFILE,
        payload: res.data
    });

    dispatch(setAlert(edit ? 'Profile updated' : 'Profile created', 'success' ));

    if(!edit){
        history.push('/dashboard')
    }

    } catch (err) {
        const errors = err.response.data.errors;
  
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}

// delete account and profile
export const deleteAccount = () => async dispatch =>{
    if(window.confirm('are you sure? this can not be undone')){
        try {
            await axios.delete('/profile');
            dispatch({ type: CLEAR_PROFILE})
            dispatch({type: ACCOUNT_DELETED}) 

            dispatch(setAlert('Your account has been deleted', 'success'))
        } catch (err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: {msg: err.response.statusText, status: err.response.status}
            })
        }
    }
}