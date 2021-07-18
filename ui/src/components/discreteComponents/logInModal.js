import React from 'react';
import { withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";
import {Modal, Form, FormGroup, Row, Button, Col, InputGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import usaskLogo from "./../../images/usask_logo.jpg";
import globusLogo from "./../../images/globus_logo.jpg";
import { logIn } from '../../store/authStore/authActions';
import { connect } from 'react-redux';
import { authData } from '../../dataaccess/authDataAccess';
import { NOT_AUTHENTICATED_ROUTES, PAGE_NOT_FOUND } from '../../constants/routes';

const devLoginEnv = process.env.REACT_APP_LOGIN_ENV;
class LoginModal extends React.Component{
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
      };

    constructor(props){
        super(props);
        this.state = {
            isGuestLogin : false,
            userMail: null,
            password: null,
            isEmailValid: false,
            encodedReturnUrl: ''
        }
    }

    onModalClosed = () => {
        this.setState({
            isEmailValid: false
        })
        this.props.onLoginModalClosed();
    }

    logIn = () => {
         this.props.logIn({userMail : this.state.userMail});
         return new Promise( resolve => {
            const {location} = this.props;
            if(PAGE_NOT_FOUND.includes(location.pathname)){
                this.props.history.push("/datasets")
            }
            if(NOT_AUTHENTICATED_ROUTES.includes(location.pathname)){
                const splitedPath = location.pathname.split("/");
               
                let constructedPath = "";
                for(let i = 2;  i < splitedPath.length; ++i){
                    constructedPath += `/${splitedPath[i]}`;
                }
                this.props.history.push(constructedPath)
                
            }
            this.setState({
                isEmailValid: false
            })
            this.props.onLoginModalClosed();

         }
        
         )
    }

    submitOnEnterHit = (e) => {
        e.preventDefault();
        this.logIn();
    }
    
    ValidateEmail = (email) =>{
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    emailChangeHandler = (e) => {
        let isEmailValid = this.ValidateEmail(e.target.value)
        this.setState({
            userMail: e.target.value,
            isEmailValid: isEmailValid ? true : false
        });
    }

    componentDidMount(){
        let tokenUri = encodeURIComponent('https://p2irc-data-dev.usask.ca/welcome');
        this.setState({
            encodedReturnUrl: tokenUri
        });
    }
// scope=urn%3Aglobus%3Aauth%3Ascope%3Atransfer.api.globus.org%3Aall%20urn%3Aglobus%3Aauth%3Ascope%3Aauth.globus.org%3Aview_identities%20offline_access
    render(){
        return(
            <Modal show={this.props.showLoginModal} onHide= {this.onModalClosed} centered>
                <Modal.Header closeButton className = "modal-header">
                    <Modal.Title className= "modal-header-text">Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <a className="border border-gray rounded-lg p-1 mb-1 login-option" type="button" href={'https://auth.globus.org/v2/oauth2/authorize?client_id='+authData().globus_client_id+'&redirect_uri='+authData().tokenuri+'&scope='+authData().globus_scope+'&response_type=code'}>
                            <img className="login-option-image" src={globusLogo} alt='Globus Logo'/>
                            <span className="login-option-name">Globus Login</span>
                        </a>
                    </div>

                    {/* {devLoginEnv === 'dev' && */}
                        <Form id="loginForm" onSubmit={this.submitOnEnterHit}>
                        <FormGroup as={Row} controlId="userMailId">
                            <Form.Label column sm="2">
                                Email:
                            </Form.Label>
                            <Col sm="9">
                                <InputGroup>
                                    <Form.Control type="email" onChange={this.emailChangeHandler} autoComplete='on'/>
                                    {this.state.isEmailValid
                                        ? <span style={{padding: '7px', color: 'green'}}><FontAwesomeIcon icon={faCheck}/></span>
                                        : <span style={{padding: '7px', color: 'red'}}><FontAwesomeIcon icon={faTimes}/></span>
                                    }
                                </InputGroup>
                            </Col>
                        </FormGroup>
                    </Form>
                     {/* } */}
                </Modal.Body>
                <Modal.Footer>
                    {/* {devLoginEnv === 'dev' && */}
                        <Button disabled={!this.state.isEmailValid} variant="primary" type="submit" onClick={this.logIn}>
                            Login
                        </Button>
                    {/* } */}
                    <Button variant="danger" onClick={this.onModalClosed}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}


const mapStateToProps = (state) => {
    return{
        authData: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        logIn: (credential) => dispatch(logIn(credential))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginModal))