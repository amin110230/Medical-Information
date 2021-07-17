import {getBearerToken, baseUrl, axiosCall, vizsciflowUrl} from './baseDataAccess';
import qs from 'qs';


export const saveRunnable = (workflowName, runnableId) => {
    return axiosCall.get(baseUrl+'/api/runnable/add', {
        params: {
            workflow_name: workflowName,
            runnable_id: runnableId
        },
        headers: {
            Authorization: getBearerToken()
        },
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

export const deleteRunnable = (runnableId) => {
    return axiosCall.get(baseUrl+'/api/runnable/delete', {
        params: {
            runnable_id: runnableId
        },
        headers: {
            Authorization: getBearerToken()
        },
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

export const wfCompletionNotif = (workflowInfo) => {
    return axiosCall.get(baseUrl+'/api/notification/workflow/status', {
        params: {
            workflow_info: workflowInfo
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

export const runWorkflow = (id, args) => {
    let defaultUser = 'mainulhossain@gmail.com';
    let defaultPassword = 'aaa';
    return axiosCall.get(vizsciflowUrl+'/api/run', {
        params: {
            id: id,
            args: args
        },
        auth: {
            username: defaultUser,
            password: defaultPassword
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

export const loadWorkflows = (access) => {
    let defaultUser = 'mainulhossain@gmail.com';
    let defaultPassword = 'aaa';
    
    return axiosCall.get(vizsciflowUrl+'/api/ver2/workflow', {
        params: {
            props: 'id,name,desc',
            access: access
        },
        auth: {
            username: defaultUser,
            password: defaultPassword
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

export const loadWorkflowDetails = (workflowId) => {
    let defaultUser = 'mainulhossain@gmail.com';
    let defaultPassword = 'aaa';
    
    return axiosCall.get(vizsciflowUrl+'/api/ver2/workflow', {
        params: {
            info: workflowId,
            props: 'id,name,desc,script,args'
        },
        auth: {
            username: defaultUser,
            password: defaultPassword
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

export const getRunnableList = () => {
    return axiosCall.get(baseUrl+'/api/runnables/load', {
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

export const getRealDataPath = (dataUrl) => {
    return axiosCall.get(dataUrl, {
        params: {
            get_directory: true
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

export const getWorkflowStatus = (runnableId) => {
    let defaultUser = 'mainulhossain@gmail.com';
    let defaultPassword = 'aaa';
    return axiosCall.get(vizsciflowUrl+'/api/status', {
        params: {
            id: runnableId
        },
        auth: {
            username: defaultUser,
            password: defaultPassword
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

export const getDatasetList = () => {
    return axiosCall.get(baseUrl+'/api/datasets', {
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

export const getDataList = (datasetId) => {
    return axiosCall.get(baseUrl+`/api/dataset/${datasetId}/data`, {
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