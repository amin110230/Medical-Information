import * as datasetActionTypes  from './datasetActionTypes';
import * as dataAccess from '../../dataaccess/datasetsDataAccess';
import { NotificationManager } from 'react-notifications';

//Actions
const actionGetDatasetsRequest = () => {
    return {
        type: datasetActionTypes.DATASET_GET_DATASETS_REQUEST
    }
}

const actionGetDatasetsSuccess = (payload) => {
    return {
        type: datasetActionTypes.DATASET_GET_DATASETS_SUCCESS,
        payload: payload 
    }
}

const actionGetDatasetFailed = (payload) => {
    return {
        type: datasetActionTypes.DATASET_GET_DATASETS_FAILED,
        payload: payload
    }
}

const actionGetDatasetsSearchResultsSuccess = (payload) => {
    return {
        type: datasetActionTypes.DATASET_GET_DATASETS_SEARCH_RESULTS_SUCCESS,
        payload: payload 
    }
}

const actionCloseDatasetSearchAlert = () => {
    return {
        type: datasetActionTypes.DATASET_CLOSE_DATASET_SEARCH_ALERT_SUCCESS
    }
}

const actionGetDatasetDetailsRequest = () => {
    return {
        type: datasetActionTypes.DATASET_GET_DATASET_DETAILS_REQUEST
    }
}

const actionGetDatasetDetailsSuccess = (payload) => {
    return {
        type: datasetActionTypes.DATASET_GET_DATASET_DETAILS_SUCCESS,
        payload: payload 
    }
}

const actionGetDatasetDetailsFailed = (payload) => {
    return {
        type: datasetActionTypes.DATASET_GET_DATASET_DETAILS_FAILED,
        payload: payload
    }
}

const actionGetDatasetPropertiesRequest = () => {
    return {
        type: datasetActionTypes.DATASET_GET_DATASET_PROPERTIES_REQUEST
    }
}

const actionGetDatasetPropertiesSuccess = (payload) => {
    return {
        type: datasetActionTypes.DATASET_GET_DATASET_PROPERTIES_SUCCESS,
        payload: payload 
    }
}

const actionGetDatasetPropertiesFailed = (payload) => {
    return {
        type: datasetActionTypes.DATASET_GET_DATASET_PROPERTIES_FAILED,
        payload: payload
    }
}

const actionAppendNewData = (payload) => {
    return {
        type: datasetActionTypes.DATASET_APPEND_NEW_DATA_TO_DATASET,
        payload: payload
    }
}

const actionAppendNewLink = (payload) => {
    return {
        type: datasetActionTypes.DATASET_APPEND_NEW_LINK_TO_DATASET,
        payload: payload
    }
}

const actionAppendNewMetadata = (payload) => {
    return {
        type: datasetActionTypes.DATASET_APPEND_NEW_METADATA_TO_DATASET,
        payload: payload
    }
}

const actionSelectADataset = (payload) => {
    return {
        type: datasetActionTypes.DATASET_SELECT_A_DATASET,
        payload: payload
    }
}

const actionUpdateRemainingDataRequest = () => {
    return {
        type: datasetActionTypes.DATASET_GET_MORE_DATA_REQUEST
    }
}

const actionUpdateRemainingDataSuccess = () => {
    return {
        type: datasetActionTypes.DATASET_GET_MORE_DATA_SUCCESS
    }
}

const actionUpdateRemainingDataFailed = (payload) => {
    return {
        type: datasetActionTypes.DATASET_GET_MORE_DATA_FAILED,
        payload: payload
    }
}

const actionShowLessData = (payload) => {
    return {
        type: datasetActionTypes.DATASET_GET_LESS_DATA_SUCCESS,
        payload: payload
    }
}

const actionSyncDataRequest = () => {
    return {
        type: datasetActionTypes.DATASET_SYNC_DATASET_REQUEST
    }
}

const actionSyncDataSuccess = () => {
    return {
        type:datasetActionTypes.DATASET_SYNC_DATASET_SUCCESS
    }
}

const actionSyncDataFailed = (payload) => {
    return {
        type: datasetActionTypes.DATASET_SYNC_DATASET_FAILED,
        payload: payload
    }
}

const actionPublishDatasetRequest = () => {
    return {
        type: datasetActionTypes.DATASET_PUBLISH_DATASET_REQUEST
    }
}

const actionPublishDatasetSuccess = (payload) => {
    return {
        type:datasetActionTypes.DATASET_PUBLISH_DATASET_SUCCESS,
        payload
    }
}

const actionPublishDatasetFailed = (payload) => {
    return {
        type: datasetActionTypes.DATASET_PUBLISH_DATASET_FAILED,
        payload: payload
    }
}

const actionUpdateActiveAccordion = (payload) => {
    return {
        type: datasetActionTypes.DATASET_UPDATE_ACTIVE_ACCORDION,
        payload: payload
    }
}

const actionUpdateCurrentFolder = (payload) => {
    return {
        type: datasetActionTypes.DATASET_UPDATE_CURRENT_FOLDER,
        payload: payload
    }
}

const actionUpdateCurrentFolderRequest = (payload) => {
    return {
        type: datasetActionTypes.DATASET_UPDATE_CURRENT_FOLDER_FILES_REQUEST,
        payload
    }
}

const actionUpdateCurrentFolderSuccess = (payload) => {
    return {
        type: datasetActionTypes.DATASET_UPDATE_CURRENT_FOLDER_FILES_SUCCESS,
        payload: payload
    }
}

const actionUpdateCurrentFolderFailed = (payload) => {
    return {
        type: datasetActionTypes.DATASET_UPDATE_CURRENT_FOLDER_FILES_FAILED,
        payload: payload
    }
}

const actionCopyFilesToClipboard = (payload) => {
    return {
        type: datasetActionTypes.DATASET_DATA_COPY_FILES_TO_CLIPBOARD,
        payload
    }
}

const actionHideAddDatasetModal = () => {
    return {
        type: datasetActionTypes.DATASET_HIDE_ADD_DATASET_MODAL
    }
}

const actionShowAddDatasetModal = () => {
    return {
        type: datasetActionTypes.DATASET_SHOW_ADD_DATASET_MODAL
    }
}

const actionShowRegisterDatasetModal = () => {
    return {
        type: datasetActionTypes.DATASET_SHOW_REGISTER_DATASET_MODAL
    }
}

const actionHideRegisterDatasetModal = () => {
    return {
        type: datasetActionTypes.DATASET_HIDE_REGISTER_DATASET_MODAL
    }
}

const actionShowSubmitMetadataAlert = () => {
    return {
        type: datasetActionTypes.DATASET_SHOW_SUBMIT_METADATA_ALERT_MODAL
    }
}

const actionHideSubmitMetadataAlert = () => {
    return {
        type: datasetActionTypes.DATASET_HIDE_SUBMIT_METADATA_ALERT_MODAL
    }
}

const actionSetMetadataTabChangeFlag = () => {
    return {
        type: datasetActionTypes.DATASET_SET_METADATA_TAB_CHANGE_FLAG
    }
}

const actionResetMetadataTabChangeFlag = () => {
    return {
        type: datasetActionTypes.DATASET_RESET_METADATA_TAB_CHANGE_FLAG
    }
}

const actionRegisterDatasetRequest = () => {
    return {
        type: datasetActionTypes.DATASET_REGISTER_DATASET_REQUEST
    }
}

const actionRegisterDatasetSuccess = (payload) => {
    return {
        type: datasetActionTypes.DATASET_REGISTER_DATASET_SUCCESS,
        payload: payload
    }
}

const actionRegisterDatasetFailed = (payload) => {
    return {
        type: datasetActionTypes.DATASET_REGISTER_DATASET_FAILED,
        payload: payload
    }
}

const actionHandleLikeRequest = ()=> {
    return{
        type: datasetActionTypes.DATASET_HANDLE_LIKE_REQUEST
    }
}

const actionHandleLikeSuccess = (payload) => {
    return{
        type: datasetActionTypes.DATASET_HANDLE_LIKE_SUCCESS,
        payload: payload
    }
}

const actionHandleLikeFailed = () => {
    return{
        type: datasetActionTypes.DATASET_HANDLE_LIKE_FAILED
    }
}

const actionShowShareModal = (payload) => {
    return {
        type: datasetActionTypes.DATASET_SHOW_DATASTSET_SHARE_MODAL,
        payload
    }
}

const actionHideShareModal = () => {
    return {
        type: datasetActionTypes.DATASET_HIDE_DATASET_SHARE_MODAL
    }
}

const actionLoadShareableUserRequest = () => {
    return{
        type: datasetActionTypes.DATASET_LOAD_SHAREABLE_USERS_REQUEST
    }
}

const actionLoadShareableUserSuccess = (payload) => {
    return{
        type: datasetActionTypes.DATASET_LOAD_SHAREABLE_USERS_SUCCESS,
        payload
    }
}

const actionLoadShareableUserFailed = () => {
    return{
        type: datasetActionTypes.DATASET_LOAD_SHAREABLE_USERS_FAILED
    }
}

const actionLoadShareableGroupsRequest = () => {
    return{
        type: datasetActionTypes.DATASET_LOAD_SHAREABLE_GROUP_REQUEST
    }
}

const actionLoadShareableGroupsSuccess = (payload) => {
    return{
        type: datasetActionTypes.DATASET_LOAD_SHAREABLE_GROUP_SUCCESS,
        payload
    }
}

const actionLoadShareableGroupsFailed = () => {
    return{
        type: datasetActionTypes.DATASET_LOAD_SHAREABLE_GROUP_FAILED
    }
}

const actionShareWithUserRequest = () => {
    return {
        type: datasetActionTypes.DATASET_SHARE_WITH_USER_REQUEST
    }
}

const actionShareWithUserSuccess = (payload) => {
    return {
        type: datasetActionTypes.DATASET_SHARE_WITH_USER_SUCCESS,
        payload
    }
}

const actionShareWithUserFailed = () => {
    return {
        type: datasetActionTypes.DATASET_SHARE_WITH_USER_FAILED
    }
}

const actionUnshareWithUserSuccess = (payload) => {
    return {
        type: datasetActionTypes.DATASET_UNSHARE_WITH_USER_SUCCESS,
        payload
    }
}

const actionShareWithGroupRequest = () => {
    return {
        type: datasetActionTypes.DATASET_SHARE_WITH_GROUP_REQUEST
    }
}
const actionShareWithGroupSuccess = (payload) => {
    return {
        type: datasetActionTypes.DATASET_SHARE_WITH_GROUP_SUCCESS,
        payload
    }
}
const actionShareWithGroupFailed = () => {
    return {
        type: datasetActionTypes.DATASET_SHARE_WITH_GROUP_FAILED
    }
}

const actionUnshareWithGroupSuccess = (payload) => {
    return {
        type: datasetActionTypes.DATASET_UNSHARE_WITH_GROUP_SUCCESS,
        payload
    }
}

const actionCloseUploadDrawer = () => {
    return {
        type: datasetActionTypes.DATASET_CLOSE_UPLOAD_DRAWER
    }
}

const actionGetDatasetIdNamePairsRequest = () => {
    return {
        type: datasetActionTypes.DATASET_ID_NAME_PAIRS_REQUEST
    }
}

const actionGetDatasetIdNamePairsSuccess = (payload) => {
    return {
        type: datasetActionTypes.DATASET_ID_NAME_PAIRS_SUCCESS,
        payload
    }
}

const actionGetDatasetIdNamePairsFailed = () => {
    return {
        type: datasetActionTypes.DATASET_ID_NAME_PAIRS_FAILED
    }
}

const actionGetDatasetVersionsRequest = () => {
    return {
        type: datasetActionTypes.DATASET_VERSIONS_REQUEST
    }
}

const actionGetDatasetVersionsSuccess = (payload) => {
    return{
        type: datasetActionTypes.DATASET_VERSIONS_SUCCESS,
        payload
    }
}

const actionGetDatasetVersionsFailed = () => {
    return{
        type: datasetActionTypes.DATASET_VERSIONS_FAILED
    }
}

const actionSetDataUploadStatus = () => {
    return {
        type: datasetActionTypes.DATASET_DATA_UPLOAD_STARTED
    }
}

const actionResetDataUploadStatus = () => {
    return {
        type: datasetActionTypes.DATASET_DATA_UPLOAD_COMPLETED
    }
}

const actionResetSubfolderUrl = () => {
    return {
        type: datasetActionTypes.DATASET_DATA_UPLOAD_SUB_DIR_RESET
    }
}

const actionShowDatasetDetailModal = (payload) => {
    return {
        type: datasetActionTypes.DATASET_SHOW_DATASET_DETAILS_MODAL,
        payload
    }
}

const actionHideDatasetDetailModal = () => {
    return {
        type: datasetActionTypes.DATASET_HIDE_DATASET_DETAILS_MODAL
    }
}

const actionEditDatasetTitleSuccess = (payload) => {
    return {
        type: datasetActionTypes.DATASET_TITLE_EDIT_SUCCESS,
        payload: payload
    }
}

const actionEditDatasetTitleFailed = () => {
    return {
        type: datasetActionTypes.DATASET_TITLE_EDIT_FAILED
    }
}

//Action Creators
export const loadDatasets = (pageNum, numOfItems, initialLoading = false) => {
    return (dispatch) => {
        if (initialLoading) {
            dispatch(actionGetDatasetsRequest());
        }
        dataAccess.getDatasets(pageNum, numOfItems)
        .then(response => {
            if (response.success) {
                dispatch(actionGetDatasetsSuccess(response.res.data));
                dispatch(updateActiveAccordion(null));
                return
            }
            else{
                NotificationManager.error('Failed to load datasets!', 'Error!');
                dispatch(actionGetDatasetFailed(response.res));
            }
        })
    }
}

export const loadDatasetSearchResults = (searchFilters, pageNum, numOfItems, isInitialLoad = false) => {
    return (dispatch) => {
        if (isInitialLoad) {
            dispatch(actionGetDatasetsRequest());
        }
        dataAccess.getDatasetSearchResults(searchFilters, pageNum, numOfItems)
        .then(response => {
            if (response.success) {
                dispatch(actionGetDatasetsSearchResultsSuccess(response.res.data));
                dispatch(updateActiveAccordion(null));
                return
            }
            else{
                NotificationManager.error('Failed to load results!', 'Error!')
                dispatch(actionGetDatasetFailed(response.res));
            }
        })
    }
}

export const closeDatasetSearchAlert = () => {
    return (dispatch) => {
        dispatch(actionCloseDatasetSearchAlert());
    }
}

export const loadDetails = (datasetId) => {
    return (dispatch) => {
        dispatch(actionGetDatasetDetailsRequest());
        dataAccess.getDatasetDetails(datasetId)
        .then(response => {
            if (response.success) {
                if(!response.res.data.msg){
                    const datasetImgFiles = [];
                    let fileData = response.res.data.data["fileMap"]
                    for (var fileName in fileData) {
                        if (fileData.hasOwnProperty(fileName)) {
                            if (fileData[fileName].thumbnailUrl) {
                                datasetImgFiles.push({...fileData[fileName], src: fileData[fileName].url, srcSet:undefined, caption: fileData[fileName].name}); 
                            }
                        }
                    }                
                    response.res.data.datasetImgFiles = datasetImgFiles;
                    dispatch(actionGetDatasetDetailsSuccess(response.res));
                    return;
                }
                dispatch(actionGetDatasetDetailsFailed({msg: response.res.data.msg}));
                return;
            }
            dispatch(actionGetDatasetDetailsFailed());
        })
    }
}

export const loadProperties = (metadataId) => {
    return async (dispatch) => {
        dispatch(actionGetDatasetPropertiesRequest());
        await dataAccess.getDatasetProperties(metadataId)
        .then(response => {
            if (response.success) {
                dispatch(actionGetDatasetPropertiesSuccess({metadataId: metadataId, res: response.res}))
                return
            }
            dispatch(actionGetDatasetPropertiesFailed(response.res))
        })
    }
}

export const appendNewData = (newData) => {
    return (dispatch) => {
        dispatch(actionAppendNewData(newData))
    }
}
export const appendNewLink = (newLink) => {
    return (dispatch) => {
        dispatch(actionAppendNewLink(newLink))
    }
}

export const appendNewMetadata = (newMetadata) => {
    return (dispatch) => {
        dispatch(actionAppendNewMetadata(newMetadata))
    }
}

export const selectADataset = (datasetID) => {
    return (dispatch) => {
        dispatch(actionSelectADataset({selectedDatasetId: datasetID}))
    }
}

export const showMoreData = (datasetId, pageNo, noOfItem) => {
    return (dispatch) => {
        dispatch(actionUpdateRemainingDataRequest());
        dataAccess.getMoreData(datasetId, pageNo, noOfItem)
        .then(response => {
            if (response.success) {
                dispatch(actionUpdateRemainingDataSuccess())
                response.res.data.data.map((aData) => {
                    return dispatch(appendNewData(aData))
                })
                return
            }
            dispatch(actionUpdateRemainingDataFailed(response.res))
        })
    }
}

export const showLessData = (noOfItem) => {
    return (dispatch) => {
        dispatch(actionShowLessData({noOfItemToLess: noOfItem}))
    }
}

export const syncDataset = (datasetId) => {
    return (dispatch) => {
        dispatch(actionSyncDataRequest());
        dataAccess.syncDataset(datasetId)
        .then(response => {
            if (response.success) {
                dispatch(actionSyncDataSuccess());
            } else {
                dispatch(actionSyncDataFailed({error: response.res}))
            }
        })
        .catch(error => {
            dispatch(actionSyncDataFailed({error: error}));
        })
    }
}

export const publishDataset = (datasetId) => {
    return (dispatch) => {
        dispatch(actionPublishDatasetRequest());
        dataAccess.publishDataset(datasetId)
        .then(response => {
            if (response.success) {
                dispatch(actionPublishDatasetSuccess(response.res.data));
            } else {
                dispatch(actionPublishDatasetFailed({error: response.res}))
            }
        })
        .catch(error => {
            dispatch(actionPublishDatasetFailed({error: error}));
        })
    }
}

export const updateCurrentFolderFiles = (pageNum, numOfFolderItems, isInitialLoading = false, folder, expandedDatasetData, selectedDatasetId) => async (dispatch, getState) => {
    expandedDatasetData = {
        ...expandedDatasetData,
        fileMap: {
            ...expandedDatasetData.fileMap,
            [folder.id]: {
                ...folder,
                childrenIds: [...expandedDatasetData.fileMap[folder.id].childrenIds, "empty"]
            }
        }
    }

    if (isInitialLoading) 
        dispatch(actionUpdateCurrentFolderRequest());
    else
        dispatch(actionUpdateCurrentFolderRequest({expandedDatasetData}));

    dataAccess.getDatasetFolderData(selectedDatasetId, folder.id, folder.url, pageNum, numOfFolderItems)
    .then(response => {
        if (response.success) {
            //marge new folder DATA with previous
            let prevChildrenIds = expandedDatasetData.fileMap[folder.id].childrenIds.filter(children => children !== "empty")

            let moreChildrenIds = []
            Object.keys(response.res.data.data).map(fileName => moreChildrenIds.push(fileName))

            expandedDatasetData = {
                ...expandedDatasetData,
                fileMap: {
                    ...expandedDatasetData.fileMap,
                    ...response.res.data.data,
                    [folder.id]: {
                        ...folder,
                        childrenIds: isInitialLoading 
                                    ?   [...moreChildrenIds] 
                                    :   [...new Set([...prevChildrenIds, ...moreChildrenIds])]
                    }
                }
            }
            
            //marge new folder IMAGE with previous
            const datasetImgFiles = [...getState().datasets.datasetImageFiles];
            let fileData = response.res.data.data
            for (var fileName in fileData) {
                if (fileData.hasOwnProperty(fileName)) {
                    if (fileData[fileName].thumbnailUrl) {
                        datasetImgFiles.push({...fileData[fileName], src: fileData[fileName].url, srcSet:undefined, caption: fileData[fileName].name}); 
                    }
                }
            }
            folder = {
                ...folder,
                childrenIds: [...new Set([...prevChildrenIds, ...moreChildrenIds])]
            }
            dispatch(actionUpdateCurrentFolder({folder}));
            return dispatch(actionUpdateCurrentFolderSuccess({expandedDatasetData, datasetImgFiles, response: response.res.data}))
        }
        else{
            expandedDatasetData = {
                ...expandedDatasetData,
                fileMap: {
                    ...expandedDatasetData.fileMap,
                    [folder.id]: {
                        ...folder,
                        childrenIds: [...expandedDatasetData.fileMap[folder.id].childrenIds.filter(children => children !== "empty")]
                    }
                }
            }
            NotificationManager.error("Error", 'Failed to get folder data!');
            return dispatch(actionUpdateCurrentFolderFailed({expandedDatasetData, datasetImgFiles: null, error: "Failed to get folder data!"}))
        }
    })
    .catch(error => {
        expandedDatasetData = {
            ...expandedDatasetData,
            fileMap: {
                ...expandedDatasetData.fileMap,
                [folder.id]: {
                    ...folder,
                    childrenIds: [...expandedDatasetData.fileMap[folder.id].childrenIds.filter(children => children !== "empty")]
                }
            }
        }
        NotificationManager.error("Error", 'Failed to get folder data!');
        return dispatch(actionUpdateCurrentFolderFailed({expandedDatasetData, datasetImgFiles: null, error}))
    })
}

export const copyFilesToClipboard = (files) => {
    return (dispatch) => {
        dispatch(actionCopyFilesToClipboard({files}))
        NotificationManager.success("Success", 'Item Copied to Clipboard!')
    }
}

export const updateCurrentFolder = (folder) => {
    return (dispatch) => {
        dispatch(actionUpdateCurrentFolderRequest())
        dispatch(actionUpdateCurrentFolder({folder}))
    }
}

export const updateActiveAccordion = (datasetId) => {
    return (dispatch) => {
        dispatch(actionUpdateActiveAccordion({datasetId: datasetId}));
    }
}

export const hideAddDatasetModal = () => {
    return (dispatch) => {
        dispatch(actionHideAddDatasetModal());
    }
}

export const showAddDatasetModal = () => {
    return (dispatch) => {
        dispatch(actionShowAddDatasetModal());
    }
}

export const showRegisterDatasetModal = () => {
    return dispatch => {
        dispatch(actionShowRegisterDatasetModal());
    }
}

export const hideRegisterDatasetModal = () => {
    return dispatch => {
        dispatch(actionHideRegisterDatasetModal());
    }
}

export const showSubmitMetadataAlert = () => {
    return (dispatch) => {
        dispatch(actionShowSubmitMetadataAlert());
    }
}

export const hideSubmitMetadataAlert = () => {
    return (dispatch) => {
        dispatch(actionHideSubmitMetadataAlert());
    }
}

export const resetMetadataTabChangeFlag = () => {
    return async (dispatch) => {
        await dispatch(actionResetMetadataTabChangeFlag());
    }
}

export const setMetadataTabChangeFlag = () => {
    return async (dispatch) => {
        await dispatch(actionSetMetadataTabChangeFlag());
    }
}

export const registerDataset = (datasetId) => {
    return dispatch => {
        dispatch(actionRegisterDatasetRequest());
        dataAccess.registerDataset({register: datasetId})
        .then(response => {
            if (response.success && response.res.data.isSuccess) {
                dispatch(actionRegisterDatasetSuccess({datasetId: response.res.data.datasetId}));
                NotificationManager.success('Success!', 'Dataset has been registered');
            }
            else if(response.success && !response.res.data.isSuccess){
                dispatch(actionRegisterDatasetFailed({error: response.res}));
                NotificationManager.error('Error!', 'Dataset Already Registered!');
            }
        })
        .catch(error => {
            dispatch(actionRegisterDatasetFailed({error: error}));
            NotificationManager.error('Error!', 'Failed to register dataset');
        })
    }
}

export const handleLike = (datasetId, isLiked) => {
    return dispatch => {
        dispatch(actionHandleLikeRequest());
        dataAccess.handleLike(datasetId, isLiked)
        .then(response => {
            
            if (response.success) {
                if(response.res.data.liked !== undefined){
                    dispatch(actionHandleLikeSuccess(response.res.data));
                    return    
                }
                else{
                    dispatch(actionHandleLikeFailed());
                    NotificationManager.error('Error', response.res.data.msg);
                    return
                }
            }
            dispatch(actionHandleLikeFailed());
            NotificationManager.error('Error', 'Try again please');
        })
    }
}


export const showShareModal = (dataset, datasetType) => {
    return (dispatch) => {
        dispatch(actionShowShareModal({dataset, datasetType}));
    }
}

export const hideShareModal = () => {
    return (dispatch) => {
        dispatch(actionHideShareModal());
    }
}

export const loadShareableGroups = (datasetId) => {
    return (dispatch) => {
        dispatch(actionLoadShareableGroupsRequest());
        dataAccess.loadShareableGroups(datasetId)
            .then(response => {
                if (response.success) {
                    return dispatch(actionLoadShareableGroupsSuccess(response.res.data));
                }
                dispatch(actionLoadShareableGroupsFailed());
                NotificationManager.error('Failed to load shareable groups!', 'Error!');
            })
    }
}

export const loadShareableUsers = (datasetId) => {
    return (dispatch) => {
        dispatch(actionLoadShareableUserRequest());
        dataAccess.loadShareableUsers(datasetId)
            .then(response => {
                if (response.success) {
                    return dispatch(actionLoadShareableUserSuccess(response.res.data));
                }
                dispatch(actionLoadShareableUserFailed());
                NotificationManager.error('Failed to load shareable users!', 'Error!');
            })
    }
}

export const unshareDatasetWithUser = (userId, datasetId) => {
    return dispatch => {
        dataAccess.unshareDatasetWithUser(userId, datasetId)
            .then(response => {
                if (response.success) {
                    dispatch(actionUnshareWithUserSuccess(response.res.data));
                    return
                }
                NotificationManager.error('Something went wrong with dataset unsharing!', 'Error!');
            })
    }
}

export const shareDatasetWithUser = (userId, datasetId) => {
    return dispatch => {
        dispatch(actionShareWithUserRequest());
        dataAccess.shareDatasetWithUser(userId, datasetId)
            .then(response => {
                if (response.success) {
                    dispatch(actionShareWithUserSuccess(response.res.data));
                    return
                }
                dispatch(actionShareWithUserFailed());
                NotificationManager.error('Something went wrong with dataset sharing', 'Error!');
            })
    }
}

export const unshareDatasetWithGroup = (groupId, datasetId) => {
    return dispatch => {
        dataAccess.unshareDatasetWithGroup(groupId, datasetId)
            .then(response => {
                if (response.success) {
                    dispatch(actionUnshareWithGroupSuccess(response.res.data));
                    return
                }
                NotificationManager.error('Something went wrong with dataset unsharing!', 'Error!');
            })
    }
}

export const shareDatasetWithGroup = (groupId, datasetId) => {
    return dispatch => {
        dispatch(actionShareWithGroupRequest());
        dataAccess.shareDatasetWithGroup(groupId, datasetId)
            .then(response => {
                if (response.success) {
                    dispatch(actionShareWithGroupSuccess(response.res.data));
                    return
                }
                dispatch(actionShareWithGroupFailed());
                NotificationManager.error('Something went wrong with dataset sharing', 'Error!');
            })
    }
}

export const getDatasetIdNamePairs = (subDir = null) => {
    return dispatch => {
        dispatch(actionGetDatasetIdNamePairsRequest());
        dataAccess.getDatasetIdNamePairs()
        .then(response => {
            if (response.success) {
                dispatch(actionGetDatasetIdNamePairsSuccess(response.res.data));
                return;
            }
            dispatch(actionGetDatasetIdNamePairsFailed());
            NotificationManager.error('Error!', "Failed to load datasets!, try again later.")
        })
        .catch(err => {
            dispatch(actionGetDatasetIdNamePairsFailed());
            NotificationManager.error('Error!', "Failed to load datasets!, try again later.");
        })
    }
}

export const getDatasetVersions = (datasetId) => {
    return dispatch => {
        dispatch(actionGetDatasetVersionsRequest());
        dataAccess.getDatasetVersions(datasetId)
        .then(response => {
            if (response.success) {
                dispatch(actionGetDatasetVersionsSuccess(response.res.data.versions));
                return;
            }
            dispatch(actionGetDatasetVersionsFailed());
            NotificationManager.error('Error!', "Failed to load dataset versions!, try again later.")
        })
        .catch(err => {
            dispatch(actionGetDatasetVersionsFailed());
            NotificationManager.error('Error!', "Failed to load dataset versions!, try again later.");
        })
    }
}

export const editDatasetTitle = (datasetId, formData) => {
    let datasetTitle= formData.get("name")
    return (dispatch) => {
        dataAccess.editDatasetTitle(datasetId, formData)
        .then(response => {
            if(response.success){
                if(response.res.data.isEdit){
                    dispatch(actionEditDatasetTitleSuccess({datasetId: datasetId, datasetTitle: datasetTitle}));
                    return
                }
            }
        })
        dispatch(actionEditDatasetTitleFailed());
    }
}

export const setDataUploadStatus = () => {
    return dispatch => {
        dispatch(actionSetDataUploadStatus());
    }
}

export const resetDataUploadStatus = () => {
    return dispatch => {
        dispatch(actionResetDataUploadStatus());
    }
}

export const resetSubfolderUrl = () => {
    return dispatch => {
        dispatch(actionResetSubfolderUrl());
    }
}

export const showDatasetDetailModal = (datasetId) => {
    return (dispatch) => {
        dispatch(actionShowDatasetDetailModal(datasetId));
    }
}

export const hideDatasetDetailModal = () => {
    return (dispatch) => {
        dispatch(actionHideDatasetDetailModal());
    }
}
