import React, { Fragment } from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import { Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Body from "./body";
import p2ircBackdrop from "../videos/scidatamanagerBackdropVideo.mp4";
import backdropPoster from "../images/scidatamanagerHomepage.jpg";
import { updateSearchText } from "../store/searchStore/searchActions";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { logInGlobus } from "../store/authStore/authActions";
import { authData } from "../dataaccess/authDataAccess";
import { WELCOME, WELCOME_PUBLIC_SEARCH_DATASETS } from "../constants/routes";

class WelcomeWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdvancedSearchModal: false,
      showResults: false,
    };
  }

  toggleAdvancedSearchModal = () => {
    this.setState({
      showAdvancedSearchModal: !this.state.showAdvancedSearchModal,
    });
  };

  showAdvancedSearchModal = () => {
    this.toggleAdvancedSearchModal();
  };

  searchTextChangeHandler = (e) => {
    this.props.updateSearchText(e.target.value);
  };

  hitSearch = () => {
    if (
      this.props.search.searchFilters.searchText &&
      this.props.search.searchFilters.searchText.trim() !== ""
    ) {
      this.setState({
        showResults: true,
      });
    }
  };

  searchOnEnterHit = (e) => {
    if (e.keyCode === 13) {
      this.hitSearch();
    }
  };

  renderBackdrop = () => {
    return (
      <div
        className="container-fluid"
        style={{
          zIndex: "-1",
          overflow: "hidden",
          position: "absolute",
          paddingLeft: "0px",
          paddingRight: "0px",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
        }}
      >
        <video
          autoPlay={true}
          loop="on"
          muted
          className="p2ircBackdropVideo"
          poster={backdropPoster}
          style={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%) translateY(-50%)",
            minHeight: "100%",
            minWidth: "100%",
            height: "auto",
            width: "auto",
            maxWidth: "none",
          }}
        >
          <source src={p2ircBackdrop} type="video/mp4" />
        </video>
      </div>
    );
  };

  componentDidMount() {
    if (
      this.props.location.search &&
      this.props.location.search.includes("?code")
    ) {
      this.props.loginGlobus({
        code: this.props.location.search.replace("?code=", ""),
      });
    } else {
      console.log("ticket not found!");
    }
  }

  render() {
    return (
      <Fragment>
        <Switch>
          <Route
            exact
            path={WELCOME}
            render={() => {
              return this.state.showResults ? (
                <Redirect to={WELCOME_PUBLIC_SEARCH_DATASETS} />
              ) : (
                <div
                  className="container-full"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  {this.renderBackdrop()}
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    style={{ top: "35%", left: "25%" }}
                  >
                    <InputGroup size="lg">
                      <FormControl
                        type="text"
                        placeholder="Search in Medical Inventory (eg. Dr. Haq, Orthopedics)"
                        value={this.props.search.searchText}
                        onChange={(e) => this.searchTextChangeHandler(e)}
                        onKeyUp={(e) => this.searchOnEnterHit(e)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter a search text
                      </Form.Control.Feedback>
                      <InputGroup.Prepend>
                        <Button
                          title="Search"
                          type="submit"
                          onClick={this.hitSearch}
                        >
                          <FontAwesomeIcon icon={faSearch} />
                        </Button>
                      </InputGroup.Prepend>
                    </InputGroup>
                  </Col>
                </div>
              );
            }}
          />

          {/* <Route path="/welcome/public-search"
                        render={(props)=>{
                            console.log("[WelcomeWindow.js]", props)
                            return(
                                !this.state.showResults
                                ?   <Redirect to="/welcome" />
                                :   <Body parentPath={props.match.path} pathMethod={props}/>
                            )
                        }}
                    /> */}
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
    authData: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchText: (searchText) => dispatch(updateSearchText(searchText)),
    loginGlobus: (payload) => dispatch(logInGlobus(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeWindow);
