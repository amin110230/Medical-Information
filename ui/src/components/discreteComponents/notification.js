import React from "react";
import { connect } from 'react-redux';
import { Dropdown, DropdownButton, ButtonGroup, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCheck, faTimes, faCircle } from '@fortawesome/free-solid-svg-icons';
import { notificationTypes } from "../../dataaccess/notificationDataAccess";
import { readNotification, acceptGroupInvitation, approveGroupInvitation, 
    acceptJoinRequest, acceptDatasetInvitation, acceptDatasetGroupInvitation } from '../../store/notificationStore/notificationAction';

class Notifications extends React.Component {

    handleNotificationRead = (e, notification) => {
        e.stopPropagation();
        if (!notification.isRead) {
            this.props.readNotification(notification);
        }
    }

    handleInvitationAcceptance = (e, acceptanceStatus, notification) => {
        e.stopPropagation();
        this.props.acceptGroupInvitation(acceptanceStatus, notification);
    }

    handleAdminApproval = (e, acceptanceStatus, notification) => {
        e.stopPropagation();
        this.props.approveGroupInvitation(acceptanceStatus, notification);
    }

    handleJoinRequestApproval = (e, acceptanceStatus, notification) => {
        e.stopPropagation();
        this.props.acceptJoinRequest(acceptanceStatus, notification);
    }

    handleShareDatasetAcceptance = (e, acceptanceStatus, notification) => {
        e.stopPropagation();
        this.props.acceptShareDatasetRequest(acceptanceStatus, notification);
    }

    handleShareDatasetGroupAcceptance = (e, acceptanceStatus, notification) => {
        e.stopPropagation();
        this.props.acceptShareDatasetGroupRequest(acceptanceStatus, notification);
    }

    renderNotifications = (notifications) => {
        if (!notifications.length) {
            return (
                <Dropdown.Item as='tr' style={{ width: '30vw' }}>
                    <td key='0'>
                        <label>No notification</label>
                    </td>
                </Dropdown.Item>
            );
        } else {
            return (
                notifications.map(notification => {
                    switch (notification.type) {
                        case notificationTypes.GROUP_INVITATION:
                            return this.renderGroupInvitation(notification);

                        case notificationTypes.GROUP_INVITATION_ACCEPTED:
                            return this.renderGroupInvitationAccepted(notification);

                        case notificationTypes.GROUP_INVITATION_REJECTED:
                            return this.renderGroupInvitationRejected(notification);

                        case notificationTypes.GROUP_INVITATION_ACCEPTED_USER:
                            return this.renderGroupInvitationAcceptedUser(notification);

                        case notificationTypes.GROUP_INVITATION_APPROVAL:
                            return this.renderGroupInvitationApproval(notification);

                        case notificationTypes.GROUP_INVITATION_APPROVAL_ACCEPTED:
                            return this.renderGroupInvitationApprovalAccepted(notification);

                        case notificationTypes.GROUP_INVITATION_APPROVAL_REJECTED:
                            return this.renderGroupInvitationApprovalRejected(notification);

                        case notificationTypes.GROUP_INVITATION_ACCEPTED_USER_NOTIFY_ADMIN:
                            return this.renderGroupInvitationAcceptedUserNotifyAdmin(notification);

                        case notificationTypes.GROUP_REQUEST:
                            return this.renderGroupRequest(notification);

                        case notificationTypes.GROUP_REQUEST_ACCEPTED:
                            return this.renderGroupRequestAccepted(notification);

                        case notificationTypes.GROUP_REQUEST_REJECTED:
                            return this.renderGroupRequestRejected(notification);

                        case notificationTypes.WORKFLOW_COMPLETION:
                            return this.renderWorkflowCompletion(notification);

                        case notificationTypes.DATASET_USER_INVITATION:
                            return this.renderDatasetUserInvitation(notification);

                        case notificationTypes.DATASET_USER_INVITATION_ACCEPTED:
                            return this.renderDatasetUserInvitationAccepted(notification);

                        case notificationTypes.DATASET_USER_INVITATION_REJECTED:
                            return this.renderDatasetUserInvitationRejected(notification);

                        case notificationTypes.DATASET_GROUP_INVITATION:
                            return this.renderDatasetGroupInvitation(notification);

                        case notificationTypes.DATASET_GROUP_INVITATION_ACCEPTED:
                            return this.renderDatasetGroupInvitationAccepted(notification);

                        case notificationTypes.DATASET_GROUP_INVITATION_REJECTED:
                            return this.renderDatasetGroupInvitationRejected(notification);

                        default:
                            return null;
                    }
                })
            )
        }
    }

    renderGroupInvitation = (notification) => {
        return (
            <div style={{display: 'table'}} onClick={(e) => {e.preventDefault(); e.stopPropagation()}}>
                <Dropdown.Item as='tr' style={{ width: '30vw' }}>
                    <td key={notification.id} style={{cursor: 'pointer'}} onClick={(e) => this.handleNotificationRead(e, notification)}>
                        <span style={{ width: '100%', overflowWrap: 'anywhere', display: 'block', whiteSpace: 'normal', color: notification.isRead ? 'gray' : '' }}>
                            <b>{notification.senderName}</b> invited you to join <b>{notification.groupName}</b>
                        </span>
                        <span className='pull-right'>
                            <ButtonGroup>
                                <FontAwesomeIcon title='accept' icon={faCheck} style={{ color: 'green', fontSize: 'x-large', margin: '0em 1em' }} onClick={(e) => this.handleInvitationAcceptance(e, true, notification)}></FontAwesomeIcon>
                                <FontAwesomeIcon title='reject' icon={faTimes} style={{ color: 'red', fontSize: 'x-large' }} onClick={(e) => this.handleInvitationAcceptance(e, false, notification)}></FontAwesomeIcon>
                            </ButtonGroup>
                        </span>
                    </td>
                    <Dropdown.Divider /> 
                </Dropdown.Item>
                {
                    !notification.isRead
                        ?   <span onClick={(e) => this.handleNotificationRead(e, notification)} style={{ color: '#337AB7', verticalAlign: 'middle', display: 'table-cell' }}>
                                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                            </span>
                        :   ''
                }
            </div>
        );
    }

    renderGroupInvitationAccepted = (notification) => {
        return (
            <div style={{display: 'table'}} onClick={(e) => e.stopPropagation()}>
                <Dropdown.Item as='tr' style={{ width: '30vw' }}>
                    <td key={notification.id} style={{cursor: 'pointer'}} onClick={(e) => this.handleNotificationRead(e, notification)}>
                        <span style={{ width: '100%', overflowWrap: 'anywhere', display: 'block', whiteSpace: 'normal', color: notification.isRead ? 'gray' : '' }}>
                            <b>{notification.userName}</b> accpeted your invitation to join <b>{notification.groupName}</b>
                        </span>
                    </td>
                    <Dropdown.Divider /> 
                </Dropdown.Item>
                {
                    !notification.isRead
                        ?   <span onClick={(e) => this.handleNotificationRead(e, notification)} style={{ color: '#337AB7', verticalAlign: 'middle', display: 'table-cell' }}>
                                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                            </span>
                        :   ''
                }
            </div>
        );
    }

    renderGroupInvitationAcceptedUser = (notification) => {
        return (
            <div style={{display: 'table'}} onClick={(e) => e.stopPropagation()}>
                <Dropdown.Item as='tr' style={{ width: '30vw' }}>
                    <td key={notification.id} style={{cursor: 'pointer'}} onClick={(e) => this.handleNotificationRead(e, notification)}>
                        <span style={{ width: '100%', overflowWrap: 'anywhere', display: 'block', whiteSpace: 'normal', color: notification.isRead ? 'gray' : '' }}>
                            Now you are a member of <b>{notification.groupName}</b>
                        </span>
                    </td>
                    <Dropdown.Divider /> 
                </Dropdown.Item>
                {
                    !notification.isRead
                        ?   <span onClick={(e) => this.handleNotificationRead(e, notification)} style={{ color: '#337AB7', verticalAlign: 'middle', display: 'table-cell' }}>
                                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                            </span>
                        :   ''
                }
            </div>
        );
    }

    renderGroupInvitationAcceptedUserNotifyAdmin = (notification) => {
        return (
            <div style={{display: 'table'}}>
                <Dropdown.Item as='tr' style={{ width: '30vw' }} onSelectItem={(e) => e.stopPropagation()}>
                    <td key={notification.id} style={{cursor: 'pointer'}} onClick={(e) => this.handleNotificationRead(e, notification)}>
                        <span style={{ width: '100%', overflowWrap: 'anywhere', display: 'block', whiteSpace: 'normal', color: notification.isRead ? 'gray' : ''}}>
                            <b>{notification.userName}</b> joined to <b>{notification.groupName}</b>
                        </span>
                    </td>
                    <Dropdown.Divider />
                </Dropdown.Item>
                {
                    !notification.isRead
                        ?   <span onClick={(e) => this.handleNotificationRead(e, notification)} style={{ color: '#337AB7', verticalAlign: 'middle', display: 'table-cell' }}>
                                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                            </span>
                        :   ''
                }
            </div>
        );
    }

    renderGroupInvitationRejected = (notification) => {
        return (
            <div style={{display: 'table'}} onClick={(e) => e.stopPropagation()}>
                <Dropdown.Item as='tr' style={{ width: '30vw' }}>
                    <td key={notification.id} style={{cursor: 'pointer'}} onClick={(e) => this.handleNotificationRead(e, notification)}>
                        <span style={{ width: '100%', overflowWrap: 'anywhere', display: 'block', whiteSpace: 'normal', color: notification.isRead ? 'gray' : '' }}>
                            <b>{notification.userName}</b> rejected your invitation to join <b>{notification.groupName}</b>
                        </span>
                    </td>
                    <Dropdown.Divider /> 
                </Dropdown.Item>
                {
                    !notification.isRead
                        ?   <span onClick={(e) => this.handleNotificationRead(e, notification)} style={{ color: '#337AB7', verticalAlign: 'middle', display: 'table-cell' }}>
                                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                            </span>
                        :   ''
                }
            </div>
        );
    }

    renderGroupInvitationApproval = (notification) => {
        return (
            <div style={{display: 'table'}} onClick={(e) => e.stopPropagation()}>
                <Dropdown.Item as='tr' style={{ width: '30vw' }}>
                    <td key={notification.id} style={{cursor: 'pointer'}} onClick={(e) => this.handleNotificationRead(e, notification)}>
                        <span style={{ width: '100%', overflowWrap: 'anywhere', display: 'block', whiteSpace: 'normal', color: notification.isRead ? 'gray' : '' }}>
                            <b>{notification.senderName}</b> invited <b>{notification.receiverName}</b> to join <b>{notification.groupName}</b>
                        </span>
                        <span className='pull-right'>
                            <ButtonGroup>
                                <FontAwesomeIcon title='approve' icon={faCheck} style={{ color: 'green', fontSize: 'x-large', margin: '0em 1em' }} onClick={(e) => this.handleAdminApproval(e, true, notification)}></FontAwesomeIcon>
                                <FontAwesomeIcon title='decline' icon={faTimes} style={{ color: 'red', fontSize: 'x-large' }} onClick={(e) => this.handleAdminApproval(e, false, notification)}></FontAwesomeIcon>
                            </ButtonGroup>
                        </span> 
                    </td>
                    <Dropdown.Divider /> 
                </Dropdown.Item>
                {
                    !notification.isRead
                        ?   <span onClick={(e) => this.handleNotificationRead(e, notification)} style={{ color: '#337AB7', verticalAlign: 'middle', display: 'table-cell' }}>
                                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                            </span>
                        :   ''
                }
            </div>
        );
    }

    renderGroupInvitationApprovalAccepted = (notification) => {
        return (
            <div style={{display: 'table'}} onClick={(e) => e.stopPropagation()}>
                <Dropdown.Item as='tr' style={{ width: '30vw' }}>
                    <td key={notification.id} style={{cursor: 'pointer'}} onClick={(e) => this.handleNotificationRead(e, notification)}>
                        <span style={{ width: '100%', overflowWrap: 'anywhere', display: 'block', whiteSpace: 'normal', color: notification.isRead ? 'gray' : '' }}>
                            <b>{notification.adminName}</b> approved your request to add <b>{notification.receiverName}</b> into <b>{notification.groupName}</b>
                        </span>
                    </td>
                    <Dropdown.Divider /> 
                </Dropdown.Item>
                {
                    !notification.isRead
                        ?   <span onClick={(e) => this.handleNotificationRead(e, notification)} style={{ color: '#337AB7', verticalAlign: 'middle', display: 'table-cell' }}>
                                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                            </span>
                        :   ''
                }
            </div>
        );
    }

    renderGroupInvitationApprovalRejected = (notification) => {
        return (
            <div style={{display: 'table'}} onClick={(e) => e.stopPropagation()}>
                <Dropdown.Item as='tr' style={{ width: '30vw' }}>
                    <td key={notification.id} style={{cursor: 'pointer'}} onClick={(e) => this.handleNotificationRead(e, notification)}>
                        <span style={{ width: '100%', overflowWrap: 'anywhere', display: 'block', whiteSpace: 'normal', color: notification.isRead ? 'gray' : '' }}>
                            <b>{notification.adminName}</b> rejected your request to add <b>{notification.receiverName}</b> into <b>{notification.groupName}</b>
                        </span>
                    </td>
                    <Dropdown.Divider /> 
                </Dropdown.Item>
                {
                    !notification.isRead
                        ?   <span onClick={(e) => this.handleNotificationRead(e, notification)} style={{ color: '#337AB7', verticalAlign: 'middle', display: 'table-cell' }}>
                                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                            </span>
                        :   ''
                }
            </div>
        );
    }

    renderGroupRequest = (notification) => {
        return (
            <div style={{display: 'table'}} onClick={(e) => e.stopPropagation()}>
                <Dropdown.Item as='tr' style={{ width: '30vw' }}>
                    <td key={notification.id} style={{cursor: 'pointer'}} onClick={(e) => this.handleNotificationRead(e, notification)}>
                        <span style={{ width: '100%', overflowWrap: 'anywhere', display: 'block', whiteSpace: 'normal', color: notification.isRead ? 'gray' : '' }}>
                            <b>{notification.userName}</b> wants to join <b>{notification.groupName}</b>
                        </span>
                        <span className='pull-right'>
                            <ButtonGroup>
                                <FontAwesomeIcon title='accept' icon={faCheck} style={{ color: 'green', fontSize: 'x-large', margin: '0em 1em' }} onClick={(e) => this.handleJoinRequestApproval(e, true, notification)}></FontAwesomeIcon>
                                <FontAwesomeIcon title='reject' icon={faTimes} style={{ color: 'red', fontSize: 'x-large' }} onClick={(e) => this.handleJoinRequestApproval(e, false, notification)}></FontAwesomeIcon>
                            </ButtonGroup>
                        </span>
                    </td>
                    <Dropdown.Divider /> 
                </Dropdown.Item>
                {
                    !notification.isRead
                        ?   <span onClick={(e) => this.handleNotificationRead(e, notification)} style={{ color: '#337AB7', verticalAlign: 'middle', display: 'table-cell' }}>
                                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                            </span>
                        :   ''
                }
            </div>
        );
    }

    renderGroupRequestAccepted = (notification) => {
        return (
            <div style={{display: 'table'}} onClick={(e) => e.stopPropagation()}>
                <Dropdown.Item as='tr' style={{ width: '30vw' }}>
                    <td key={notification.id} style={{cursor: 'pointer'}} onClick={(e) => this.handleNotificationRead(e, notification)}>
                        <span style={{ width: '100%', overflowWrap: 'anywhere', display: 'block', whiteSpace: 'normal', color: notification.isRead ? 'gray' : '' }}>
                            <b>{notification.adminName}</b> accpeted your request to join <b>{notification.groupName}</b>
                        </span>
                    </td>
                    <Dropdown.Divider /> 
                </Dropdown.Item>
                {
                    !notification.isRead
                        ?   <span onClick={(e) => this.handleNotificationRead(e, notification)} style={{ color: '#337AB7', verticalAlign: 'middle', display: 'table-cell' }}>
                                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                            </span>
                        :   ''
                }
            </div>
        );
    }

    renderGroupRequestRejected = (notification) => {
        return (
            <div style={{display: 'table'}} onClick={(e) => e.stopPropagation()}>
                <Dropdown.Item as='tr' style={{ width: '30vw' }}>
                    <td key={notification.id} style={{cursor: 'pointer'}} onClick={(e) => this.handleNotificationRead(e, notification)}>
                        <span style={{ width: '100%', overflowWrap: 'anywhere', display: 'block', whiteSpace: 'normal', color: notification.isRead ? 'gray' : '' }}>
                            <b>{notification.adminName}</b> rejected your request to join <b>{notification.groupName}</b>
                        </span>
                    </td>
                    
                    <Dropdown.Divider /> 
                </Dropdown.Item>
                {
                    !notification.isRead
                        ?   <span onClick={(e) => this.handleNotificationRead(e, notification)} style={{ color: '#337AB7', verticalAlign: 'middle', display: 'table-cell' }}>
                                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                            </span>
                        :   ''
                }
            </div>
        );
    }

    renderNotficationsHeader = (numberOfUnreadNotfications) => {
        return (
            <label>
                <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                {
                    numberOfUnreadNotfications !== 0 &&
                    <sup style={{left: '-0.5em'}}>
                        <Badge variant="danger" pill>{numberOfUnreadNotfications}</Badge>
                    </sup>
                }
            </label>
        )
    }

    renderWorkflowCompletion = (notification) => {
        return (
            <div style={{display: 'table'}} onClick={(e) => e.stopPropagation()}>
                <Dropdown.Item as='tr' style={{ width: '30vw' }}>
                    <td key={notification.id} style={{cursor: 'pointer'}} onClick={(e) => this.handleNotificationRead(e, notification)}>
                        <span style={{ width: '100%', overflowWrap: 'anywhere', display: 'block', whiteSpace: 'normal', color: notification.isRead ? 'gray' : '' }}>
                            <b>{notification.workflowName}</b> workflow <b>{notification.status}</b>
                        </span>
                    </td>
                    <Dropdown.Divider /> 
                </Dropdown.Item>
                {
                    !notification.isRead
                        ?   <span onClick={(e) => this.handleNotificationRead(e, notification)} style={{ color: '#337AB7', verticalAlign: 'middle', display: 'table-cell' }}>
                                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                            </span>
                        :   ''
                }
            </div>
        );
    }

    renderDatasetUserInvitation = (notification) => {
        return (
            <div style={{display: 'table'}} onClick={(e) => e.stopPropagation()}>
                <Dropdown.Item as='tr' style={{ width: '30vw' }}>
                    <td key={notification.id} style={{cursor: 'pointer'}} onClick={(e) => this.handleNotificationRead(e, notification)}>
                        <span style={{ width: '100%', overflowWrap: 'anywhere', display: 'block', whiteSpace: 'normal', color: notification.isRead ? 'gray' : '' }}>
                            <b>{notification.senderName}</b> wants to share dataset: <b>{notification.datasetName}</b>
                        </span>
                        <span className='pull-right'>
                            <ButtonGroup>
                                <FontAwesomeIcon title='accept' icon={faCheck} style={{ color: 'green', fontSize: 'x-large', margin: '0em 1em' }} onClick={(e) => this.handleShareDatasetAcceptance(e, true, notification)}></FontAwesomeIcon>
                                <FontAwesomeIcon title='reject' icon={faTimes} style={{ color: 'red', fontSize: 'x-large' }} onClick={(e) => this.handleShareDatasetAcceptance(e, false, notification)}></FontAwesomeIcon>
                            </ButtonGroup>
                        </span>
                    </td>
                    <Dropdown.Divider /> 
                </Dropdown.Item>
                {
                    !notification.isRead
                        ?   <span onClick={(e) => this.handleNotificationRead(e, notification)} style={{ color: '#337AB7', verticalAlign: 'middle', display: 'table-cell' }}>
                                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                            </span>
                        :   ''
                }
            </div>
        );
    }

    renderDatasetUserInvitationAccepted = (notification) => {
        return (
            <div style={{display: 'table'}} onClick={(e) => e.stopPropagation()}>
                <Dropdown.Item as='tr' style={{ width: '30vw' }}>
                    <td key={notification.id} style={{cursor: 'pointer'}} onClick={(e) => this.handleNotificationRead(e, notification)}>
                        <span style={{ width: '100%', overflowWrap: 'anywhere', display: 'block', whiteSpace: 'normal', color: notification.isRead ? 'gray' : '' }}>
                            <b>{notification.senderName}</b> accpeted your share dataset invitation for <b>{notification.datasetName}</b>
                        </span>
                    </td>
                    <Dropdown.Divider /> 
                </Dropdown.Item>
                {
                    !notification.isRead
                        ?   <span onClick={(e) => this.handleNotificationRead(e, notification)} style={{ color: '#337AB7', verticalAlign: 'middle', display: 'table-cell' }}>
                                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                            </span>
                        :   ''
                }
            </div>
        );
    }

    renderDatasetUserInvitationRejected = (notification) => {
        return (
            <div style={{display: 'table'}} onClick={(e) => e.stopPropagation()}>
                <Dropdown.Item as='tr' style={{ width: '30vw' }}>
                    <td key={notification.id} style={{cursor: 'pointer'}} onClick={(e) => this.handleNotificationRead(e, notification)}>
                        <span style={{ width: '100%', overflowWrap: 'anywhere', display: 'block', whiteSpace: 'normal', color: notification.isRead ? 'gray' : '' }}>
                            <b>{notification.senderName}</b> rejected your share dataset invitation for <b>{notification.datasetName}</b>
                        </span>
                    </td>
                    <Dropdown.Divider /> 
                </Dropdown.Item>
                {
                    !notification.isRead
                        ?   <span onClick={(e) => this.handleNotificationRead(e, notification)} style={{ color: '#337AB7', verticalAlign: 'middle', display: 'table-cell' }}>
                                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                            </span>
                        :   ''
                }
            </div>
        );
    }

    renderDatasetGroupInvitation = (notification) => {
        return (
            <div style={{display: 'table'}} onClick={(e) => e.stopPropagation()}>
                <Dropdown.Item as='tr' style={{ width: '30vw' }}>
                    <td key={notification.id} style={{cursor: 'pointer'}} onClick={(e) => this.handleNotificationRead(e, notification)}>
                        <span style={{ width: '100%', overflowWrap: 'anywhere', display: 'block', whiteSpace: 'normal', color: notification.isRead ? 'gray' : '' }}>
                            <b>{notification.senderName}</b> wants to share dataset: <b>{notification.datasetName}</b>
                        </span>
                        <span className='pull-right'>
                            <ButtonGroup>
                                <FontAwesomeIcon title='accept' icon={faCheck} style={{ color: 'green', fontSize: 'x-large', margin: '0em 1em' }} onClick={(e) => this.handleShareDatasetGroupAcceptance(e, true, notification)}></FontAwesomeIcon>
                                <FontAwesomeIcon title='reject' icon={faTimes} style={{ color: 'red', fontSize: 'x-large' }} onClick={(e) => this.handleShareDatasetGroupAcceptance(e, false, notification)}></FontAwesomeIcon>
                            </ButtonGroup>
                        </span>
                    </td>
                    <Dropdown.Divider /> 
                </Dropdown.Item>
                {
                    !notification.isRead
                        ?   <span onClick={(e) => this.handleNotificationRead(e, notification)} style={{ color: '#337AB7', verticalAlign: 'middle', display: 'table-cell' }}>
                                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                            </span>
                        :   ''
                }
            </div>
        );
    }

    renderDatasetGroupInvitationAccepted = (notification) => {
        return (
            <div style={{display: 'table'}} onClick={(e) => e.stopPropagation()}>
                <Dropdown.Item as='tr' style={{ width: '30vw' }}>
                    <td key={notification.id} style={{cursor: 'pointer'}} onClick={(e) => this.handleNotificationRead(e, notification)}>
                        <span style={{ width: '100%', overflowWrap: 'anywhere', display: 'block', whiteSpace: 'normal', color: notification.isRead ? 'gray' : '' }}>
                            <b>{notification.groupName}</b>'s group admin accepted your share dataset invitation for <b>{notification.datasetName}</b>
                        </span>
                    </td>
                    <Dropdown.Divider /> 
                </Dropdown.Item>
                {
                    !notification.isRead
                        ?   <span onClick={(e) => this.handleNotificationRead(e, notification)} style={{ color: '#337AB7', verticalAlign: 'middle', display: 'table-cell' }}>
                                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                            </span>
                        :   ''
                }
            </div>
        );
    }

    renderDatasetGroupInvitationRejected = (notification) => {
        return (
            <div style={{display: 'table'}} onClick={(e) => e.stopPropagation()}>
                <Dropdown.Item as='tr' style={{ width: '30vw' }}>
                    <td key={notification.id} style={{cursor: 'pointer'}} onClick={(e) => this.handleNotificationRead(e, notification)}>
                        <span style={{ width: '100%', overflowWrap: 'anywhere', display: 'block', whiteSpace: 'normal', color: notification.isRead ? 'gray' : '' }}>
                            <b>{notification.groupName}</b>'s group admin rejected your share dataset invitation for <b>{notification.datasetName}</b>
                        </span>
                    </td>
                    <Dropdown.Divider /> 
                </Dropdown.Item>
                {
                    !notification.isRead
                        ?   <span onClick={(e) => this.handleNotificationRead(e, notification)} style={{ color: '#337AB7', verticalAlign: 'middle', display: 'table-cell' }}>
                                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                            </span>
                        :   ''
                }
            </div>
        );
    }

    render() {
        return (
            <DropdownButton className='mr-sm-1' id='ddl-notification'
                title={this.renderNotficationsHeader(this.props.notifications.noOfUnreadNotif)}
                alignRight
            >
                <Dropdown.Header class="notification-header text-light bg-dark">
                    <span>Notifications ({this.props.notifications.noOfUnreadNotif})</span>
                </Dropdown.Header>
                
                <div style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                    {this.renderNotifications(this.props.notifications.notifications)}
                </div>
            </DropdownButton>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notifications: state.notifications
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        readNotification: (notification) => dispatch(readNotification(notification)),
        acceptGroupInvitation: (acceptanceStatus, notification) => dispatch(acceptGroupInvitation(acceptanceStatus, notification)),
        approveGroupInvitation: (acceptanceStatus, notification) => dispatch(approveGroupInvitation(acceptanceStatus, notification)),
        acceptJoinRequest: (acceptanceStatus, notification) => dispatch(acceptJoinRequest(acceptanceStatus, notification)),
        acceptShareDatasetRequest: (acceptanceStatus, notification) => dispatch(acceptDatasetInvitation(acceptanceStatus, notification)),
        acceptShareDatasetGroupRequest: (acceptanceStatus, notification) => dispatch(acceptDatasetGroupInvitation(acceptanceStatus, notification))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)
