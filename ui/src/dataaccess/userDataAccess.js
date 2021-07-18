import { axiosCall } from './baseDataAccess';
import { getBearerToken, baseUrl, checkAuthorization } from './baseDataAccess';
import qs from 'qs';

export const getUsersSearchResults = (searchFilters, pageNum, numOfItems) => {
    let isAuthorized = checkAuthorization();
    let route = isAuthorized ? 'search' : 'search/public';
    let params = {
        search_string: searchFilters.searchText,
        year: searchFilters.selectedYears,
        mimetypes: searchFilters.selectedMimetypes,
        type: 'Users',
        pageNum: pageNum,
        numOfItems: numOfItems
    };

    let payLoad = isAuthorized ? {
        params: params,
        headers: {
            Authorization: getBearerToken()
        },
        paramsSerializer: function (params) {
            return qs.stringify(params, { arrayFormat: 'comma' })
        },
    } : {
            params: params,
            paramsSerializer: function (params) {
                return qs.stringify(params, { arrayFormat: 'comma' })
            },
        }
    

    return axiosCall.get(baseUrl+'/api/'+route, payLoad)
    .then(response => {
        return{
            res: response,
            success: true
        }
    }).catch(err => {
        return{
            res: err,
            success: false
        }
    })
}

export const getUserBasicInfo = () => {
    return axiosCall.get(baseUrl+'/api/user', {
        headers: {
            Authorization: getBearerToken()
        }
    })
        .then(response => {
            return {
                res: response,
                success: true
            }
        })
        .catch(err => {
            return {
                res: err,
                success: false
            }
        });
}

export const getDatasets = (pageNum, numOfItems) => {
    let isAuthorized = checkAuthorization();

    let payLoad = isAuthorized ? {
        headers: {
            Authorization: getBearerToken()
        },
        params: {
            pageNum: pageNum,
            numOfItems: numOfItems
        }
    } : {
            params: {
                pageNum: pageNum,
                numOfItems: numOfItems
            }
        }
    
    return axiosCall.get(baseUrl+'/api/user/datasets', payLoad)
    .then(response => {
        return{
            res: response,
            success: true
        }
    }).catch(err => {
        return{
            res: err,
            success: false
        }
    })
}

export const getGroups = (pageNum, numOfItems) => {
    let isAuthorized = checkAuthorization();

    let payLoad = isAuthorized ? {
        headers: {
            Authorization: getBearerToken()
        },
        params: {
            pageNum: pageNum,
            numOfItems: numOfItems
        }
    } : {
            params: {
                pageNum: pageNum,
                numOfItems: numOfItems
            }
        }
    
    return axiosCall.get(baseUrl+'/api/user/groups', payLoad)
    .then(response => {
        return{
            res: response,
            success: true
        }
    }).catch(err => {
        return{
            res: err,
            success: false
        }
    })
}

export const getFollowers = (pageNum, numOfItems) => {
    let isAuthorized = checkAuthorization();

    let payLoad = isAuthorized ? {
        headers: {
            Authorization: getBearerToken()
        },
        params: {
            pageNum: pageNum,
            numOfItems: numOfItems
        }
    } : {
            params: {
                pageNum: pageNum,
                numOfItems: numOfItems
            }
        }
    
    return axiosCall.get(baseUrl+'/api/user/followers', payLoad)
    .then(response => {
        return{
            res: response,
            success: true
        }
    }).catch(err => {
        return{
            res: err,
            success: false
        }
    })
}

export const getFollowing = (pageNum, numOfItems) => {
    let isAuthorized = checkAuthorization();

    let payLoad = isAuthorized ? {
        headers: {
            Authorization: getBearerToken()
        },
        params: {
            pageNum: pageNum,
            numOfItems: numOfItems
        }
    } : {
            params: {
                pageNum: pageNum,
                numOfItems: numOfItems
            }
        }
    
    return axiosCall.get(baseUrl+'/api/user/following', payLoad)
    .then(response => {
        return{
            res: response,
            success: true
        }
    }).catch(err => {
        return{
            res: err,
            success: false
        }
    })
}

export const followUser = (userId, isFollowing) => {
    return axiosCall.get(baseUrl+'/api/user/follow', {
        headers: {
            Authorization: getBearerToken()
        },
        params: {
            user_id: userId,
            isFollowing: isFollowing
        },
        paramsSerializer: function (params){
            return qs.stringify(params, {arrayFormat: 'comma'})
        }
    })
    .then(response => {
        return{
            res: response,
            success: true
        }
    }).catch(err => {
        return{
            res: err,
            success: false
        }
    })
}