import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar, Button, Nav,
  DropdownButton, Dropdown, ButtonGroup
} from "react-bootstrap";
import LoginModal from "./discreteComponents/logInModal";
import { connect } from "react-redux";
import { logOut } from "../store/authStore/authActions";
import Notification from "./discreteComponents/notification";
import { Link } from "react-router-dom";
import {
  ABOUT, COMMON_ROUTES, CONTACT_US,
  FAQ, PAGE_NOT_FOUND, ROOT,
  WELCOME
} from "../constants/routes";
class Header extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      showLoginModal: false,
    };
  }

  onLoginModalClosed = () => {
    this.setState({
      showLoginModal: false,
    });
  };

  showLoginModal = () => {
    this.setState({
      showLoginModal: true,
    });
  };

  logOut = () => {
    if (this.props.datasetStore.isDataUploading) {
      const confirmation = window.confirm(
        "You've data uploading to server, data will be lost. confirm logout?"
      );
      if (confirmation) {
        this.props.logOut();
        if(this.props.location.pathname === PAGE_NOT_FOUND){
          this.props.history.push(WELCOME)
        }
        else if (
          COMMON_ROUTES.includes(this.props.location.pathname) ||
          (this.props.location.pathname.includes("/dataset") &&
            !this.props.location.pathname.includes("/datasets"))
        ) {
          this.props.history.push(`${this.props.location.pathname}`);
        } else {
          this.props.history.push(
            `/public-search${this.props.location.pathname}`
          );
        }
      }
      return;
    }
    this.props.logOut();
    if(this.props.location.pathname === PAGE_NOT_FOUND){
      this.props.history.push(WELCOME)
    }
    else if (
      COMMON_ROUTES.includes(this.props.location.pathname) ||
      (this.props.location.pathname.includes("/dataset") &&
        !this.props.location.pathname.includes("/datasets"))
    ) {
      this.props.history.push(`${this.props.location.pathname}`);
    } else {
      this.props.history.push(`/public-search${this.props.location.pathname}`);
    }
  };

  render() {
    return (
      <div className="app-header">
        <Navbar expand="lg">
          <Nav>
            <Link
              to={ROOT}
              style={{ color: "whitesmoke" }}
              className="navbar-brand"
            >
              Medical Inventory
            </Link>
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link
                to={ABOUT}
                style={{ color: "whitesmoke" }}
                className="nav-link"
              >
                About
              </Link>
              <Link
                to={CONTACT_US}
                style={{ color: "whitesmoke" }}
                className="nav-link"
              >
                Contact Us
              </Link>
              <Link
                to={FAQ}
                style={{ color: "whitesmoke" }}
                className="nav-link"
              >
                FAQ
              </Link>
            </Nav>

            {this.props.authData.isAuthenticated && (
              <Fragment>
                <Notification />
              </Fragment>
            )}
            {this.props.authData.isAuthenticated ? (
              <DropdownButton
                className="mr-sm-1"
                id="dropdown-item-button"
                title={this.props.authData.userName}
                as={ButtonGroup}
                alignRight
              >
                <Dropdown.Item as="button" onClick={this.logOut}>
                  Log Out
                </Dropdown.Item>
              </DropdownButton>
            ) : (
              <Fragment>
                <Button className="mr-sm-1" onClick={this.showLoginModal}>
                  Log In
                </Button>
                <LoginModal
                  showLoginModal={this.state.showLoginModal}
                  onLoginModalClosed={this.onLoginModalClosed}
                />
              </Fragment>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authData: state.auth,
    datasetStore: state.datasets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
