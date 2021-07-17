import qs from 'qs';
import { getBearerToken, baseUrl } from "../dataaccess/baseDataAccess";
import { axiosCall } from "./baseDataAccess";


export const notificationTypes = {
    DATASET_USER_INVITATION : 'dataset_user_invitation',
    DATASET_USER_INVITATION_ACCEPTED : 'dataset_user_invitation_accepted',
    DATASET_USER_INVITATION_REJECTED : 'dataset_user_invitation_rejected',
    DATASET_GROUP_INVITATION : 'dataset_group_invitation',
    DATASET_GROUP_INVITATION_ACCEPTED : 'dataset_group_invitation_accepted',
    DATASET_GROUP_INVITATION_REJECTED : 'dataset_group_invitation_rejected',
    GROUP_INVITATION : 'group_invitation',
    GROUP_INVITATION_ACCEPTED : 'group_invitation_accepted',
    GROUP_INVITATION_REJECTED : 'group_invitation_rejected',
    GROUP_INVITATION_ACCEPTED_USER : 'group_invitation_accepted_user',
    GROUP_INVITATION_ACCEPTED_USER_NOTIFY_ADMIN : 'group_invitation_accepted_user_notify_admin',
    GROUP_INVITATION_APPROVAL : 'group_invitation_approval',
    GROUP_INVITATION_APPROVAL_ACCEPTED : 'group_invitation_approval_accepted',
    GROUP_INVITATION_APPROVAL_REJECTED : 'group_invitation_approval_rejected',
    GROUP_REQUEST : 'group_request',
    GROUP_REQUEST_ACCEPTED : 'group_request_accepted',
    GROUP_REQUEST_REJECTED : 'group_request_rejected',
    WORKFLOW_COMPLETION : 'workflow_completion'
}

export const loadInvitationNotifications = () => {
    return axiosCall.get(baseUrl+'/api/notifications', {
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
        return {
            res: error,
            success: false
        }
    });
}

export const readNotifications = (form) => {
    return axiosCall.post(baseUrl+'/api/notification/read', form, {
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
        return {
            res: error,
            success: false
        }
    });
}

export const acceptDatasetInvitation = (acceptanceStatus, notification) => {
    return axiosCall.get(baseUrl+'/api/dataset/share/user/approval', {
        params: {
            approval: acceptanceStatus,
            notification_id: notification.id
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
    .catch(error => {
        return {
            res: error,
            success: false
        }
    });
}

export const acceptDatasetGroupInvitation = (acceptanceStatus, notification) => {
    return axiosCall.get(baseUrl+'/api/dataset/share/group/approval', {
        params: {
            approval: acceptanceStatus,
            notification_id: notification.id
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
    .catch(error => {
        return {
            res: error,
            success: false
        }
    });
}

export const acceptGroupInvitation = (acceptanceStatus, notification) => {
    return axiosCall.get(baseUrl+'/api/group/invite/member/user/approval', {
        params: {
            approval: acceptanceStatus,
            notification_id: notification.id
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
    .catch(error => {
        return {
            res: error,
            success: false
        }
    });
}

export const approveGroupInvitation = (acceptanceStatus, notification) => {
    return axiosCall.get(baseUrl+'/api/group/invite/member/admin/approval', {
        params: {
            approval: acceptanceStatus,
            notification_id: notification.id
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
    .catch(error => {
        return {
            res: error,
            success: false
        }
    });
}

export const acceptJoinRequest = (acceptanceStatus, notification) => {
    return axiosCall.get(baseUrl+'/api/group/join/admin/approval', {
        params: {
            approval: acceptanceStatus,
            notification_id: notification.id
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
    .catch(error => {
        return {
            res: error,
            success: false
        }
    });
}