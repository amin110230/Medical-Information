import React from "react";
import { Row, Col } from "antd";
import MidPanel from "./midPanel/midPanel";
import TopMenuBar from "./topMenuBar/topMenuBar";
import { connect } from "react-redux";
import { loadInvitationNotifications } from "../store/notificationStore/notificationAction";
import Search from "../components/discreteComponents/search";
import {
  AUTHENTICATED_PLUGIN_ROUTES,
  AUTHENTICATED_ROUTES,
  HOME_PLUGIN_OVERVIEW,
  NOT_AUTHENTICATED_PUBLIC_SEARCH_PLUGIN_ROUTES,
  NOT_AUTHENTICATED_PUBLIC_SEARCH_ROUTES,
  NOT_AUTHENTICATED_ROUTES,
  PAGE_NOT_FOUND,
  WELCOME,
  WELCOME_PUBLIC_SEARCH_DATASETS,
  WELCOME_PUBLIC_SEARCH_PLUGIN_OVERVIEW,
} from "../constants/routes";

class Body extends React.Component {
  constructor(props) {
    super(props);
    let filter = Body.getFilterFromProps(this.props);
    this.state = {
      typeFilter: filter,
    };
  }

  typeFilterChangeHandler = (typeFilterValue) => {
    this.setState({ typeFilter: typeFilterValue });
  };

  componentDidMount() {
    this.props.loadNotifications();
  }

  componentDidUpdate() {
    const { location } = this.props;
    const { pathname } = location;
    const { authData } = this.props;
    if (
      !authData.isAuthenticated &&
      NOT_AUTHENTICATED_PUBLIC_SEARCH_ROUTES.includes(pathname)
    ) {
      this.props.history.push(WELCOME_PUBLIC_SEARCH_DATASETS);
    } else if (
      !authData.isAuthenticated &&
      NOT_AUTHENTICATED_PUBLIC_SEARCH_PLUGIN_ROUTES.includes(pathname)
    ) {
      this.props.history.push(WELCOME_PUBLIC_SEARCH_PLUGIN_OVERVIEW);
    } else if (
      !authData.isAuthenticated &&
      !NOT_AUTHENTICATED_ROUTES.includes(pathname) 
    ) {
      this.props.history.push(WELCOME);
    } else if (
      authData.isAuthenticated &&
      AUTHENTICATED_PLUGIN_ROUTES.includes(pathname)
    ) {
      this.props.history.push(HOME_PLUGIN_OVERVIEW);
    } else if (
      authData.isAuthenticated &&
      !AUTHENTICATED_ROUTES.includes(pathname)
    ) {
      this.props.history.push(PAGE_NOT_FOUND)
    }
  }

  static getDerivedStateFromProps(props, state) {
    let filter = Body.getFilterFromProps(props);
    return {
      typeFilter: filter,
    };
  }

  static getFilterFromProps = (props) => {
    let filter = "datasets";
    if (props.match && props.match.params && props.match.params.data) {
      filter = props.match.params.data;
    }
    return filter;
  };

  render() {
    return (
      <div className="container-fluid">
        <Search />
        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
          <Col className="gutter-row" span={24}>
            <TopMenuBar typeFilter={this.state.typeFilter} />

            <MidPanel
              typeFilter={this.state.typeFilter}
              url={this.props.match.url}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authData: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadNotifications: () => dispatch(loadInvitationNotifications()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
