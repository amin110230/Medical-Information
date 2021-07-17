import * as notificationActionTypes from "./notificationActionTypes";
const initialState = {
    notifications : [],
    noOfUnreadNotif : 0,
    isInvitationsLoading : false,
    isReadRequestLoading: false,
    isUserAcceptRequestLoading: false,
    error: null 
} 

const notificationReducer = ( state = initialState ,action) => {
    switch (action.type) {
        case notificationActionTypes.LOAD_INVITATION_NOTIFICATION_REQUEST:
            return {
                ...state,
                isInvitationsLoading: true
            }
        case notificationActionTypes.LOAD_INVITATION_NOTIFICATION_SUCCESS:
            let UnreadNotifs = 0;
            action.payload.notifications.forEach((notification) => {
                if(!notification.isRead)
                    UnreadNotifs++; 
            })

            return {
                ...state,
                notifications: action.payload.notifications,
                isInvitationsLoading: false,
                noOfUnreadNotif: UnreadNotifs
            }

        case notificationActionTypes.LOAD_INVITATION_NOTIFICATION_FAILED:
            return {
                ...state,
                error: action.payload.error,
                isInvitationsLoading: false
            }

        case notificationActionTypes.READ_NOTIFICATION_REQUEST:
            return {
                ...state,
                isReadRequestLoading: true
            }

        case notificationActionTypes.READ_NOTIFICATION_SUCCESS:
            return {
                ...state,
                isReadRequestLoading: false,
                notifications: state.notifications.map((aNotification) => 
                    aNotification.id === action.payload.notificationID 
                    ?   { ...aNotification, isRead : true }
                    :   aNotification
                ),
                noOfUnreadNotif: state.noOfUnreadNotif - 1
            }

        case notificationActionTypes.READ_NOTIFICATION_FAILED:
            return {
                ...state,
                error: action.payload.error,
                isReadRequestLoading: false
            }

        case notificationActionTypes.USER_ACCEPT_DATASET_INVITATION:
        case notificationActionTypes.USER_REJECT_DATASET_INVITATION:
        case notificationActionTypes.GROUP_ACCEPT_DATASET_INVITATION:
        case notificationActionTypes.GROUP_REJECT_DATASET_INVITATION:
            state.notifications.forEach((aNotification, i) => {
                if(aNotification.id === action.payload.notificationID)
                    state.notifications.splice(i, 1)
            })
            return {
                ...state,
                notifications: [
                    ...state.notifications
                ]
            }

        case notificationActionTypes.USER_ACCEPT_INVITATION_REQUEST:
            return {
                ...state,
                isUserAcceptRequestLoading: true
            }

        case notificationActionTypes.USER_ACCEPT_INVITATION_SUCCESS:
            return {
                ...state,
                isUserAcceptRequestLoading: false,
                notifications: state.notifications.map((aNotification) => 
                    aNotification.id === action.payload.notificationID 
                    ?   action.payload.newNotification
                    :   aNotification
                )
            }

        case notificationActionTypes.USER_ACCEPT_INVITATION_FAILED:
            return {
                ...state,
                error: action.payload.error,
                isUserAcceptRequestLoading: false
            }

        case notificationActionTypes.USER_REJECT_INVITATION_SUCCESS:
            state.notifications.forEach((aNotification, i) => {
                if(aNotification.id === action.payload.notificationID)
                    state.notifications.splice(i, 1)
            })
            return {
                ...state,
                isUserAcceptRequestLoading: false,
                notifications: [
                    ...state.notifications
                ]
            }

        case notificationActionTypes.ADMIN_APPROVE_INVITATION_SUCCESS:
        case notificationActionTypes.ADMIN_DECLINE_INVITATION_SUCCESS:
            state.notifications.forEach((aNotification, i) => {
                if(aNotification.id === action.payload.notificationID)
                    state.notifications.splice(i, 1)
            })
            return {
                ...state,
                notifications: [
                    ...state.notifications
                ]
            }

        case notificationActionTypes.ADMIN_ACCEPT_JOIN_REQUEST_SUCCESS:
        case notificationActionTypes.ADMIN_REJECT_JOIN_REQUEST_SUCCESS:
            state.notifications.forEach((aNotification, i) => {
                if(aNotification.id === action.payload.notificationID)
                    state.notifications.splice(i, 1)
            })
            return {
                ...state,
                notifications: [
                    ...state.notifications
                ]
            }

        case notificationActionTypes.APPEND_NOTIFICATION:
            return {
                ...state,
                notifications: [
                    ...state.notifications,
                    action.payload.notification
                ],
                noOfUnreadNotif: state.noOfUnreadNotif + 1
            }
    
        default:
            return state;
    }
}

export default notificationReducer;