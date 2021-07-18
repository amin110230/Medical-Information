import {baseUrl, getBearerToken, checkAuthorization} from './baseDataAccess';
import qs from 'qs';
import { axiosCall } from "./baseDataAccess";



export const getParentGroups = (type) => {
    return axiosCall.get(baseUrl+'/api/group/parent', {
        params: {
            type: type
        },
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

export const saveGroup = (groupData) => {
    return axiosCall.post(baseUrl+'/api/groups',
        {
            create: groupData
        },
        {
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

export const saveDataTemplate = (data_template) => {
    return axiosCall.post(baseUrl+'/api/groups', data_template,
        {
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

export const loadGroups = (pageNum, numOfItems)=> {
    let isAuthorized = checkAuthorization();
    let route = isAuthorized? 'groups' : 'groups/public';
    let payload = isAuthorized 
        ?   {
                headers: {
                    Authorization: getBearerToken()
                },
                params: {
                    pageNum: pageNum,
                    numOfItems: numOfItems
                }
            } 
        :   {
                params: {
                    pageNum: pageNum,
                    numOfItems: numOfItems
                }
            }

    return axiosCall.get(baseUrl+'/api/' + route, payload)
    .then(response => {
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

export const validateMetadataName = (groupId, metadataName) => {
    return axiosCall.get(baseUrl+'/api/group/metadata/validation', {
        params: {
            group_id: groupId,
            metadata_name: metadataName
        },
        headers: {
            Authorization: getBearerToken()
        },
        paramsSerializer: function (params) {
            return qs.stringify(params, { arrayFormat: 'comma' })
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

export const validateGroupName = (groupName) => {
    return axiosCall.get(baseUrl+'/api/group/validation', {
        params: {
            group_name: groupName
        },
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

export const getGroupHeader = (groupId) => {
    return axiosCall.get(baseUrl+`/api/group/${groupId}`, {
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

export const getGroupDetails = (isUserGroup, groupId) => {
    return axiosCall.get(baseUrl+'/api/groups', {
        params: {
            group_id: groupId,
            is_user_group: isUserGroup
        },
        headers: {
            Authorization: getBearerToken()
        }
    })
    .then(response => {
        return{
            res: response,
            success: true
        }
    })
    .catch(response => {
        return{
            res: response,
            success: false
        }
    })
}

export const getDatasetSearchResults = (searchFilters, pageNum, numOfItems) => {

    let isAuthorized = checkAuthorization();
    let route = isAuthorized ? 'search' : 'search/public';
    let params = {
        search_string: searchFilters.searchText,
        year: searchFilters.selectedYears,
        mimetypes: searchFilters.selectedMimetypes,
        type: 'Datasets',
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

export const getGroupsSearchResults = (searchText, pageNum, numOfItems) => {
    let isAuthorized = checkAuthorization();
    let route = isAuthorized? 'search' : 'search/public'

    let payload = isAuthorized ? {
        params: {
            search_string: searchText,
            type: 'Groups',
            pageNum: pageNum,
            numOfItems: numOfItems
        },
        headers: {
            Authorization: getBearerToken()
        }
    } : {
            params: {
                search_string: searchText,
                type: 'Groups',
                pageNum: pageNum,
                numOfItems: numOfItems
            }
        }


    return axiosCall.get(baseUrl+'/api/'+ route, payload)
        .then(response => {
            return {
                res: response,
                success: true
            }
        }).catch(err => {
            return {
                res: err,
                success: false
            }
        })
}

export const loadUsers = (groupId) => {
    return axiosCall.get(baseUrl+'/api/group/users', {
        params: {
            group_id: groupId
        },
        headers: {
            Authorization: getBearerToken()
        }
    }).then(response => {
        return {
            res: response,
            success: true
        }
    }).catch(error => {
        return {
            res: error,
            success: false
        }
    })
}

export const getMemberPermission = (groupId, userId) => {
    return axiosCall.get(baseUrl+`/api/group/${groupId}/member/${userId}/permissions`, {
        headers: {
            Authorization: getBearerToken()
        }
    })
    .then(response => {
        return{
            res: response,
            success: true
        }
    })
    .catch(response => {
        return{
            res: response,
            success: false
        }
    })
}

export const sendInvitation = (userId, groupId) => {
    return axiosCall.post(baseUrl+'/api/group/invite/member', {
        user_id: userId,
        group_id: groupId
    },{
        headers: {
            Authorization: getBearerToken()
        }
    }).then(response => {
        return {
            res: response,
            success: true
        }
    }).catch(error => {
        return {
            res: error,
            success: false
        }
    })
}

export const joinGroupRequest = (groupId) => {
    return axiosCall.get(baseUrl+'/api/group/join', {
        params: {
            group_id: groupId
        },
        headers: {
            Authorization: getBearerToken()
        }
    }).then(response => {
        return {
            res: response,
            success: true
        }
    }).catch(error => {
        return {
            res: error,
            success: false
        }
    })
}

export const leaveGroup = (groupId) => {
    return axiosCall.post(baseUrl+`/api/group/${groupId}/leave`,null,{
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
    .catch(error => {
        return{
            res: error,
            success: false
        }
    })
} 

export const removeMember = (groupId, memberId) => {
    return axiosCall.get(baseUrl+`/api/group/${groupId}/member/${memberId}/remove`,{
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
    .catch(error => {
        return{
            res: error,
            success: false
        }
    })
} 

export const editGroupTitle = (groupId, formData) => {
    return axiosCall.post(baseUrl+`/api/group/${groupId}/edit/title`, formData, {
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

export const editGroupPermission = (groupId, formData) => {
    return axiosCall.post(baseUrl+`/api/group/${groupId}/edit/permissions`, formData, {
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

export const editGroupProperties = (groupId, formData) => {
    return axiosCall.post(baseUrl+`/api/group/${groupId}/edit/properties`, formData, {
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

export const editGroupMemberPermission = (groupId, userId, formData) => {
    return axiosCall.post(baseUrl+`/api/group/${groupId}/member/${userId}/edit/permissions`, formData, {
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