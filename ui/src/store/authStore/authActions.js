import * as authActionTypes from './authActionTypes';
import * as authDataAccess from '../../dataaccess/authDataAccess';


//Actions

export const actionGetLoginStatus = (payload) => {
    return {
        type: authActionTypes.LOGIN_STATUS,
        payload: payload
    }
} 

export const actionLogInRequest  = () => {
    return {
        type: authActionTypes.LOGIN_REQUEST
    }
}

export const actionLogInSuccess = (payload) => {
    return {
        type: authActionTypes.LOGIN_SUCCESS,
        payload: payload
    }
}

export const actionLogInFailed  = (payload) => {
    return {
        type: authActionTypes.LOGIN_FAILED,
        payload: payload
    }
}

export const actionRegistrationRequired = () => {
    return {
        type: authActionTypes.REGISTRATION_REQUIRED
    }
}

export const actionLogOut = () => {
    return {
        type : authActionTypes.LOG_OUT
    }
}

export const actionRegistrationCompleted = (payload) => {
    return {
        type: authActionTypes.REGISTRATION_COMPLETED,
        payload: payload
    }
}

export const actionLoginGlobus = (payload) => {
    return {
        type: authActionTypes.GLOBUS_LOGIN,
        payload: payload
    }
}

export const actionRegistrationFailed = (payload) => {
    return {
        type: authActionTypes.REGISTRATION_FAILED,
        payload: payload
    }
}

const actionSetName = (payload) => {
    return {
        type: authActionTypes.SET_NAME,
        payload: payload
    }
}

const actionSetEmail = (payload) => {
    return {
        type: authActionTypes.SET_EMAIL,
        payload:payload
    }
}

const actionSetOrganization = (payload) => {
    return {
        type: authActionTypes.SET_ORGANIZATION,
        payload: payload
    }
}

// Action Creators

export const getLoginStatus = () => {
    return (dispatch) => {
        let loginStatus = JSON.parse(localStorage.getItem('loginStatus'));
        let payload = {
            isAuthenticated: false,
        }

        if (loginStatus) {
            payload = {
                ...payload,
                isAuthenticated: true,
                accessToken: localStorage.getItem('access_token'),
                userName: localStorage.getItem('userName'),
                isNewUser: JSON.parse(localStorage.getItem('isNewUser'))
            }
            dispatch(actionGetLoginStatus(payload));
            return;
        }
        
        dispatch(actionGetLoginStatus(payload));
    } 
}

export const logIn = (credential) => {
    return (dispatch) => {
        dispatch(actionLogInRequest());
        authDataAccess.logIn(credential)
        .then(response =>{
            if (response.success) {
                localStorage.setItem('access_token', response.res.data.access_token);
                localStorage.setItem('userName', response.res.data.user);
                localStorage.setItem('loginStatus', true);
                localStorage.setItem('isNewUser', false);
                localStorage.setItem('refresh_token', response.res.data.refresh_token);

                dispatch(actionLogInSuccess({ userName: response.res.data.user, isAuthenticated: true, accessToken: response.res.data.access_token, isNewUser: response.res.data.isNewUser }));
            } else {
                dispatch(actionLogInFailed({error: response.res, isAuthenticated: false}))
            }
        }) 
    }
}

export const logInGlobus = (payload) => {
    return (dispatch) =>  {
        dispatch(actionLogInRequest());

        authDataAccess.logInGlobus(payload)
        .then(response => {
            if (response.success) {

                authDataAccess.validateGlobusLogin(response.res)
                .then(resp => {
                    if (resp.success) {
                        localStorage.setItem('access_token', resp.res.data.access_token);
                        localStorage.setItem('userName', resp.res.data.user);
                        localStorage.setItem('loginStatus', true);
                        localStorage.setItem('globus_auth_token', resp.res.data.globus_auth_token);
                        localStorage.setItem('globus_transfer_token', resp.res.data.globus_transfer_token);
                        localStorage.setItem('isNewUser', resp.res.data.isNewUser);
                        localStorage.setItem('refresh_token', response.res.data.refresh_token);

                        let authData = {
                            userName: resp.res.data.user,
                            isAuthenticated: true,
                            accessToken: resp.res.data.access_token,
                            isNewUser: resp.res.data.isNewUser
                        }

                        let additionalGlobusData = { 
                            globusAuthToken: resp.res.data.globus_auth_token, 
                            globusTransferToken: resp.res.data.globus_transfer_token, 
                            name: resp.res.data.name,
                            email: resp.res.data.email,
                            organization: resp.res.data.organization
                        }

                        dispatch(actionLogInSuccess(authData));
                        dispatch(actionLoginGlobus(additionalGlobusData));
                    } else {
                        dispatch(actionLogInFailed({error: resp.res, isAuthenticated: false}));
                    }
                }); 
            } else {
                dispatch(actionLogInFailed({error: response.res, isAuthenticated: false}));
            }
        })
    }
}

export const logOut = () => {
    return(dispatch) => {
        localStorage.clear()
        dispatch(actionLogOut());
    }
}

export const registerUser = (payload) => {
    return (dispatch) => {
        authDataAccess.registerUser(payload)
        .then(response => {
            if (response.success) {
                dispatch(actionRegistrationCompleted({userName: response.res.data.user}));
            } else {
                dispatch(actionRegistrationFailed({error: response.res}));
                dispatch(actionRegistrationRequired());
            }
        })
        .catch(error => {
            dispatch(actionRegistrationFailed({error: error}));
        })
    }
}

export const setName = (payload) => {
    return (dispatch) => {
        dispatch(actionSetName({name:payload}))
    }
}

export const setEmail = (payload) => {
    return (dispatch) => {
        dispatch(actionSetEmail({email: payload}));
    }
}

export const setOrganization = (payload) => {
    return (dispatch) => {
        dispatch(actionSetOrganization({organization: payload}));
    }
}