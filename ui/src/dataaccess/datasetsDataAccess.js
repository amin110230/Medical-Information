import { axiosCall } from "./baseDataAccess";
import {getBearerToken, checkAuthorization, baseUrl} from './baseDataAccess';
import qs from 'qs';

export const getDatasets = (pageNum, numOfItems) => {
    let isAuthorized = checkAuthorization();
    let route = isAuthorized ? 'datasets' : 'datasets/public';

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
    
    return axiosCall.get(baseUrl+'/api/' + route, payLoad)
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

export const getGroups = () => {
    return axiosCall.get(baseUrl+'/api/group/parent', {
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

export const validateDatasetName = (datasetName) => {
    return axiosCall.get(baseUrl+'/api/dataset/validation', {
        params: {
            dataset_name: datasetName
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

export const validateMetadataName = (datasetId, metadataName) => {
    return axiosCall.get(baseUrl+'/api/dataset/metadata/validation', {
        params: {
            dataset_id: datasetId,
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

export const getDataTemplates = (group_id) => {
    return axiosCall.get(baseUrl+'/api/dataset/add', {
        params: {
            group_id: group_id
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

export const getVersions = (dataset_id) => {
    return axiosCall.get(baseUrl+'/api/dataset/add', {
        params: {
            dataset_id: dataset_id
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

export const uploadMetadataFile = (data) => {
    return axiosCall.post(baseUrl+'/api/datasets', data,{
        headers: {
            Authorization: getBearerToken()
        }
    }).then(response => {
        return{
            res: response,
            success: true
        }
    })
    .catch(err => {
        return {
            res: err,
            success: false
        }
    })
}

export const registerDataset = (data) => {
    return axiosCall.get(baseUrl+'/api/datasets', {
        headers: {
            Authorization: getBearerToken()
        },
        params: data
    })
    .then(response => {
        return{
            res: response,
            success: true
        }
    })
    .catch(err => {
        return {
            res: err,
            success: false
        }
    })
}

export const getAFile = (filePath) => {
    return axiosCall.get(baseUrl+filePath, {
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

export const getDatasetHeader = (datasetId) => {
    return axiosCall.get(baseUrl+`/api/dataset/${datasetId}`, {
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

export const getDatasetDetails = (datasetId) => {
    let isAuthorized = checkAuthorization();
    let route = isAuthorized ? '/api/datasets' : `/api/datasets/${datasetId}/public`;
    let payload = isAuthorized ? {
        params: {
            dataset_id: datasetId
        },
        headers: {
            Authorization: getBearerToken()
        },
        paramsSerializer: function (params) {
            return qs.stringify(params, { arrayFormat: 'comma' })
        },
    } : null

    return axiosCall.get(baseUrl+route, payload)
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

export const getDatasetProperties = (metadataId) => {
    return axiosCall.get(baseUrl+'/api/datasets', {
        params: {
            metadata_id: metadataId
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

export const updateDatasetMetadata = (datasetId, metadataForm) => {
    return axiosCall.post(baseUrl+`/api/dataset/${datasetId}/edit/metadata`, metadataForm,
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

export const getMoreDatasets = ( pageNo, noOfItem) => {
    return axiosCall.get(baseUrl+'/api/dataset/show-more', {
        params: {
            page: pageNo,
            no_of_item: noOfItem
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

export const getMoreData = (datasetId, pageNo, noOfItem) => {
    return axiosCall.get(baseUrl+`/api/dataset/${datasetId}/show-more/data`, {
        params: {
            page: pageNo,
            no_of_item: noOfItem
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

export const fetchDatasetDir = (datasetId) => {
    return axiosCall.get(baseUrl+`/api/dataset/${datasetId}/folder_list`, {
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

export const manipulateDatasetDataItem = (datasetId, formdata, operation) => {
    return axiosCall.post(baseUrl+`/api/datasets/${datasetId}/data/${operation}`, formdata, {
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

export const getDatasetFolderData = (datasetId, parentId, parentUrl, pageNum, numOfItems) => {
    let isAuthorized = checkAuthorization();

    let payLoad = isAuthorized ? {
        headers: {
            Authorization: getBearerToken()
        },
        params: {
            parent_id: parentId,
            parent_url: parentUrl,
            pageNum: pageNum,
            numOfItems: numOfItems
        }
    } : {
            params: {
                parent_id: parentId,
                parent_url: parentUrl,
                pageNum: pageNum,
                numOfItems: numOfItems
            }
        }
    
    return axiosCall.get(baseUrl+`/api/dataset/${datasetId}/data`, payLoad)
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

export const getMoreMetadata = (datasetId, pageNo, noOfItem) => {
    return axiosCall.get(baseUrl+`/api/dataset/${datasetId}/show-more/metadata`, {
        params: {
            page: pageNo,
            no_of_item: noOfItem
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


export const downloadDataTemplate = (dataTemplateId, dataTemplateFormat) => {
    return axiosCall.get(baseUrl+'/api/datasets', {
        params:{
            data_template_id: dataTemplateId,
            data_template_format: dataTemplateFormat
        },
        headers: {
            Authorization:getBearerToken()
        }
    }).then(response => {
        return{
            res : response,
            success: true
        }
    }).catch(err => {
        return{
            res: err,
            success: false
        }
    })
}

export const downloadDataset = (datasetId) => {
    return axiosCall.get(baseUrl+`/api/download/${datasetId}`, {
        headers: {
            Authorization:getBearerToken()
        }
    }).then(response => {
        return{
            res : response,
            success: true
        }
    }).catch(err => {
        return{
            res: err,
            success: false
        }
    })
}

export const createDataset = (data) => {
    return axiosCall.post(baseUrl+'/api/datasets',data,
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

export const folderPathList = (pathlist) => {
    return axiosCall.post(baseUrl+'/api/v2/datasets', pathlist, {
        headers: {
            Authorization: getBearerToken(),
            'Content-Type': 'multipart/form-data'
        }
    } ).then(response => {
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

export const uploadData =  (data) => {
    return axiosCall.post(baseUrl+'/api/datasets', data, {
        headers: {
            Authorization: getBearerToken(),
            'Content-Type': 'multipart/form-data'
        }
    } ).then(response => {
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

export const syncDataset = (datasetId) => {
    return axiosCall.post(baseUrl+'/api/dataset/sync', {
        id: datasetId
    }, {
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
    .catch(error => {
        return {
            res: error,
            success: false
        }
    })    
}

export const publishDataset = (datasetId) => {
    return axiosCall.post(baseUrl+'/api/dataset/publish', {
        id: datasetId
    }, {
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
    .catch(error => {
        return {
            res: error,
            success: false
        }
    })    
}

export const handleLike = (datasetId, isLiked) => {
    return axiosCall.get(baseUrl+'/api/datasets', {
        params: {
            dataset_id: datasetId,
            like: isLiked
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

export const loadShareableGroups = (dataset_id) => {
    return axiosCall.get(baseUrl+'/api/dataset/share', {
        params: {
            dataset_id,
            load_type : 'groups'
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
        return{
            res: error,
            success: false
        }
    })
}

export const loadShareableUsers = (dataset_id) => {
    return axiosCall.get(baseUrl+'/api/dataset/share', {
        params: {
            dataset_id,
            load_type : 'users' 
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
        return{
            res: error,
            success: false
        }
    })
}

export const unshareDatasetWithUser = (user_id, dataset_id) => {
    return axiosCall.get(baseUrl+'/api/dataset/unshare/user', {
        params: {
            user_id,
            dataset_id
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
        return{
            res: error,
            success: false
        }
    })
}

export const shareDatasetWithUser = (user_id, dataset_id) => {
    return axiosCall.post(baseUrl+'/api/dataset/share/user', {
        user_id: user_id,
        dataset_id: dataset_id
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
        return{
            res: error,
            success: false
        }
    })
}

export const unshareDatasetWithGroup = (group_id, dataset_id) => {
    return axiosCall.get(baseUrl+'/api/dataset/unshare/group', {
        params: {
            group_id,
            dataset_id
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
        return{
            res: error,
            success: false
        }
    })
}

export const shareDatasetWithGroup = (group_id, dataset_id) => {
    return axiosCall.post(baseUrl+'/api/dataset/share/group', {
        group_id: group_id,
        dataset_id: dataset_id
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
        return{
            res: error,
            success: false
        }
    })
}

export const getDatasetIdNamePairs = () => {
    return axiosCall.get(baseUrl + '/api/v2/datasets', {
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
    })
}

export const getDatasetVersions = (dataset_id) => {
    return axiosCall.get(baseUrl+ '/api/dataset/add', {
        params:{ 
            dataset_id
        } ,
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
    .catch(err => {
        return{
            res: err,
            success: false
        }
    })
}

export const editDatasetTitle = (datasetId, formData) => {
    return axiosCall.post(baseUrl+`/api/dataset/${datasetId}/edit/title`, formData, {
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