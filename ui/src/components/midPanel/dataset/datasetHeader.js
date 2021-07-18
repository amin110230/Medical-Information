import React from 'react';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as faThumbsUpFill, faShareAlt, faEye, faPen } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as faThumbsUpVoid } from '@fortawesome/free-regular-svg-icons';
import { connect } from 'react-redux';
import { 
    handleLike, loadShareableGroups, 
    loadShareableUsers, showShareModal, editDatasetTitle } from '../../../store/datasetsStore/datasetActions';
import Editable from 'react-bootstrap-editable';
import NotificationManager from 'react-notifications/lib/NotificationManager';

class datasetHeader extends React.Component {
    
    shareDataset = (e, dataset) => {
        e.stopPropagation()
        // let txtToCopy = `http://p2irc-data-dev.usask.ca/dataset/${datasetID}`
        // navigator.clipboard.writeText(txtToCopy)
        // NotificationManager.success('URL is copied to clipboard!', "Success!")
        this.props.showShareModal(dataset, dataset.type);
        if (this.props.authStore.isAuthenticated) {
            this.props.loadShareableGroups(dataset.id);
            this.props.loadShareableUsers(dataset.id);
        }
    };

    handleLike = (datasetId, isLiked) => {
        !this.props.authStore.isAuthenticated
        ?   NotificationManager.error("Error!", 'Please login to like dataset!')
        :   this.props.handleLike(datasetId, isLiked);
    }

    likeDataset = (e) => {
        e.stopPropagation()
        this.handleLike(this.props.properties.id, true);
    }

    unlikeDataset = (e) => {
        e.stopPropagation()
        this.handleLike(this.props.properties.id, false);
    }

    editDatasetTitle = (title, datasetId) => {
        let formData = new FormData();
        formData.append('name', title)

        this.props.editDatasetTitle(datasetId, formData);
    }

    renderAdminDatasetTitle = (title, datasetId) => {
        return (
            <h4 onClick={(e) => e.stopPropagation()}>
                <Editable
                    editText={<FontAwesomeIcon icon={faPen} />}
                    initialValue={title}
                    mode="inline"
                    renderCancelElement={null}
                    renderConfirmElement={null}
                    onSubmit={(value) => this.editDatasetTitle(value, datasetId)}
                    showText
                    type="textfield"
                />
            </h4>
        )
    }
    
    render() {
        let {properties} = this.props;

        return (
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32}}>
                <Col xs={19} sm={19} md={19} lg={19} style={{ paddingLeft: '0', paddingRight: '0' }}>
                    <span style={{display: 'flex'}}>
                        {
                            properties.type === 'My dataset'
                            ?   this.renderAdminDatasetTitle(properties.title, properties.id)
                            :   <h4>{properties.title}</h4>    
                        }
                        <button className='dataset-share' title="Share Dataset" onClick={(e) => this.shareDataset(e, properties)}>
                            <FontAwesomeIcon icon={faShareAlt} />
                        </button>
                    </span>
                    <h6>{properties.pid}</h6>
                    <h6>{properties.group}</h6>
                    <a target="_blank" rel="noopener noreferrer" href={properties.url} onClick={(e) => e.stopPropagation()}>{properties.url}</a>
                </Col>
                <Col xs={5} sm={5} md={5} lg={5} style={{ paddingLeft: '0', paddingRight: '0', textAlign: 'right' }}>
                    {
                        properties.liked
                        ?   <Button onClick={(e)=>this.unlikeDataset(e)} style={{background: 'transparent', color: 'black', padding: '2px 5px', border: 'none'}}>
                                <FontAwesomeIcon icon={faThumbsUpFill} />
                                <span> {properties.like}</span>
                            </Button>

                        :   <Button onClick={(e)=>this.likeDataset(e)} style={{background: 'transparent', color: 'black', padding: '2px 5px', border: 'none'}}>
                                <FontAwesomeIcon icon={faThumbsUpVoid} />
                                <span> {properties.like}</span>
                            </Button>
                    }
                    <br />
                    <span>{properties.status}</span> <br />
                    <span>
                        {properties.type}
                    </span>
                    <br/>
                    <span>
                        <FontAwesomeIcon icon={faEye}/>&nbsp;
                        <span>{properties.view}</span>
                    </span>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        datasetStore: state.datasets,
        authStore: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleLike: (datasetId, isLiked) => dispatch(handleLike(datasetId, isLiked)),
        showShareModal: (dataset, type) => dispatch(showShareModal(dataset, type)),
        loadShareableUsers: (datasetId) => dispatch(loadShareableUsers(datasetId)),
        loadShareableGroups: (datasetId) => dispatch(loadShareableGroups(datasetId)),
        editDatasetTitle: (datasetId, title) => dispatch(editDatasetTitle(datasetId, title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(datasetHeader)