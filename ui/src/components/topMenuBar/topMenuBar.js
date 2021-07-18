import React from "react";
// Modified by Moniruzzaman
import { Link } from "react-router-dom";
//
import { Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faNewspaper,
  faUserCircle,
  faCog,
  faFileInvoice,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {
  HOME_DATASETS,
  HOME_GROUPS,
  HOME_PLUGIN_OVERVIEW,
  HOME_SOFTWARE,
  HOME_USERS,
  WELCOME_PUBLIC_SEARCH_DATASETS,
  WELCOME_PUBLIC_SEARCH_GROUPS,
  WELCOME_PUBLIC_SEARCH_PLUGIN_OVERVIEW,
  WELCOME_PUBLIC_SEARCH_SOFTWARE,
} from "../../constants/routes";

class TopMenuBar extends React.Component {
  constructor(props) {
    super(props);
  }

  typeChangeHandler = (e) => {
    let selectedItem = e.key;
    switch (selectedItem) {
      case "datasets":
        this.setState({
          typeFilter: "datasets",
        });
        break;
        
      case "users":
        this.setState({
          typeFilter: "users",
        });
        break;

      default:
        this.setState({
          typeFilter: "datasets",
        });
        break;
    }
    // this.props.typeFilterChangeHandler(selectedItem)
  };

  render() {
    return (
      <Menu mode="horizontal" selectedKeys={[this.props.typeFilter]}>
        <Menu.Item
          key="datasets"
          icon={<FontAwesomeIcon icon={faFileInvoice} />}
          style={{ fontSize: "larger", padding: "0 1em" }}
          className={
            this.props.typeFilter === "datasets"
              ? "top-menu-bar-button active-elem"
              : "top-menu-bar-button"
          }
        >
          <Link
            to={
              this.props.authData.isAuthenticated
                ? HOME_DATASETS
                : WELCOME_PUBLIC_SEARCH_DATASETS
            }
          >
            Datasets
          </Link>
        </Menu.Item>
        {/* <Menu.Item key="news" icon={<FontAwesomeIcon icon={faNewspaper} />} style={{fontSize: 'larger', padding: '0 1em'}} className={ this.props.typeFilter === "news" ? 'top-menu-bar-button active-elem' : 'top-menu-bar-button' }>
                    News
                </Menu.Item> */}
        {this.props.authData.isAuthenticated && (
          <Menu.Item
            key="users"
            icon={<FontAwesomeIcon icon={faUserCircle} />}
            style={{ fontSize: "larger", padding: "0 1em" }}
            className={
              this.props.typeFilter === "users"
                ? "top-menu-bar-button active-elem"
                : "top-menu-bar-button"
            }
          >
            <Link to={HOME_USERS}>Users</Link>
          </Menu.Item>
        )}
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authData: state.auth,
  };
};

export default connect(mapStateToProps, null)(TopMenuBar);
