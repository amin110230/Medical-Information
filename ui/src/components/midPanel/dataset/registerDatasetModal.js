import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { connect } from "react-redux";
import { hideRegisterDatasetModal, registerDataset } from '../../../store/datasetsStore/datasetActions';

class RegisterDatasetModal extends React.Component{

    handleClose = () => {
        this.props.hideModal();
    }

    registerDataset = () => {
        // registerDataset({register: this.props.datasetStore.selectedDatasetId})
        // .then(response => {
        //     if (response.success) {
        //         this.props.appendRegisterUpdate(this.props.datasetId, response.res.data);
        //         NotificationManager.success('Success!', 'Dataset registered!');
        //     }
        //     else{
        //         NotificationManager.error('Error!', 'Failed to register dataset!');
        //     }
        // })
        this.props.registerDataset(this.props.datasetStore.selectedDatasetId);
        this.handleClose();
    }


    render(){
        return(
            <Modal show={this.props.datasetStore.showRegisterDatasetModal} onHide={this.handleClose} centered size="lg">
                <Modal.Header closeButton className={"modal-header"}>
                    <Modal.Title className={"modal-header-text"}>Register Dataset</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{textAlign: 'center'}}><strong>P2IRC Dataset Registrartion Copyright</strong></h4>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.</p>
                    <br/>
                    <Form.Check label = 'I agree with the P2IRC Dataset Registrartion Copyright'/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.registerDataset}>
                        Confirm
                    </Button>
                    <Button variant="danger" onClick={this.handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        datasetStore : state.datasets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideModal: () => dispatch(hideRegisterDatasetModal()),
        registerDataset: (datasetId) => dispatch(registerDataset(datasetId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterDatasetModal)