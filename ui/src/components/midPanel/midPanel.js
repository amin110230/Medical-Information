import React from "react";
import { connect } from "react-redux";
import { Col } from "antd";
import { Card } from "react-bootstrap";
import "../../css/app.css";
import Datasets from "./dataset/datasets";
import Users from "./user";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  HOME_DATASETS,
  HOME_GROUPS,
  HOME_PLUGIN_PARAMS,
  HOME_SOFTWARE,
  HOME_USERS,
  WELCOME_PUBLIC_SEARCH_DATASETS,
  WELCOME_PUBLIC_SEARCH_GROUPS,
  WELCOME_PUBLIC_SEARCH_PLUGIN_PARAMS,
  WELCOME_PUBLIC_SEARCH_SOFTWARE,
} from "../../constants/routes";

class MidPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card border="primary">
        <Card.Body>
          <Col className="gutter-row" span={24} style={{ minHeight: "40vh" }}>
            <Switch>
              <Route
                path={
                  this.props.authData.isAuthenticated
                    ? HOME_DATASETS
                    : WELCOME_PUBLIC_SEARCH_DATASETS
                }
                component={Datasets}
              />
              <Route path={HOME_USERS} component={Users} />

              <Route
                exatc
                path={
                  this.props.authData.isAuthenticated
                    ? HOME_PLUGIN_PARAMS
                    : WELCOME_PUBLIC_SEARCH_PLUGIN_PARAMS
                }
                component={Plugin}
              />
              {/* {this.parentPath === '/home' && <Redirect to= {`/home/datasets`}/>} */}
            </Switch>
          </Col>
        </Card.Body>
      </Card>
    );
  }
}

// export const typedComponents = (typeFilter) => {
//   console.log("[midPanel.js] typedComponent");
//   switch (typeFilter) {
//     case "datasets":
//       return <Datasets />;

//     case "groups":
//       return <Groups />;

//     case "news":
//       return <Newsfeed />;

//     case "users":
//       return <Users />;

//     case "software":
//       return <Software />;

//     case "plugin":
//       return <Plugin />;

//     default:
//       return <Datasets />;
//   }
// };

const mapStateToProps = (state) => {
  return {
    authData: state.auth,
  };
};

export default connect(mapStateToProps, null)(MidPanel);
