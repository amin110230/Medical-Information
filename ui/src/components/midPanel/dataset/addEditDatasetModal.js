import React from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { createDataset, validateDatasetName } from "../../../dataaccess/datasetsDataAccess";
import { NotificationManager } from 'react-notifications';
import { connect } from "react-redux";
import { hideAddDatasetModal, loadDatasets } from '../../../store/datasetsStore/datasetActions';

const initState = {
    name: '',
    groupId: '',
    nameError: '',
    groupIdError: '',
    isCreateButtonDisabled: true
};
let IsFormValid = true;

class AddEditDatasetModal extends React.Component{

    constructor(props){
        super(props);
        this.state = initState;
    }

    handleValidation = () =>{
        IsFormValid = true;

        this.setState({
            nameError: "",
            groupIdError: ""
        })

        if(!this.state.name){
            IsFormValid = false
            this.setState({
                nameError: "Name cannot be empty!"
            })
        }

        if(!this.state.groupId){
            IsFormValid = false
            this.setState({
                groupIdError: "Please select a group ID!"
            })
        }

        return IsFormValid;
    }

    validateUniqueName = (e) => {
        let datasetName = e.target.value

        if(datasetName){
            validateDatasetName(datasetName)
            .then(response => {
                if(response.success){
                    if(response.res.data){
                        IsFormValid = false
                        this.setState({
                            nameError: "This name is taken. Choose another name!"
                        })
                    }
                    else{
                        IsFormValid = true
                        this.setState({
                            nameError: ""
                        })
                    }
                }
                else{
                    NotificationManager.error('Error!', 'Failed to validate dataset name!')
                }
            })
        }
    }


    handleClose = () => {
        this.setState(initState);
        this.props.hideAddDatasetModal();
    }

    createDataset = () => {
        let IsFormValid = this.handleValidation();

        if(IsFormValid){
            createDataset({
                create: {
                    name: this.state.name,
                    group: this.state.groupId,
                    globus_transfer_token: localStorage.getItem('globus_transfer_token')
                }
            }).then(response => {
                if (response.success) {
                    this.props.loadDatasets(1, this.props.datasetStore.numOfItems, true);
                    NotificationManager.success(`${response.res.data.title} has been created!`, 'Success!');
                }
                else{
                    NotificationManager.error('Error!', 'Failed to create dataset!')
                }
            })

            this.handleClose();
        }
    }


    loadGroupDropdownList = (groups) => {
        if(!groups)
            return;
        
        let options = [];
        options.push(<option value='' key='0'>--Select a group--</option>);

        groups.forEach(aGroup => {
            if(aGroup.id > 0){
                options.push(<option value={aGroup.id} key={aGroup.id}>{aGroup.name}</option>)
            }
        })

        return options;
    }

    groupSelectHandler = (e) => {
        this.setState({
            groupId: e.target.value,
            isCreateButtonDisabled: e.target.value ? false: true
        })
    }


    nameChangeHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    render(){
        return(
            <Modal show={this.props.datasetStore.showAddDatasetModal} onHide={this.handleClose} centered size="lg">
                <Modal.Header closeButton className={"modal-header"}>
                    <Modal.Title className={"modal-header-text"}>Create New Dataset</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} controlId="datasetName">
                            <Form.Label column sm="3">
                                Dataset Name:<span className="required-mark">*</span>
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="" onChange={this.nameChangeHandler} onBlur={this.validateUniqueName}/>
                                {this.state.nameError &&
                                    <span sm="3" style={{color:'red'}}>{this.state.nameError}</span>
                                }
                            </Col>
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.createDataset}>
                        Create
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
        datasetStore: state.datasets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideAddDatasetModal: () => dispatch(hideAddDatasetModal()),
        loadDatasets: (pageNum, numOfItems, isInitLoading) => dispatch(loadDatasets(pageNum, numOfItems, isInitLoading))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEditDatasetModal)