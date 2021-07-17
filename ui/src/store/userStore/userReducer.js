import * as userActionTypes from './userActionTypes';

const initState = {
    userBasicInfo: null,
    users: [],
    datasets: [],
    groups: [],
    followers: [],
    following: [],

    userPageNum: 0,
    datasetPageNum: 0,
    groupPageNum: 0,
    followerPageNum: 0,
    followingPageNum: 0,
    numOfUser: 2,
    numOfItems: 3,
    numOfFollowItems: 4,
    hasMoreUser: false,
    hasMoreDataset: false,
    hasMoreGroup: false,
    hasMoreFollower: false,
    hasMoreFollowing: false,
    numberOfTotalUser: null,
    numberOfTotalDataset: null,
    numberOfTotalGroup: null,
    numberOfTotalFollower: null,
    numberOfTotalFollowing: null,

    isUserListInitLoading: false,
    isDatasetListInitLoading: false,
    isGroupListInitLoading: false,
    isFollowerListInitLoading: false,
    isFollowingListInitLoading: false,
    isUserBasicInfoLoading: false,
    
    error: null
}

const userReducer = ( state = initState, action) => {
    switch(action.type){
        case userActionTypes.GET_USER_SEARCH_REQUEST:
            return {
                ...state,
                users: [],
                numberOfTotalUser: null,
                isUserListInitLoading: false,
                hasMoreUser: false,
                error: null
            }

        case userActionTypes.GET_USER_SEARCH_REQUEST_SUCCESS:
            return {
                ...state,
                users: [...state.users, ...action.payload.data],
                numberOfTotalUser: action.payload.numberOfResults,
                isUserListInitLoading: false,
                hasMoreUser: action.payload.hasMore,
                userPageNum: JSON.parse(action.payload.pageNum)
            }

        case userActionTypes.GET_USER_SEARCH_REQUEST_FAILED:
            return {
                ...state,
                users: null,
                numberOfTotalUser: 0,
                isUserListInitLoading: false,
                hasMoreUser: false,
                userPageNum: 0
            }

        case userActionTypes.DISMISS_NUMBER_OF_USER_RESULTS:
            return {
                ...state,
                numberOfTotalUser: null
            }

        case userActionTypes.LOAD_USER_BASIC_INFO_REQUEST:
            return{
                ...state,
                isUserBasicInfoLoading: true
            }

        case userActionTypes.LOAD_USER_BASIC_INFO_SUCCESS:
            return{
                ...state,
                userBasicInfo: action.payload.basicInfo,
                isUserBasicInfoLoading: false
            }
        
        case userActionTypes.LOAD_USER_BASIC_INFO_FAILED:
            return{
                ...state,
                userBasicInfo: null,
                isUserBasicInfoLoading: false
            }

        case userActionTypes.GET_USER_DATASETS_REQUEST:
            return {
                ...state,
                datasets: [],
                isDatasetListInitLoading: true,
                numberOfTotalDataset: null,
                hasMoreDataset: false
            }

        case userActionTypes.GET_USER_DATASETS_SUCCESS:
            return {
                ...state,
                datasets: [...state.datasets, ...action.payload.data],
                numberOfTotalDataset: action.payload.itemCount,
                isDatasetListInitLoading: false,
                hasMoreDataset: action.payload.hasMore,
                datasetPageNum: JSON.parse(action.payload.pageNum)
            }

        case userActionTypes.GET_USER_DATASETS_FAILED:
            return {
                ...state,
                isDatasetListInitLoading: false,
                numberOfTotalDataset: null,
                error: action.payload.error
            }

        case userActionTypes.GET_USER_GROUPS_REQUEST:
            return {
                ...state,
                groups: [],
                isGroupListInitLoading: true,
                numberOfTotalGroup: null,
                hasMoreGroup: false
            }

        case userActionTypes.GET_USER_GROUPS_SUCCESS:
            return {
                ...state,
                groups: [...state.groups, ...action.payload.data],
                numberOfTotalGroup: action.payload.numberOfResults,
                isGroupListInitLoading: false,
                hasMoreGroup: action.payload.hasMore,
                groupPageNum: JSON.parse(action.payload.pageNum)
            }

        case userActionTypes.GET_USER_GROUPS_FAILED:
            return {
                ...state,
                isGroupListInitLoading: false,
                numberOfTotalGroup: null,
                error: action.payload.error
            }

        case userActionTypes.GET_USER_FOLLOWERS_REQUEST:
            return {
                ...state,
                followers: [],
                isFollowerListInitLoading: true,
                numberOfTotalFollower: null,
                hasMoreFollower: false
            }

        case userActionTypes.GET_USER_FOLLOWERS_SUCCESS:
            return {
                ...state,
                followers: [...state.followers, ...action.payload.follower],
                numberOfTotalFollower: action.payload.itemCount,
                isFollowerListInitLoading: false,
                hasMoreFollower: action.payload.hasMore,
                followerPageNum: JSON.parse(action.payload.pageNum)
            }

        case userActionTypes.GET_USER_FOLLOWERS_FAILED:
            return {
                ...state,
                isFollowerListInitLoading: false,
                numberOfTotalFollower: null,
                error: action.payload.error
            }

        case userActionTypes.GET_USER_FOLLOWING_REQUEST:
            return {
                ...state,
                following: [],
                isFollowingListInitLoading: true,
                numberOfTotalFollowing: null,
                hasMoreFollowing: false
            }

        case userActionTypes.GET_USER_FOLLOWING_SUCCESS:
            return {
                ...state,
                following: [...state.following, ...action.payload.following],
                numberOfTotalFollowing: action.payload.itemCount,
                isFollowingListInitLoading: false,
                hasMoreFollowing: action.payload.hasMore,
                followingPageNum: JSON.parse(action.payload.pageNum)
            }

        case userActionTypes.GET_USER_FOLLOWING_FAILED:
            return {
                ...state,
                isFollowingListInitLoading: false,
                numberOfTotalFollowing: null,
                error: action.payload.error
            }

        case userActionTypes.TOGGLE_USER_FOLLOWER:
            let newFollowers = state.followers.map(follower => {
                return follower.id === action.payload.userId ? {...follower, isFollowing: !follower.isFollowing} : follower;
            })
            return {
                ...state,
                followers: newFollowers
            }

        case userActionTypes.TOGGLE_USER_FOLLOWING:    
            state.following.forEach((following, i) => {
                if(following.id === action.payload.userId)
                    state.following.splice(i, 1)
            })
            return {
                ...state,
                following: [...state.following]
            }

        case userActionTypes.TOGGLE_SEARCH_USER_FOLLOW:
            let newUsers = state.users.map(user => {
                return user.id === action.payload.userId ? {...user, isFollowing: !user.isFollowing} : user;
            })
            return {
                ...state,
                users: newUsers
            }

        default:
            return state
    }
}

export default userReducer;