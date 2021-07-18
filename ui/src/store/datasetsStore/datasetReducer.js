import * as datasetActionTypes from './datasetActionTypes';


const initialState = {
    isListInitLoading: false,
    isDetailsLoading: false,
    isDetailsViewDataLoading: false,
    isDetailsViewMetadataLoading: false,
    isPropertiesDetailsLoading: false,

    selectedDatasetType: '',
    selectedDatasetId: 0,
    selectedDatasetPid: 0,
    selectedDatasetForDetail: 0,

    dataset: {},
    datasets: [],
    myDatasets:[],

    expandedDatsetDetails: null,
    expandedDatasetMetadata: null,
    expandedDatasetData: null,
    expandedDatasetLink: null,
    numberOfTotalItem: null,
    datasetImageFiles: [],
    selectedDataSelections: null,

    pageNum: 0,
    numOfItems: 7,
    hasMore: false,
    
    numOfFolderItemsPerPage: 20,
    curentFolderPageNum: 0,
    hasMoreFolderItem: false,
    totalNoOfCurrentFolderItem: 0,
    subDirUrl: null,

    totalNoOfData: 0,
    noOfDataPerPage: 3,
    
    metadataTemplate: [],
    isSyncing: false,
    error: null,
    activeAccordion: null,
    currentFolderId: null,
    targetFile: null,
    filesAtClipboard: null,

    showAddDatasetModal: false,
    showRegisterDatasetModal: false,
    showSubmitMetadataAlert: false,
    shouldMetadataTabChanged: true,
    showShareModal: false,
    showDatasetDetailModal: false,

    shareableUsers: null,
    isShareableUserLoading: true,
    shareableGroups: null,
    isShareableGroupLoading: true,
    datasetIdNamePairs: [],
    datasetVersions: [],
    isDatasetIdNamePairLoading: false,
    isDatasetVersionsLoading: false,
    isDataUploading: false
}


const datasetReducer = (state = initialState, action) => {

    switch (action.type) {

        case datasetActionTypes.DATASET_GET_DATASETS_REQUEST:
            return {
                ...state,
                datasets: [],
                isListInitLoading: true,
                numberOfTotalItem: null,
                hasMore: false
            }

        case datasetActionTypes.DATASET_GET_DATASETS_SUCCESS:
            return {
                ...state,
                datasets: [...state.datasets, ...action.payload.data],
                numberOfTotalItem: action.payload.itemCount,
                isListInitLoading: false,
                hasMore: action.payload.hasMore,
                pageNum: JSON.parse(action.payload.pageNum)

            }

        case datasetActionTypes.DATASET_GET_DATASETS_FAILED:
            return {
                ...state,
                isListInitLoading: false,
                numberOfTotalItem: null,
                error: action.payload.error
            }

        case datasetActionTypes.DATASET_GET_DATASETS_SEARCH_RESULTS_SUCCESS:
            return {
                ...state,
                datasets: [...state.datasets, ...action.payload.data],
                numberOfTotalItem: action.payload.itemCount,
                isListInitLoading: false,
                hasMore: action.payload.hasMore,
                pageNum: JSON.parse(action.payload.pageNum)
            }

        case datasetActionTypes.DATASET_CLOSE_DATASET_SEARCH_ALERT_SUCCESS:
            return {
                ...state,
                numberOfTotalItem: null
            }

        case datasetActionTypes.DATASET_GET_DATASET_DETAILS_REQUEST:
            return {
                ...state,
                isDetailsLoading: true,
                error: null
            }

        case datasetActionTypes.DATASET_GET_DATASET_DETAILS_SUCCESS:
            return {
                ...state,
                expandedDatsetDetails: action.payload.data.properties,
                expandedDatasetData: action.payload.data.data,
                expandedDatasetLink: action.payload.data.link,
                expandedDatasetMetadata: action.payload.data.metadatas,
                totalNoOfData: action.payload.data.totalData,
                totalNoOfMetadata: action.payload.data.totalMetadata,
                datasetImageFiles: action.payload.data.datasetImgFiles,

                currentFolderId: action.payload.data.data.rootFolderId,
                targetFile: action.payload.data.data.fileMap[-1],
                totalNoOfCurrentFolderItem: action.payload.data.data.itemCount ? action.payload.data.data.itemCount : null,
                hasMoreFolderItem: action.payload.data.data.hasMore ? action.payload.data.data.hasMore : false,
                curentFolderPageNum: action.payload.data.data.pageNum ? action.payload.data.data.pageNum : 0,

                error: null,
                isDetailsLoading: false
            }

        case datasetActionTypes.DATASET_GET_DATASET_DETAILS_FAILED:    
            return {
                ...state,
                expandedDatsetDetails: null,
                expandedDatasetData: null,
                expandedDatasetLink: null,
                expandedDatasetMetadata: null,
                totalNoOfData: 0,
                totalNoOfMetadata: null,
                datasetImageFiles: null,
                isDetailsLoading: false,

                currentFolderId: null,
                totalNoOfCurrentFolderItem: null,
                hasMoreFolderItem: false,
                curentFolderPageNum: 0,

                error: action.payload ? action.payload.msg : "Failed to load dataset details!"
            }

        case datasetActionTypes.DATASET_GET_DATASET_PROPERTIES_REQUEST:
            return {
                ...state,
                isPropertiesDetailsLoading: true
            }

        case datasetActionTypes.DATASET_GET_DATASET_PROPERTIES_SUCCESS:
            let newDatsetDetails = state.expandedDatsetDetails.map(metadata => {
                return metadata.id === action.payload.metadataId
                    ? action.payload.res.data
                    : metadata
            })
            return {
                ...state,
                expandedDatsetDetails: newDatsetDetails,
                isPropertiesDetailsLoading: false
            }

        case datasetActionTypes.DATASET_GET_DATASET_PROPERTIES_FAILED:
            return {
                ...state,
                isPropertiesDetailsLoading: false
            }

        case datasetActionTypes.DATASET_APPEND_NEW_DATA_TO_DATASET:
            return {
                ...state,
                expandedDatasetData: [
                    ...state.expandedDatasetData,
                    action.payload
                ]
            }
        case datasetActionTypes.DATASET_APPEND_NEW_LINK_TO_DATASET:
            if(!state.expandedDatasetLink){
                state.expandedDatasetLink = []   
            }
            return {
                ...state,
                expandedDatasetLink: [
                    ...state.expandedDatasetLink,
                    action.payload
                ]
            }

        case datasetActionTypes.DATASET_APPEND_NEW_METADATA_TO_DATASET:
            let newExpandedDatsetDetails = [];
            state.expandedDatsetDetails === undefined 
            ?   newExpandedDatsetDetails.push(action.payload)
            :   newExpandedDatsetDetails = [
                    ...state.expandedDatsetDetails,
                    action.payload
                ]
            
            return {
                ...state,
                expandedDatsetDetails: newExpandedDatsetDetails
            }

        case datasetActionTypes.DATASET_TITLE_EDIT_SUCCESS:
            let updatedDatasets = state.datasets.map(dataset => {
                return dataset.id === action.payload.datasetId 
                ?   {...dataset, name: action.payload.datasetTitle} 
                :   dataset
            })
            return {
                ...state,
                datasets: updatedDatasets
            }

        case datasetActionTypes.DATASET_SELECT_A_DATASET:
            return {
                ...state,
                selectedDatasetId: action.payload.selectedDatasetId
            }

        case datasetActionTypes.DATASET_GET_MORE_DATA_REQUEST:
            return {
                ...state,
                isDetailsViewDataLoading: true
            }

        case datasetActionTypes.DATASET_GET_MORE_DATA_SUCCESS:
            return {
                ...state,
                isDetailsViewDataLoading: false
            }

        case datasetActionTypes.DATASET_GET_MORE_DATA_FAILED:
            return {
                ...state,
                isDetailsViewDataLoading: false
            }

        case datasetActionTypes.DATASET_GET_LESS_DATA_SUCCESS:
            for (let i = 1; i <= action.payload.noOfItemToLess; i++) {
                state.expandedDatasetData.pop()
            }
            return {
                ...state
            }

        case datasetActionTypes.DATASET_SYNC_DATASET_REQUEST:
            return {
                ...state,
                isSyncing: true
            }

        case datasetActionTypes.DATASET_SYNC_DATASET_SUCCESS:
            return {
                ...state,
                isSyncing: false
            }

        case datasetActionTypes.DATASET_SYNC_DATASET_FAILED:
            return {
                ...state,
                isSyncing: false,
                error: action.payload.error
            }

        case datasetActionTypes.DATASET_PUBLISH_DATASET_REQUEST:
            return {
                ...state,
                isPublishing: true
            }

        case datasetActionTypes.DATASET_PUBLISH_DATASET_SUCCESS:
            return {
                ...state,
                isPublishing: false,
                datasets: updateDatasetStatus(state.datasets, action.payload.datasetId, action.payload.status)
            }
            
        case datasetActionTypes.DATASET_PUBLISH_DATASET_FAILED:
            return {
                ...state,
                isPublishing: false,
                error: action.payload.error
            }

        case datasetActionTypes.DATASET_UPDATE_CURRENT_FILEMAP:
            return {
                ...state,
                expandedDatasetData: {
                    ...state.expandedDatasetData,
                    fileMap: action.payload.fileMap
                }
            }
    
        case datasetActionTypes.DATASET_UPDATE_CURRENT_FOLDER:
            return {
                ...state,
                currentFolderId: action.payload.folder.id,
                targetFile: action.payload.folder
            }

        case datasetActionTypes.DATASET_UPDATE_CURRENT_FOLDER_FILES_REQUEST:
            return {
                ...state,
                totalNoOfCurrentFolderItem: null,
                hasMoreFolderItem: false,
                curentFolderPageNum: 0,
                expandedDatasetData: action.payload ? action.payload.expandedDatasetData : state.expandedDatasetData
            }

        case datasetActionTypes.DATASET_UPDATE_CURRENT_FOLDER_FILES_SUCCESS:
            return {
                ...state,
                expandedDatasetData: action.payload.expandedDatasetData,
                datasetImageFiles: action.payload.datasetImgFiles,
                totalNoOfCurrentFolderItem: action.payload.response.itemCount,
                hasMoreFolderItem: action.payload.response.hasMore,
                curentFolderPageNum: action.payload.response.pageNum
            }

        case datasetActionTypes.DATASET_UPDATE_CURRENT_FOLDER_FILES_FAILED:
            return {
                ...state,
                expandedDatasetData: action.payload.expandedDatasetData,
                totalNoOfCurrentFolderItem: null,
                hasMoreFolderItem: false,
                curentFolderPageNum: 0,
                error: action.payload.error
            }

        case datasetActionTypes.DATASET_DATA_COPY_FILES_TO_CLIPBOARD:
            return {
                ...state,
                filesAtClipboard: action.payload.files
            }

        case datasetActionTypes.DATASET_UPDATE_ACTIVE_ACCORDION:
            return {
                ...state,
                activeAccordion: action.payload.datasetId
            }

        case datasetActionTypes.DATASET_HIDE_ADD_DATASET_MODAL:
            return {
                ...state,
                showAddDatasetModal: false
            }

        case datasetActionTypes.DATASET_SHOW_ADD_DATASET_MODAL:
            return {
                ...state,
                showAddDatasetModal: true
            }

        case datasetActionTypes.DATASET_SHOW_REGISTER_DATASET_MODAL:
            return {
                ...state,
                showRegisterDatasetModal: true
            }

        case datasetActionTypes.DATASET_HIDE_REGISTER_DATASET_MODAL:
            return {
                ...state,
                showRegisterDatasetModal: false
            }

        case datasetActionTypes.DATASET_SHOW_SUBMIT_METADATA_ALERT_MODAL:
            return {
                ...state,
                showSubmitMetadataAlert: true
            }

        case datasetActionTypes.DATASET_HIDE_SUBMIT_METADATA_ALERT_MODAL:
            return {
                ...state,
                showSubmitMetadataAlert: false
            }

        case datasetActionTypes.DATASET_RESET_METADATA_TAB_CHANGE_FLAG:
            return {
                ...state,
                shouldMetadataTabChanged: true
            }

        case datasetActionTypes.DATASET_SET_METADATA_TAB_CHANGE_FLAG:
            return {
                ...state,
                shouldMetadataTabChanged: false
            }

        case datasetActionTypes.DATASET_REGISTER_DATASET_REQUEST:
            return state;

        case datasetActionTypes.DATASET_REGISTER_DATASET_SUCCESS:
            return {
                ...state,
                datasets: updateDatasetStatus(state.datasets, action.payload.datasetId, "Registered")
            }

        case datasetActionTypes.DATASET_REGISTER_DATASET_FAILED:
            return {
                ...state,
                error: action.payload.error
            }

        case datasetActionTypes.DATASET_HANDLE_LIKE_SUCCESS:
            return {
                ...state,
                datasets: updateDatasetLikes(state.datasets, action.payload.id, action.payload.numOfLikes, action.payload.liked)
            }
            
        case datasetActionTypes.DATASET_SHOW_DATASTSET_SHARE_MODAL:
            return {
                ...state,
                showShareModal: true,
                selectedDatasetType: action.payload.datasetType,
                selectedDatasetId: action.payload.dataset.id,
                selectedDatasetPid: action.payload.dataset.pid
            }

        case datasetActionTypes.DATASET_HIDE_DATASET_SHARE_MODAL:
            return {
                ...state,
                showShareModal: false
            }

        case datasetActionTypes.DATASET_LOAD_SHAREABLE_GROUP_REQUEST:
            return {
                ...state,
                isShareableGroupLoading: true
            }
        case datasetActionTypes.DATASET_LOAD_SHAREABLE_GROUP_SUCCESS:
            return {
                ...state,
                shareableGroups: action.payload,
                isShareableGroupLoading: false
            }

        case datasetActionTypes.DATASET_LOAD_SHAREABLE_GROUP_FAILED:
            return {
                ...state,
                isShareableGroupLoading: false
            }

        case datasetActionTypes.DATASET_LOAD_SHAREABLE_USERS_REQUEST:
            return {
                ...state,
                isShareableUserLoading: true
            }

        case datasetActionTypes.DATASET_LOAD_SHAREABLE_USERS_SUCCESS:
            return {
                ...state,
                shareableUsers: action.payload,
                isShareableUserLoading: false
            }

        case datasetActionTypes.DATASET_LOAD_SHAREABLE_USERS_FAILED:
            return {
                ...state,
                isShareableUserLoading: false
            }

        case datasetActionTypes.DATASET_SHARE_WITH_USER_SUCCESS:
            return {
                ...state,
                shareableUsers: updateInvitationStatus(state.shareableUsers, action.payload)
            }

        case datasetActionTypes.DATASET_UNSHARE_WITH_USER_SUCCESS:
            return {
                ...state,
                shareableUsers: updateShareableStatus(state.shareableUsers, action.payload)
            }

        case datasetActionTypes.DATASET_SHARE_WITH_GROUP_SUCCESS:
            return {
                ...state,
                shareableGroups: {
                    ...state.shareableGroups,
                    shareableGroups: updateGroupInvitationStatus(state.shareableGroups.shareableGroups, action.payload)
                }
            }

        case datasetActionTypes.DATASET_UNSHARE_WITH_GROUP_SUCCESS:
            return {
                ...state,
                shareableGroups: {
                    ...state.shareableGroups,
                    shareableGroups: updateGroupShareableStatus(state.shareableGroups.shareableGroups, action.payload)
                }
            }

        case datasetActionTypes.DATASET_DATA_UPLOAD_SUB_DIR_RESET:
            return {
                ...state,
                subDirUrl: null
            }
            
        case datasetActionTypes.DATASET_ID_NAME_PAIRS_REQUEST:
            return{
                ...state,
                isDatasetIdNamePairLoading: true
            }
        case datasetActionTypes.DATASET_ID_NAME_PAIRS_SUCCESS:
            return {
                ...state,
                isDatasetIdNamePairLoading: false,
                datasetIdNamePairs: action.payload
            }
        case datasetActionTypes.DATASET_ID_NAME_PAIRS_FAILED:
            return {
                ...state,
                isDatasetIdNamePairLoading: false
            }

        case datasetActionTypes.DATASET_VERSIONS_REQUEST:
            return {
                ...state,
                isDatasetVersionsLoading: true
            }
        case datasetActionTypes.DATASET_VERSIONS_SUCCESS:
            return {
                ...state,
                isDatasetVersionsLoading: false,
                datasetVersions: action.payload
            }
        case datasetActionTypes.DATASET_VERSIONS_FAILED:
            return {
                ...state,
                isDatasetVersionsLoading: false
            }
        case datasetActionTypes.DATASET_DATA_UPLOAD_STARTED:
            return {
                ...state,
                isDataUploading: true
            }
        case datasetActionTypes.DATASET_DATA_UPLOAD_COMPLETED:
            return {
                ...state,
                isDataUploading: false
            }
        case datasetActionTypes.DATASET_SHOW_DATASET_DETAILS_MODAL:
            return {
                ...state,
                showDatasetDetailModal: true,
                selectedDatasetForDetail: action.payload
            }

        case datasetActionTypes.DATASET_HIDE_DATASET_DETAILS_MODAL:
            return {
                ...state,
                showDatasetDetailModal: false,
                selectedDatasetForDetail: null
            }

        default:
            return state;
    }
}

const updateDatasetStatus = (datasets, targetId, status) => {
    let updatedDataset = datasets.map(dataset => {
        return dataset.id === targetId ? {...dataset, status : status} : dataset;
    })
    return updatedDataset;
}

const updateDatasetLikes = (datasets, targetId, numOfLikes, likeStatus) => {
    const updatedDatasets = datasets.map(dataset => {
        return dataset.id === targetId ? {...dataset, like: numOfLikes, liked: likeStatus} : dataset;
    })

    return updatedDatasets;
}

const updateInvitationStatus = (users, payload) => {
    let updatedUsers = users.map(user => {
        return user.id === payload.userId ? {...user, isInvited : payload.isInvited} : user;
    })
    return updatedUsers;
}

const updateShareableStatus = (users, payload) => {
    let updatedUsers = users.map(user => {
        return user.id === payload.userId ? {...user, isShared : payload.isShared} : user;
    })
    return updatedUsers;
}

const updateGroupInvitationStatus = (groups, payload) => {
    let updatedGroups = groups.map(group => {
        return group.id === payload.groupId ? {...group, isInvited : payload.isInvited} : group;
    })
    return updatedGroups;
}

const updateGroupShareableStatus = (groups, payload) => {
    let updatedGroups = groups.map(group => {
        return group.id === payload.groupId ? {...group, isShared : payload.isShared} : group;
    })
    return updatedGroups;
}

export default datasetReducer;