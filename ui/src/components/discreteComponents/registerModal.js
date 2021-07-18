import React from 'react';
import {Modal, Form, FormGroup, Row, Button, InputGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuilding, faUserSecret } from '@fortawesome/free-solid-svg-icons';

export default class RegisterModal extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            org: null,
            userName: '@user'
        }
    }

    onModalClosed = () => {
        this.props.onRegisterModalClosed();
    }

    register = (event) => {
        this.props.onRegisterModalClosed();
    }

    firstNameChangeHandler = (e) => {
        this.setState({
            firstName: e.target.value
        });
    }

    lastNameChangeHandler = (e) => {
        this.setState({
            userMail: e.target.value
        });
    }

    orgChangeHandler = (e) => {
        this.setState({
            org: e.target.value
        });
    }

    render(){
        return(
            <Modal show={this.props.showRegisterModal} onHide= {this.onModalClosed} centered>
                <Modal.Header closeButton className = "modal-header">
                    <Modal.Title className= "modal-header-text">Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="registerForm">
                        <div style={{display:'flex'}} className="col-sm-11">
                            <FormGroup as={Row} controlId="firstNameId">
                                <Form.Label style={{paddingLeft: '0px'}}>
                                    First Name:<span className="required-mark">*</span>
                                </Form.Label>
                                <InputGroup>
                                    <span className="input-field-icon"><FontAwesomeIcon icon={faUser}/></span>
                                    <Form.Control type="text" onChange={this.firstNameChangeHandler}/>
                                </InputGroup>
                            </FormGroup>

                            <FormGroup as={Row} controlId="lastNameId" style={{marginLeft: '2em', marginRight: '-3em'}}>
                                <Form.Label style={{paddingLeft: '0px'}}>
                                    Last Name:<span className="required-mark">*</span>
                                </Form.Label>
                                <InputGroup>
                                    <span className="input-field-icon"><FontAwesomeIcon icon={faUser}/></span>
                                    <Form.Control type="text" onChange={this.lastNameChangeHandler}/>
                                </InputGroup>
                            </FormGroup>
                        </div>

                        <FormGroup controlId="orgId">
                            <Form.Label style={{paddingLeft: '0px'}}>
                                Organization:<span className="required-mark">*</span>
                            </Form.Label>
                            <InputGroup>
                                <span className="input-field-icon"><FontAwesomeIcon icon={faBuilding}/></span>
                                <Form.Control type="text" onChange={this.orgChangeHandler}/>
                            </InputGroup>
                        </FormGroup>

                        <FormGroup controlId="userNameId">
                            <Form.Label style={{paddingLeft: '0px'}}>
                                User Name:
                            </Form.Label>
                            <InputGroup>
                                <span className="input-field-icon"><FontAwesomeIcon icon={faUserSecret}/></span>
                                <Form.Control type="text" value={this.state.userName} readOnly/>
                            </InputGroup>
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick ={this.register}>
                        Register
                    </Button>
                    <Button variant="danger" onClick = {this.onModalClosed}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}