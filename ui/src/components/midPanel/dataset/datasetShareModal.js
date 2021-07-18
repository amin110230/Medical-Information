import React, {Fragment} from "react";
import { Modal, Form, Button, Table } from "react-bootstrap";
import { Divider, Tag, Tabs, Typography } from 'antd';
import { connect } from 'react-redux';
import { hideShareModal, shareDatasetWithGroup, shareDatasetWithUser, unshareDatasetWithUser, unshareDatasetWithGroup } from "../../../store/datasetsStore/datasetActions";
import { UsergroupAddOutlined } from '@ant-design/icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { Skeleton } from '@chakra-ui/core';

class DatasetShare extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            shareableDatasetTypes: ['My dataset', 'My group dataset']
        }
    }

    hideModal = () => {
        this.props.hideModal();
    }

    shareWithGroup = (groupId, datasetId) => {
        this.props.shareWithGroup(groupId, datasetId);
    }

    unshareWithGroup = (userId, datasetId) => {
        this.props.unshareWithGroup(userId, datasetId)
    }

    shareWithUser = (userId, datasetId) => {
        this.props.shareWithUser(userId, datasetId)
    }

    unshareWithUser = (userId, datasetId) => {
        this.props.unshareWithUser(userId, datasetId)
    }

    renderShareableUsers = () => {
        return(
            <Table id="shareUser" striped borderless responsive='sm'>
                <tbody style={{ display: 'block', maxHeight: '30vh', overflowY: 'auto' }}>
                    {
                        this.props.datasetStore.isShareableUserLoading 
                        ?   <Fragment>
                                <Skeleton height='3vh' my='1vh'/>
                                <Skeleton height='3vh' my='1vh'/>
                                <Skeleton height='3vh' my='1vh'/>
                                <Skeleton height='3vh' my='1vh'/>
                                <Skeleton height='3vh' my='1vh'/> 
                            </Fragment>
                        :   this.props.datasetStore.shareableUsers.map(user => {
                                return (
                                    <tr key={user.id}>
                                        <td>
                                            <Form.Label>{user.name}</Form.Label>
                                            <Form.Text className="text-muted">
                                                {user.username}
                                            </Form.Text>
                                        </td>
                                        <td className="align-middle">
                                            {!user.isShared 
                                            ?   (   !user.isInvited 
                                                    ?   <Button className='pull-right' size='sm' variant='outline-info' onClick={() => this.shareWithUser(user.id, this.props.datasetStore.selectedDatasetId)}>Share</Button>
                                                    :   <Tag icon={<FontAwesomeIcon icon={faCheckCircle} />} className='pull-right' color="green"> Invitation Sent</Tag>
                                                )
                                            :   <Button className='pull-right' size='sm' variant='success' onClick={() => this.unshareWithUser(user.id, this.props.datasetStore.selectedDatasetId)}>Shared</Button>
                                            }
                                        </td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </Table>
        );
    }

    renderShareableGroups = () => {
        return(
            <Table id="shareGroup" striped borderless responsive='sm'>
                <tbody style={{ display: 'block', maxHeight: '30vh', overflowY: 'auto' }}>
                    {
                        this.props.datasetStore.isShareableGroupLoading 
                        ?   <Fragment>
                                <Skeleton height='3vh' my='1vh'/>
                                <Skeleton height='3vh' my='1vh'/>
                                <Skeleton height='3vh' my='1vh'/>
                                <Skeleton height='3vh' my='1vh'/>
                                <Skeleton height='3vh' my='1vh'/> 
                            </Fragment>
                        :   <Fragment>
                                {
                                    this.props.datasetStore.shareableGroups.parentGroups !== null && 
                                    this.props.datasetStore.shareableGroups.parentGroups.map(group => {
                                        return (
                                            <tr key={group.id}>
                                                <td>
                                                    <Form.Label>{group.name}</Form.Label>
                                                </td>
                                                <td className="align-middle">
                                                    <Button disabled className='pull-right' size='sm' variant='success'>Shared</Button>
                                                    <Tag icon={<UsergroupAddOutlined />} color="processing" className='pull-right'>Parent Group</Tag>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                {
                                    this.props.datasetStore.shareableGroups.shareableGroups.map(group => {
                                        return (
                                            <tr key={group.id}>
                                                <td>
                                                    <Form.Label>{group.name}</Form.Label>
                                                </td>
                                                <td className="align-middle">
                                                    {!group.isShared 
                                                    ?   (   !group.isInvited 
                                                            ?   <Button className='pull-right' size='sm' variant='outline-info' onClick={() => this.shareWithGroup(group.id, this.props.datasetStore.selectedDatasetId)}>Share</Button>
                                                            :   <Tag icon={<FontAwesomeIcon icon={faCheckCircle} />} className='pull-right' color="green"> Invitation Sent to Admin</Tag>
                                                        )
                                                    :   <Button className='pull-right' size='sm' variant='success' onClick={() => this.unshareWithGroup(group.id, this.props.datasetStore.selectedDatasetId)}>Shared</Button>
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                </Fragment>
                            }
                </tbody>
            </Table>
        );
    }

    render(){
        return(
            <Modal show={this.props.datasetStore.showShareModal} centered size='lg' onHide={this.hideModal} scrollable >
                <Modal.Body>
                    <div className='container-fluid'>
                        <Typography.Title 
                            level={4} 
                            copyable={{
                                text: `${process.env.REACT_APP_DATASET_SHARE_LINK_PREFIX}${this.props.datasetStore.selectedDatasetPid}`
                                }}
                            style={{display: "flex"}}
                        >
                            <Form.Control 
                                value={`${process.env.REACT_APP_DATASET_SHARE_LINK_PREFIX}${this.props.datasetStore.selectedDatasetPid}`}
                                disabled
                            />
                        </Typography.Title>
                    </div>
                    {this.state.shareableDatasetTypes.includes(this.props.datasetStore.selectedDatasetType) &&
                        <Fragment>
                            <Divider />
                            <div className='container-fluid'>
                                <Tabs type="card" defaultActiveKey="user">
                                    <Tabs.TabPane tab="Users" key="user">
                                        {this.renderShareableUsers()}
                                    </Tabs.TabPane>
                                    <Tabs.TabPane tab="Groups" key="group">
                                        {this.renderShareableGroups()}
                                    </Tabs.TabPane>
                                </Tabs>
                            </div>
                        </Fragment>
                    }
                </Modal.Body>
            </Modal>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        datasetStore: state.datasets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideModal: () => dispatch(hideShareModal()),
        shareWithUser: (userId, datasetId) => dispatch(shareDatasetWithUser(userId, datasetId)),
        unshareWithUser: (userId, datasetId) => dispatch(unshareDatasetWithUser(userId, datasetId)),
        shareWithGroup: (groupId, datasetId) => dispatch(shareDatasetWithGroup(groupId, datasetId)),
        unshareWithGroup: (groupId, datasetId) => dispatch(unshareDatasetWithGroup(groupId, datasetId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DatasetShare)