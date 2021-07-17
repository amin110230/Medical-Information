import React from 'react';
import { Card, Row, Col, Modal } from 'react-bootstrap';
import { PropagateNotifier } from '../../utilityComponents/propagateLoader';
import { loadDetails, hideDatasetDetailModal } from '../../../store/datasetsStore/datasetActions';
import { getDatasetHeader } from '../../../dataaccess/datasetsDataAccess';
import DatasetBody from './datasetBody';
import DatasetHeader from './datasetHeader';
import { connect } from 'react-redux';

class DatasetDetailModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headerData: [],
            isDetailsLoading: true
        }
    }

    handleClose = () => {
        this.props.hideDatasetDetailModal();
    }

    loadDatasetDetails = (datasetId) => {
        getDatasetHeader(datasetId)
        .then(response => {
            if(response.success){
                this.setState({
                    headerData: response.res.data,
                    isDetailsLoading: false
                })
            }
            else{
                this.setState({
                    headerData: [],
                    isDetailsLoading: false
                })
            }
        })

        this.props.loadDetails(datasetId)
    }

    renderDatasetDetails = () => {
        return (
            !this.state.isDetailsLoading
            ?   <Card>
                    <Card.Header style={{backgroundColor: 'lightblue', color: 'black'}}>
                        {
                            this.state.headerData.length !== 0
                            ?   <DatasetHeader properties={this.state.headerData} />
                            :   <h5>No Dataset Found</h5>
                        }
                    </Card.Header>
                    <Card.Body>
                        <span className='floating-toolbar'>Please find this dataset into dataset tab for write access!</span>
                        <br />
                        <DatasetBody />
                    </Card.Body>
                </Card>

            :   <PropagateNotifier isLoading={this.state.isDetailsLoading} />    
        )
    }

    render() {
        return (
            <Modal onShow={() => this.loadDatasetDetails(this.props.datasetData.selectedDatasetForDetail)} show={this.props.datasetData.showDatasetDetailModal} onHide={this.handleClose} centered size="xl">
                <Modal.Header closeButton className={"modal-header"}>
                    <Modal.Title className={"modal-header-text"}></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row style={{ maxHeight: '80vh', overflowY: 'auto', margin: 'auto'}}>
                        <Col sm={12}>
                            {this.renderDatasetDetails()}
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        datasetData: state.datasets,
        userData: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadDetails: (datasetID) => dispatch(loadDetails(datasetID)),
        hideDatasetDetailModal: () => dispatch(hideDatasetDetailModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DatasetDetailModal)