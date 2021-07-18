import React from 'react';
import {Form, Button, Row, Col}  from 'react-bootstrap';
import { connect } from 'react-redux';
import { registerUser, setName, setEmail, setOrganization } from '../../store/authStore/authActions';

class RegisterUser extends React.Component {

    nameChangehandler = (e) => {
        this.props.setName(e.target.value);
    }

    emailChangehandler = (e) => {
        this.props.setEmail(e.target.value);
    }

    organizationChangehandler = (e) => {
        this.props.setOrganization(e.target.value);
    }

    registerUser = (e) => {
        e.preventDefault();
        let payload = {
            userName : this.props.authData.userName,
            email: this.props.authData.email,
            name: this.props.authData.name,
            organization: this.props.authData.organization
        };
        this.props.registerUser(payload);
    }

    render(){
        return (
            <div className='container-fluid col-sm-12' style={{ left: '25%', top: '25%' }}>
                <div className='col-sm-6'>
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Username
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" readOnly plaintext value={this.props.authData.userName} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Name" onChange = {(e) => this.nameChangehandler(e)} value={this.props.authData.name}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" onChange ={(e) => this.emailChangehandler(e)} value={this.props.authData.email}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Organization
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder='e.g. USask' onChange = {(e) => this.organizationChangehandler(e)} value={this.props.authData.organization} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button variant='primary' type="submit" onClick={(e) => this.registerUser(e)}>Register</Button>
                        </Col>
                    </Form.Group>
                </Form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        authData: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        registerUser: (payload) => dispatch(registerUser(payload)),
        setName: (name) => dispatch(setName(name)),
        setEmail: (email) => dispatch(setEmail(email)),
        setOrganization: (organization) => dispatch(setOrganization(organization))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);