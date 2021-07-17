import Axios from "axios";
import { logOut } from "../store/authStore/authActions";

export const baseUrl = process.env.REACT_APP_API_URL;
export const vizsciflowUrl = process.env.REACT_APP_URL_VizSciFlow;


export const getBearerToken = () => {
    let token = localStorage.getItem('access_token');
    return 'Bearer ' + token;
}

export const checkAuthorization = () => {
    let token = localStorage.getItem('access_token');

    return token? true : false;
}

export const axiosCall = Axios.create();

// axiosCall.interceptors.response.use(async (response) => {
//     return response
// }, (error) => {
//     const originalRequest = error.config;
//     if (originalRequest.method == 'options') {
//         return
//     }
//     if (error.response.status === 401 && !originalRequest._retry) {
//         originalRequest._retry = true;
//         // const access_token = await refreshAccessToken();
//         refreshAccessToken()
//             .then(() => {
//                 return axiosCall(originalRequest);
//             })
//             .catch((err) => {
//                 return Promise.reject(err)
//             })
        
//     }
//     return Promise.reject(error);
// });

// const refreshAccessToken = () => {
//     const refreshToken = localStorage.getItem('refresh_token');
//     if (!refreshToken) {
//         logOut();
//         return Promise.reject('Error!');
//     }
//     return axiosCall.post(baseUrl + '/auth/refresh', {
//         'grant_type' : 'refresh_token',
//         'refresh_token' : refreshToken
//     },
//         {
//             headers: {
//                 'Authorization': getBearerToken()
//             }

//         })
//         .then(response => {
//             localStorage.setItem('access_token', response.res.data.access_token);
//             localStorage.setItem('userName', response.res.data.user);
//             localStorage.setItem('loginStatus', true);
//         })
//         .catch(error => {
//             Promise.reject(error);
//         });
// }
