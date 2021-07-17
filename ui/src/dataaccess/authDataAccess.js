import axios from 'axios';
import {getBearerToken, baseUrl} from './baseDataAccess';
import querystring  from "querystring";

export const authData = () =>{
    let redirectUri = 'https://p2irc-data-dev.usask.ca/welcome';
    let tokenUri = encodeURIComponent(redirectUri);
    let globus_scope = encodeURIComponent('urn:globus:auth:scope:transfer.api.globus.org:all urn:globus:auth:scope:auth.globus.org:view_identities openid email profile urn:globus:auth:scope:auth.globus.org:view_authentications');
    let globus_client_id = 'ff03a375-b217-4cf9-86ff-f36d986b41dc'
    let globus_client_secret = 'RITMNFAYWV7Cr+8D3RFdCobazHhYbXic/dyUd0+SMBw='

    let globus_authorization = btoa(globus_client_id.concat(':').concat(globus_client_secret))

    return{
        redirectUri: redirectUri,
        tokenuri: tokenUri,
        globus_client_id: globus_client_id,
        globus_client_secret: globus_client_secret,
        globus_scope: globus_scope,
        globus_authorization:globus_authorization
    }
}

export const logIn = (credential) => {
    return axios.post(baseUrl+'/api/auth/login', {
        params: {
            email:credential.userMail
        }
    }).then(response => {
        return{
            res: response,
            success: true
        }
    })
    .catch(err => {
        return{
            res: err,
            success: false
        }
    })
}

export const logInGlobus = (payload) => {

    return axios.post('https://auth.globus.org/v2/oauth2/token',
    querystring.stringify({
        grant_type: 'authorization_code',
        code: payload.code,
        redirect_uri: authData().redirectUri
    }),
    {
        headers:{
            Authorization: 'Basic '+authData().globus_authorization,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
    })
     .then(response => {
         return{
             res: response,
             success: true
         }
     })
     .catch(err => {
         return{
             res: err,
             success: false
         }
     })
 }

 export const validateGlobusLogin = (payload) => {
    return axios.post(baseUrl+'/api/auth/globus/login', payload,{
        headers: {
            Authorization: getBearerToken()
        }
    }).then(response => {
        return{
            res: response,
            success: true
        }
    }).catch(error => {
        return{
            res: error,
            success: false
        }
    })
}

export const registerUser = (payload) => {
    return axios.post(baseUrl+'/api/auth/register', 
        {
            user_name : payload.userName,
            email: payload.email,
            name: payload.name,
            organization: payload.organization
        },{
            headers: {
                Authorization: getBearerToken()
            }
        }).then(response => {
            return {
                res: response,
                success: true
            }
        })
        .catch(err => {
            return{
                res: err,
                success: false
            }
        })
}