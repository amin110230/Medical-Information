import * as authActionTypes from './authActionTypes';

const initialState = {
    isAuthenticated : false,
    isCASLogin: false,
    isGlobusLogin: false,
    isGuestLogin: false,
    accessToken: null,
    userName: null,
    isLoading: false,
    error: null,
    isNewUser: false,
    globusAuthToken: null,
    globusTransferToken: null,
    name: '',
    email: '',
    organization: ''
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case authActionTypes.CAS_LOGIN:
            return {
                ...state,
                isCASLogin: true
            }

        case authActionTypes.LOGIN_STATUS:
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated,
                accessToken: action.payload.accessToken,
                userName: action.payload.userName,
                isNewUser: action.payload.isNewUser
            }

        case authActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case authActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                accessToken: action.payload.accessToken,
                userName: action.payload.userName,
                isLoading: false,
                isNewUser: action.payload.isNewUser
            }

        case authActionTypes.LOGIN_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
                isCASLogin: false
            }

        case authActionTypes.GUEST_LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                isGuestLogin: true,
                accessToken: null,
                userName: action.payload.userName,
                isLoading: false
            }
        case authActionTypes.LOG_OUT:
            return {
                ...state,
                isAuthenticated: false,
                isGuestLogin: false,
                accessToken: null,
                userName: null,
                isLoading: false
            }

        case authActionTypes.REGISTRATION_REQUIRED:
            return {
                ...state,
                isNewUser: true
            }

        case authActionTypes.REGISTRATION_COMPLETED:
            return {
                ...state,
                isNewUser: false,
                userName: action.payload.userName
            }

        case authActionTypes.REGISTRATION_FAILED:
            return {
                ...state,
                isNewUser: true,
                error: action.payload.error
            }
        case authActionTypes.GLOBUS_LOGIN:
            return {
                ...state,
                isGlobusLogin: true,
                globusAuthToken: action.payload.globusAuthToken,
                globusTransferToken: action.payload.globusTransferToken,
                name: action.payload.name,
                email: action.payload.email,
                organization: action.payload.organization
            }

        case authActionTypes.SET_NAME:
            return {
                ...state,
                name: action.payload.name
            }

        case authActionTypes.SET_EMAIL:
            return {
                ...state,
                email: action.payload.email
            }

        case authActionTypes.SET_ORGANIZATION:
            return {
                ...state,
                organization: action.payload.organization
            }
        default:
            return state;
    }
}

export default authReducer;