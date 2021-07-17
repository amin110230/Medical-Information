import * as userActionTypes from "./userActionTypes";
import * as userDataAccess from "../../dataaccess/userDataAccess";
import { NotificationManager } from 'react-notifications';

//Actions
const actionLoadUserBasicInfoRequest = (payload) => {
    return {
        type: userActionTypes.LOAD_USER_BASIC_INFO_REQUEST,
        payload: payload
    }
}

const actionLoadUserBasicInfoSuccess = (payload) => {
    return {
        type: userActionTypes.LOAD_USER_BASIC_INFO_SUCCESS,
        payload: payload
    }
}

const actionLoadUserBasicInfoFailed = (payload) => {
    return {
        type: userActionTypes.LOAD_USER_BASIC_INFO_FAILED,
        payload: payload
    }
}

const actionGetUserDatasetsRequest = () => {
    return {
        type: userActionTypes.GET_USER_DATASETS_REQUEST
    }
}

const actionGetUserDatasetsSuccess = (payload) => {
    return {
        type: userActionTypes.GET_USER_DATASETS_SUCCESS,
        payload: payload 
    }
}

const actionGetUserDatasetFailed = (payload) => {
    return {
        type: userActionTypes.GET_USER_DATASETS_FAILED,
        payload: payload
    }
}

const actionGetUserGroupsRequest = () => {
    return {
        type: userActionTypes.GET_USER_GROUPS_REQUEST
    }
}

const actionGetUserGroupsSuccess = (payload) => {
    return {
        type: userActionTypes.GET_USER_GROUPS_SUCCESS,
        payload: payload 
    }
}

const actionGetUserGroupFailed = (payload) => {
    return {
        type: userActionTypes.GET_USER_GROUPS_FAILED,
        payload: payload
    }
}

const actionGetUserFollowersRequest = () => {
    return {
        type: userActionTypes.GET_USER_FOLLOWERS_REQUEST
    }
}

const actionGetUserFollowersSuccess = (payload) => {
    return {
        type: userActionTypes.GET_USER_FOLLOWERS_SUCCESS,
        payload: payload 
    }
}

const actionGetUserFollowerFailed = (payload) => {
    return {
        type: userActionTypes.GET_USER_FOLLOWERS_FAILED,
        payload: payload
    }
}

const actionGetUserFollowingRequest = () => {
    return {
        type: userActionTypes.GET_USER_FOLLOWING_REQUEST
    }
}

const actionGetUserFollowingSuccess = (payload) => {
    return {
        type: userActionTypes.GET_USER_FOLLOWING_SUCCESS,
        payload: payload 
    }
}

const actionGetUserFollowingFailed = (payload) => {
    return {
        type: userActionTypes.GET_USER_FOLLOWING_FAILED,
        payload: payload
    }
}

const actionToggleFollowUser = (payload) => {
    return {
        type: userActionTypes.TOGGLE_USER_FOLLOWER,
        payload: payload
    }
}

const actionToggleFollowingUser = (payload) => {
    return {
        type: userActionTypes.TOGGLE_USER_FOLLOWING,
        payload: payload
    }
}

const actionToggleSearchUserFollow = (payload) => {
    return {
        type: userActionTypes.TOGGLE_SEARCH_USER_FOLLOW,
        payload: payload
    }
}

const actionGetUserSearchRequest = () => {
    return {
        type: userActionTypes.GET_USER_SEARCH_REQUEST
    }
}

const actionGetUserSearchResultsSuccess = (payload) => {
    return {
        type: userActionTypes.GET_USER_SEARCH_REQUEST_SUCCESS,
        payload
    }
}

const actionGetUserSearchResultsFailed = (payload) => {
    return {
        type: userActionTypes.GET_USER_SEARCH_REQUEST_FAILED,
        payload
    }
}

const actionDismissNumberOfUserResults = () => {
    return {
        type: userActionTypes.DISMISS_NUMBER_OF_USER_RESULTS
    }
}

// Action Creators
export const loadUserSearchResults = (searchFilters, pageNum, numOfItems, isInitialLoad = false) => {
    return (dispatch) => {
        if (isInitialLoad) {
            dispatch(actionGetUserSearchRequest());
        }
        userDataAccess.getUsersSearchResults(searchFilters, pageNum, numOfItems)
        .then(response => {
            if (response.success) {
                dispatch(actionGetUserSearchResultsSuccess(response.res.data));
                return
            }
            else{
                NotificationManager.error('Failed to load search results!', 'Error!')
                dispatch(actionGetUserSearchResultsFailed(response.res));
            }
        })
    }
}

export const loadUserBasicInfo = () => {
    return (dispatch) => {
        dispatch(actionLoadUserBasicInfoRequest())
        userDataAccess.getUserBasicInfo()
            .then(response => {
                if (response.success) {
                    dispatch(actionLoadUserBasicInfoSuccess({basicInfo: response.res.data}));
                }
                else{
                    dispatch(actionLoadUserBasicInfoFailed(response.error))
                }
            })
    }
}

export const loadUserDataset = (pageNum, numOfItems, initialLoading = false) => {
    return (dispatch) => {
        if (initialLoading) {
            dispatch(actionGetUserDatasetsRequest());
        }
        userDataAccess.getDatasets(pageNum, numOfItems)
        .then(response => {
            if (response.success) {
                dispatch(actionGetUserDatasetsSuccess(response.res.data));
                return
            }
            else{
                NotificationManager.error('Failed to load datasets!', 'Error!');
                dispatch(actionGetUserDatasetFailed(response.res));
            }
        })
    }
}

export const loadUserGroup = (pageNum, numOfItems, initialLoading = false) => {
    return (dispatch) => {
        if (initialLoading) {
            dispatch(actionGetUserGroupsRequest());
        }
        userDataAccess.getGroups(pageNum, numOfItems)
        .then(response => {
            if (response.success) {
                dispatch(actionGetUserGroupsSuccess(response.res.data));
                return
            }
            else{
                NotificationManager.error('Failed to load groups!', 'Error!');
                dispatch(actionGetUserGroupFailed(response.res));
            }
        })
    }
}

export const loadUserFollower = (pageNum, numOfItems, initialLoading = false) => {
    return (dispatch) => {
        if (initialLoading) {
            dispatch(actionGetUserFollowersRequest());
        }
        userDataAccess.getFollowers(pageNum, numOfItems)
        .then(response => {
            if (response.success) {
                dispatch(actionGetUserFollowersSuccess(response.res.data));
                return
            }
            else{
                NotificationManager.error('Failed to load follower!', 'Error!');
                dispatch(actionGetUserFollowerFailed(response.res));
            }
        })
    }
}

export const loadUserFollowing = (pageNum, numOfItems, initialLoading = false) => {
    return (dispatch) => {
        if (initialLoading) {
            dispatch(actionGetUserFollowingRequest());
        }
        userDataAccess.getFollowing(pageNum, numOfItems)
        .then(response => {
            if (response.success) {
                dispatch(actionGetUserFollowingSuccess(response.res.data));
                return
            }
            else{
                NotificationManager.error('Failed to load following!', 'Error!');
                dispatch(actionGetUserFollowingFailed(response.res));
            }
        })
    }
}

export const followUser = (userId, numOfFollowItems) => {
    return (dispatch) => {
        userDataAccess.followUser(userId, true)
        .then(response => {
            if(response.success){
                dispatch(loadUserFollowing(1, numOfFollowItems, true))
                dispatch(loadUserFollower(1, numOfFollowItems, true))
                dispatch(toggleFollowUser(userId))
            }
            else{
                NotificationManager.error('Failed to follow!', 'Error!');
            }
        })
    }
}

export const unfollowUser = (userId, numOfFollowItems) => {
    return (dispatch) => {
        userDataAccess.followUser(userId, false)
        .then(response => {
            if(response.success){
                dispatch(toggleFollowingUser(userId))
                dispatch(loadUserFollowing(1, numOfFollowItems, true))
                dispatch(loadUserFollower(1, numOfFollowItems, true))
            }
            else{
                NotificationManager.error('Failed to follow!', 'Error!');
            }
        })
    }
}

export const toggleFollowUser = (userId) => {
    return (dispatch) => {
        dispatch(actionToggleFollowUser({userId: userId}))
    }
}

export const toggleFollowingUser = (userId) => {
    return (dispatch) => {
        dispatch(actionToggleFollowingUser({userId: userId}))
    }
}

export const dismissNumberOfUserResults = () => {
    return dispatch => {
        dispatch(actionDismissNumberOfUserResults());
    }
}

export const toggleSearchUserFollow = (isFollowing, userId, userName) => {
    return (dispatch) => {
        userDataAccess.followUser(userId, isFollowing)
        .then(response => {
            if(response.success){
                dispatch(actionToggleSearchUserFollow({userId: userId}))
                isFollowing 
                ? NotificationManager.success(`You are following ${userName}!`, 'Success!') 
                : NotificationManager.success(`You have unfollow ${userName}!`, 'Success!');
            }
            else{
                NotificationManager.error('Failed to handle follow!', 'Error!');
            }
        })
    }
}