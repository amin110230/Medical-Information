import React, { Fragment } from "react";
import Header from "./header";
import Body from "./body";
import { connect } from "react-redux";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import WelcomeWindow from "./welcomeWindow";
import { getLoginStatus } from "../store/authStore/authActions";
import { getFilters } from "../store/searchStore/searchActions";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ContactUs from "./discreteComponents/contactPage";
import About from "./discreteComponents/aboutPage";
import PageNotFound from "./discreteComponents/PageNotFound";
import FaqPage from "./discreteComponents/FaqPage";
import RegisterUser from "./discreteComponents/registerUser";
import ModalComponents from "../components/discreteComponents/modals";
import { theme, ThemeProvider } from "@chakra-ui/core";
import { loadInvitationNotifications } from "../store/notificationStore/notificationAction";
import "antd/dist/antd.css";
import {
  ABOUT,
  AUTHENTICATED_ROUTES,
  CONTACT_US,
  FAQ,
  HOME,
  HOME_DATASETS,
  HOME_PARAMS,
  PAGE404,
  REGISTER,
  ROOT,
  SINGLE_DATASET,
  WELCOME,
  WELCOME_PUBLIC_SEARCH_DATASETS,
  WELCOME_PUBLIC_SEARCH_PARAMS,
  WELCOME_TICKET
} from "../constants/routes";
import {jbrowseUrl} from '../constants/constants'

class App extends React.Component {
  redirect = () => {
    window.location.href=jbrowseUrl;
    return null;
  }
  componentDidMount() {
    this.props.getLoginStatus();
    this.props.loadFilters();
    this.props.loadNotification();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.authData.isAuthenticated !== prevProps.authData.isAuthenticated
    ) {
      if (this.props.authData.isAuthenticated) {
        NotificationManager.success(
          "Welcome back " + localStorage.getItem("userName")
        );
      } else {
        NotificationManager.error("You are not logged in");
      }
    }
  }

  render() {
    const loginStatus = this.state;
    return (
      <Fragment>
        <ThemeProvider theme={theme}>
          <Router>
            <Header />
            <Switch>
            <Route exact path={ABOUT} component={About} />
              <Route exact path={CONTACT_US} component={ContactUs} />
              <Route exact path={FAQ} component={FaqPage} />
              <Route exact path={PAGE404} component={PageNotFound} />
              <Route
                path={REGISTER}
                render={(props) => {
                  if (
                    this.props.authData.isAuthenticated &&
                    this.props.authData.isNewUser
                  ) {
                    return <RegisterUser />;
                  } else if (
                    this.props.authData.isAuthenticated &&
                    !this.props.authData.isNewUser
                  ) {
                    return <Redirect to={HOME} />;
                  } else {
                    return <Redirect to={WELCOME} />;
                  }
                }}
              />

              <Route
                exact
                path={ROOT}
                render={() => {
                  return this.props.authData.isAuthenticated ? (
                    <Redirect to={HOME_DATASETS} />
                  ) : (
                    <Redirect to={WELCOME} />
                  );
                }}
              />
              
              <Route
                exact
                path={WELCOME}
                render={(props) => {
                  if (!this.props.authData.isAuthenticated) {
                    return <WelcomeWindow {...props} />;
                  } else {
                    return <Redirect to={HOME_DATASETS} />;
                  }
                }}
              />
              
              <Route
                path={WELCOME_PUBLIC_SEARCH_PARAMS}
                render={(props) => {
                  return this.props.authData.isAuthenticated ? (
                    <Redirect to={HOME_DATASETS} />
                  ) : (
                    <Body {...props} />
                  );
                }}
              />
              
              <Route 
                path={HOME_PARAMS}
                render={(props) => {
                  if (
                    this.props.authData.isAuthenticated &&
                    this.props.authData.isNewUser
                  ) {
                    return <Redirect to={REGISTER} />;
                  }
                  if(!this.props.authData.isAuthenticated && AUTHENTICATED_ROUTES.includes(props.location.pathname)){
                    return   <Redirect to={props.location.pathname} />;
                  }
                  else {
                    return <Body {...props} />;
                  }
                }}
              />
              
              <Route
                path={WELCOME_TICKET}
                render={(props) => {
                  return this.props.authData.isAuthenticated ? (
                    <Redirect to={HOME_DATASETS} />
                  ) : (
                    <Redirect to={WELCOME_PUBLIC_SEARCH_DATASETS} />
                  );
                }}
              />
              
              <Route
                path="*"
                render={(props) => {
                  return <Redirect to="/404" />;
                }}
              />
            </Switch>
            <NotificationContainer />
          </Router>
          <ModalComponents />
        </ThemeProvider>
      </Fragment>
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
    getLoginStatus: () => dispatch(getLoginStatus()),
    loadFilters: () => dispatch(getFilters()),
    loadNotification: () => dispatch(loadInvitationNotifications()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
