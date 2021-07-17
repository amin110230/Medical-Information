import * as notificationActionTypes from "./notificationActionTypes";
import * as notificationDataAccess from "../../dataaccess/notificationDataAccess";
import { loadDatasets, updateActiveAccordion as updateDatasetActiveAccordion} from "../datasetsStore/datasetActions";
import NotificationManager from "react-notifications/lib/NotificationManager";

//Actions
const actionLoadInvitationNotificationRequest = () => {
    return {
        type: notificationActionTypes.LOAD_INVITATION_NOTIFICATION_REQUEST
    }
}

const actionLoadInvitationNotificationSuccess = (payload) => {
    return {
        type: notificationActionTypes.LOAD_INVITATION_NOTIFICATION_SUCCESS,
        payload: payload
    }
}

const actionLoadInvitationNotificationFailed = (payload) => {
    return {
        type: notificationActionTypes.LOAD_INVITATION_NOTIFICATION_FAILED,
        payload: payload
    }
}

const actionReadNotificationRequest = () => {
    return {
        type: notificationActionTypes.READ_NOTIFICATION_REQUEST
    }
}

const actionReadNotificationSuccess = (payload) => {
    return {
        type: notificationActionTypes.READ_NOTIFICATION_SUCCESS,
        payload: payload
    }
}

const actionReadNotificationFailed = (payload) => {
    return {
        type: notificationActionTypes.READ_NOTIFICATION_FAILED,
        payload: payload
    }
}

const actionAcceptDatasetInvitation = (payload) => {
    return {
        type: notificationActionTypes.USER_ACCEPT_DATASET_INVITATION,
        payload: payload
    }
}

const actionRejectDatasetInvitation = (payload) => {
    return {
        type: notificationActionTypes.USER_REJECT_DATASET_INVITATION,
        payload: payload
    }
}

const actionAcceptDatasetGroupInvitation = (payload) => {
    return {
        type: notificationActionTypes.GROUP_ACCEPT_DATASET_INVITATION,
        payload: payload
    }
}

const actionRejectDatasetGroupInvitation = (payload) => {
    return {
        type: notificationActionTypes.GROUP_REJECT_DATASET_INVITATION,
        payload: payload
    }
}

const actionAcceptGroupInvitationRequest = () => {
    return {
        type: notificationActionTypes.USER_ACCEPT_INVITATION_REQUEST
    }
}

const actionAcceptGroupInvitationSuccess = (payload) => {
    return {
        type: notificationActionTypes.USER_ACCEPT_INVITATION_SUCCESS,
        payload: payload
    }
}

const actionAcceptGroupInvitationFailed = (payload) => {
    return {
        type: notificationActionTypes.USER_ACCEPT_INVITATION_FAILED,
        payload: payload
    }
}

const actionRejectGroupInvitationSuccess = (payload) => {
    return {
        type: notificationActionTypes.USER_REJECT_INVITATION_SUCCESS,
        payload: payload
    }
}

const actionApproveGroupInvitationRequest = () => {
    return {
        type: notificationActionTypes.ADMIN_APPROVE_INVITATION_REQUEST
    }
}

const actionApproveGroupInvitationSuccess = (payload) => {
    return {
        type: notificationActionTypes.ADMIN_APPROVE_INVITATION_SUCCESS,
        payload: payload
    }
}

const actionApproveGroupInvitationFailed = (payload) => {
    return {
        type: notificationActionTypes.ADMIN_APPROVE_INVITATION_FAILED,
        payload: payload
    }
}

const actionDeclineGroupInvitationSuccess = (payload) => {
    return {
        type: notificationActionTypes.ADMIN_DECLINE_INVITATION_SUCCESS,
        payload: payload
    }
}

const actionAcceptJoinRequest = () => {
    return {
        type: notificationActionTypes.ADMIN_ACCEPT_JOIN_REQUEST
    }
}

const actionAcceptJoinRequestSuccess = (payload) => {
    return {
        type: notificationActionTypes.ADMIN_ACCEPT_JOIN_REQUEST_SUCCESS,
        payload: payload
    }
}

const actionAcceptJoinRequestFailed = (payload) => {
    return {
        type: notificationActionTypes.ADMIN_ACCEPT_JOIN_REQUEST_FAILED,
        payload: payload
    }
}

const actionRejectJoinRequestSuccess = (payload) => {
    return {
        type: notificationActionTypes.ADMIN_REJECT_JOIN_REQUEST_SUCCESS,
        payload: payload
    }
}

const actionAppendNotif = (payload) => {
    return {
        type: notificationActionTypes.APPEND_NOTIFICATION,
        payload: payload
    }
}
// Action Creators

export const loadInvitationNotifications = () => {
    return (dispatch) => {
        dispatch(actionLoadInvitationNotificationRequest());
        notificationDataAccess.loadInvitationNotifications()
            .then(response => {
                if (response.success) {
                    dispatch(actionLoadInvitationNotificationSuccess({notifications:response.res.data}));
                } else {
                    dispatch(actionLoadInvitationNotificationFailed(response.res));
                }
            })
    }
}

export const readNotification = (notification) => {
    let formData = new FormData();
    formData.append('notification_id', notification.id);
    
    return (dispatch) => {
        dispatch(actionReadNotificationRequest());
        notificationDataAccess.readNotifications(formData)
            .then(response => {
                if (response.success) {
                    if(response.res.data.is_read){
                        dispatch(actionReadNotificationSuccess({notificationID: notification.id}));
                    }
                } else {
                    dispatch(actionReadNotificationFailed(response.res));
                }
            })
    }
}

export const acceptDatasetInvitation = (acceptanceStatus, notification) => {
    return (dispatch, getState) => {
        if(!notification.isRead){
            dispatch(readNotification(notification))
        }
        notificationDataAccess.acceptDatasetInvitation(acceptanceStatus, notification)
            .then(response => {
                if (response.success) {
                    if(response.res.data.status === 'accepted'){
                        dispatch(actionAcceptDatasetInvitation({notificationID: notification.id, newNotification: response.res.data}));
                        NotificationManager.success(response.res.data.Message)
                        dispatch(loadDatasets(1, getState().datasets.numOfItems, true));
                        dispatch(updateDatasetActiveAccordion(null))
                    }
                    else if(response.res.data.status === 'rejected'){ 
                        dispatch(actionRejectDatasetInvitation({notificationID: notification.id}));
                    }
                } else {
                    NotificationManager.error("Error in dataset share acceptance!")
                }
            })
    }
}

export const acceptDatasetGroupInvitation = (acceptanceStatus, notification) => {
    return (dispatch, getState) => {
        if(!notification.isRead){
            dispatch(readNotification(notification))
        }
        notificationDataAccess.acceptDatasetGroupInvitation(acceptanceStatus, notification)
            .then(response => {
                if (response.success) {
                    if(response.res.data.status === 'accepted'){
                        dispatch(actionAcceptDatasetGroupInvitation({notificationID: notification.id, newNotification: response.res.data}));
                        NotificationManager.success(response.res.data.Message)
                        dispatch(loadDatasets(1, getState().datasets.numOfItems, true));
                        dispatch(updateDatasetActiveAccordion(null))
                    }
                    else if(response.res.data.status === 'rejected'){ 
                        dispatch(actionRejectDatasetGroupInvitation({notificationID: notification.id}));
                    }
                } else {
                    NotificationManager.error("Error in dataset share acceptance!")
                }
            })
    }
}

export const acceptGroupInvitation = (acceptanceStatus, notification) => {
    return (dispatch, getState) => {
        if(!notification.isRead){
            dispatch(readNotification(notification))
        }
        dispatch(actionAcceptGroupInvitationRequest());
        notificationDataAccess.acceptGroupInvitation(acceptanceStatus, notification)
            .then(response => {
                if (response.success) {
                    if(response.res.data.status === 'accepted'){
                        dispatch(actionAcceptGroupInvitationSuccess({notificationID: notification.id, newNotification: response.res.data}));
                        // dispatch(updateActiveAccordion(null))
                    }
                    else if(response.res.data.status === 'rejected'){ 
                        dispatch(actionRejectGroupInvitationSuccess({notificationID: notification.id}));
                    }
                } else {
                    dispatch(actionAcceptGroupInvitationFailed(response.res));
                }
            })
    }
}

export const approveGroupInvitation = (acceptanceStatus, notification) => {
    return (dispatch) => {
        if(!notification.isRead){
            dispatch(readNotification(notification))
        }
        dispatch(actionApproveGroupInvitationRequest());
        notificationDataAccess.approveGroupInvitation(acceptanceStatus, notification)
            .then(response => {
                if (response.success) {
                    if(response.res.data.status	=== 'accepted'){
                        dispatch(actionApproveGroupInvitationSuccess({notificationID: notification.id}));
                    }
                    else if(response.res.data.status === 'rejected'){
                        dispatch(actionDeclineGroupInvitationSuccess({notificationID: notification.id}));
                    }
                } else {
                    dispatch(actionApproveGroupInvitationFailed(response.res));
                }
            })
    }
}

export const acceptJoinRequest = (acceptanceStatus, notification) => {
    return (dispatch) => {
        if(!notification.isRead){
            dispatch(readNotification(notification))
        }
        dispatch(actionAcceptJoinRequest());
        notificationDataAccess.acceptJoinRequest(acceptanceStatus, notification)
            .then(response => {
                if (response.success) {
                    if(response.res.data.status	=== 'accepted'){
                        dispatch(actionAcceptJoinRequestSuccess({notificationID: notification.id}));
                    }
                    else if(response.res.data.status === 'rejected'){
                        dispatch(actionRejectJoinRequestSuccess({notificationID: notification.id}));
                    }
                } else {
                    dispatch(actionAcceptJoinRequestFailed(response.res));
                }
            })
    }
}

export const appendNotif = (notification) => {
    return (dispatch) => {
        dispatch(actionAppendNotif({notification: notification}));
    }
}