import React, { Fragment } from "react";
import { Card, Accordion, Alert, Button } from "react-bootstrap";
import { Divider, Row, Col, Badge, Skeleton, Tabs, Timeline } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen, faUserPlus, faUserCheck,
  faEnvelope, faMapMarkerAlt, faClock,
  faFileInvoice, faUserFriends, faTasks
} from "@fortawesome/free-solid-svg-icons";
import userImage from "./../../images/user.png";
import moment from "moment";
import { activities } from "../../dataaccess/static";
import { ClockCircleOutlined } from "@ant-design/icons";
import { PropagateNotifier } from "../utilityComponents/propagateLoader";
import { showDatasetDetailModal } from "../../store/datasetsStore/datasetActions";
import {
  loadUserBasicInfo, loadUserDataset, loadUserGroup,
  loadUserFollower, loadUserFollowing, loadUserSearchResults,
  followUser, unfollowUser, dismissNumberOfUserResults,
  toggleSearchUserFollow
} from "../../store/userStore/userAction";
import { connect } from "react-redux";
import DatasetHeader from "./dataset/datasetHeader";

class users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldSearchViewRender: false,
      showActivity: false,
    };
  }

  loadUser = (isInitialLoading) => {
    let pageNum = isInitialLoading ? 1 : this.props.userData.userPageNum + 1;
    this.props.loadUserSearchResults(
      this.props.search.searchFilters,
      pageNum,
      this.props.userData.numOfUser,
      isInitialLoading
    );
  };

  loadDatasets = (isInitialLoading) => {
    let pageNum = isInitialLoading ? 1 : this.props.userData.datasetPageNum + 1;
    this.props.loadUserDataset(
      pageNum,
      this.props.userData.numOfItems,
      isInitialLoading
    );
  };

  loadFollower = (isInitialLoading) => {
    let pageNum = isInitialLoading
      ? 1
      : this.props.userData.followerPageNum + 1;
    this.props.loadUserFollower(
      pageNum,
      this.props.userData.numOfFollowItems,
      isInitialLoading
    );
  };

  loadFollowing = (isInitialLoading) => {
    let pageNum = isInitialLoading
      ? 1
      : this.props.userData.followingPageNum + 1;
    this.props.loadUserFollowing(
      pageNum,
      this.props.userData.numOfFollowItems,
      isInitialLoading
    );
  };

  loadDashboard = () => {
    this.props.loadBasicInfo();
    this.loadDatasets(true);
    this.loadFollower(true);
    this.loadFollowing(true);
  };

  componentDidMount() {
    const {
      searchText,
      selectedMimetypes,
      selectedYears,
    } = this.props.search.searchFilters;

    const scrollObserverOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    if (
      searchText ||
      (selectedMimetypes && selectedMimetypes.length) ||
      (selectedYears && selectedYears.length)
    ) {
     
      let scrollUserSearchObserver = new IntersectionObserver(
        this.observeUserScroll,
        scrollObserverOptions
      );

      this.setState(
        {
          shouldSearchViewRender: true,
        },
        () => {
          scrollUserSearchObserver.observe(
            document.querySelector("#endOfUserSearchList")
          );
          this.loadUser(true);
        }
      );
    } else {
      this.setState(
        {
          shouldSearchViewRender: false,
        },
        () => this.loadDashboard()
      );
    }
  }

  componentDidUpdate(prevProps) {
     const scrollObserverOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    if (this.props.search.hitSearch !== prevProps.search.hitSearch) {
      if (this.props.search.searchText) {
        let scrollUserSearchObserver = new IntersectionObserver(
          this.observeUserScroll,
          scrollObserverOptions
        );
  
        this.setState(
          {
            shouldSearchViewRender: true,
          },
          () => {
            scrollUserSearchObserver.observe(
              document.querySelector("#endOfUserSearchList")
            );
            this.loadUser(true);
          }
        );
      } else {
        this.setState(
          {
            shouldSearchViewRender: false,
          },
          () => this.loadDashboard()
        );
      }
    }
    if (!this.state.shouldSearchViewRender && !this.state.showActivity) {
      let scrollDatasetObserver = new IntersectionObserver(
        this.observeDatasetScroll,
        scrollObserverOptions
      );
      scrollDatasetObserver.observe(
        document.querySelector("#endOfDatasetList")
      );

      let scrollFollowerObserver = new IntersectionObserver(
        this.observeFollowerScroll,
        scrollObserverOptions
      );
      scrollFollowerObserver.observe(
        document.querySelector("#endOfFollowerList")
      );

      let scrollFollowingObserver = new IntersectionObserver(
        this.observeFollowingScroll,
        scrollObserverOptions
      );
      scrollFollowingObserver.observe(
        document.querySelector("#endOfFollowingList")
      );
    }
  }

  observeUserScroll = (entries, observer) => {
    if (entries[0].isIntersecting && this.props.userData.hasMoreUser) {
      this.loadUser(false);
    }
  };

  observeDatasetScroll = (entries, observer) => {
    if (entries[0].isIntersecting && this.props.userData.hasMoreDataset) {
      this.loadDatasets(false);
    }
  };

  observeFollowerScroll = (entries, observer) => {
    if (entries[0].isIntersecting && this.props.userData.hasMoreFollower) {
      this.loadFollower(false);
    }
  };

  observeFollowingScroll = (entries, observer) => {
    if (entries[0].isIntersecting && this.props.userData.hasMoreFollowing) {
      this.loadFollowing(false);
    }
  };

  profileSummary(userData) {
    return (
      <Row style={{ display: "flex", color: "gray" }}>
        <small>Dataset: {userData.numOfDataset} </small> &emsp;&emsp;
        <small>Group: {userData.numOfGroup} </small> &emsp;&emsp;
        <small>Follower: {userData.numOfFollower} </small> &emsp;&emsp;
        <small>Following: {userData.numOfFollowing} </small> &emsp;&emsp;
      </Row>
    );
  }

  handleFollow(isFollowing, userId) {
    if (isFollowing === true) {
      this.props.followUser(userId, this.props.userData.numOfFollowItems);
    } else {
      this.props.unfollowUser(userId, this.props.userData.numOfFollowItems);
    }
  }

  handleSearchUserFollow(isFollowing, user) {
    this.props.toggleSearchUserFollow(isFollowing, user.id, user.name);
  }

  handleShowDatasetDetail = (datasetID) => {
    this.props.showDatasetDetailModal(datasetID);
  };

  closeAlert = () => {
    this.props.dismissNumberOfUserResults();
  };

  renderSearchResult = (Users) => {
    return Users.map((user) => {
      return (
        <Col
          className="gutter-row"
          xs={24}
          sm={24}
          md={12}
          lg={12}
          key={user.id}
        >
          <Card>
            <Card.Body style={{ padding: "0" }}>
              <div
                className="border border-gray rounded-lg p-1"
                style={{ display: "flex", position: "relative" }}
              >
                <img
                  style={{
                    height: "7vw",
                    width: "7vw",
                    minWidth: "6em",
                    minHeight: "6em",
                  }}
                  src={userImage}
                  alt="User"
                />{" "}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" xs={20} sm={20} md={20} lg={20}>
                      <span
                        style={{
                          paddingBottom: 0,
                          fontSize: "large",
                          fontWeight: "bold",
                        }}
                      >
                        {user.name}
                      </span>
                      <span style={{ color: "gray", fontSize: "large" }}>
                        {" "}
                        ({user.username})
                      </span>
                    </Col>
                    <Col
                      className="gutter-row"
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      align="right"
                    >
                      {user.isPublicUser ? null : user.isFollowing !== //Public User
                        undefined ? (
                        user.isFollowing === true ? (
                          <button
                            title="Unfollow"
                            style={{
                              fontSize: "x-large",
                              position: "absolute",
                              right: "1em",
                              backgroundColor: "transparent",
                              border: "none",
                            }}
                            onClick={() =>
                              this.handleSearchUserFollow(false, user)
                            }
                          >
                            <FontAwesomeIcon icon={faUserCheck} />
                          </button>
                        ) : (
                          <button
                            title="Follow"
                            style={{
                              fontSize: "x-large",
                              position: "absolute",
                              right: "1em",
                              backgroundColor: "transparent",
                              border: "none",
                            }}
                            onClick={() =>
                              this.handleSearchUserFollow(true, user)
                            }
                          >
                            <FontAwesomeIcon icon={faUserPlus} />
                          </button>
                        )
                      ) : (
                        user.isCurrentUser && null
                      )}
                    </Col>
                  </Row>

                  <Row type="flex">
                    <Col xs sm md lg>
                      <FontAwesomeIcon icon={faEnvelope} />
                      <span style={{ padding: "0 0.5em" }}>{user.email}</span>
                    </Col>
                    <Col xs="auto" sm="auto" md="auto" lg="auto">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      <span style={{ padding: "0 0.5em" }}>
                        {user.location}
                      </span>
                    </Col>
                  </Row>
                  <br />
                  {this.profileSummary(user)}
                </div>
              </div>
            </Card.Body>
          </Card>
          <br />
        </Col>
      );
    });
  };

  renderUserProfile = () => {
    return (
      <Fragment>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Row type="flex" className="border border-gray rounded-lg p-1">
            <Col xs={24} sm={24} md={9} lg={5}>
              {this.props.userData.isUserBasicInfoLoading && (
                <Skeleton avatar paragraph={{ rows: 4 }} />
              )}
              {!this.props.userData.isUserBasicInfoLoading ? (
                this.props.userData.userBasicInfo !== null ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "0.5em",
                      alignItems: "center",
                    }}
                  >
                    {this.userBasicInfo(this.props.userData.userBasicInfo)}
                  </div>
                ) : (
                  <div style={{ width: "20vw" }}>
                    <Skeleton avatar paragraph={{ rows: 4 }} />
                  </div>
                )
              ) : null}
            </Col>
            <Col xs={24} sm={24} md={15} lg={19}>
              <h5 className="title-line">
                Dataset&nbsp;
                <Badge
                  count={this.props.userData.numberOfTotalDataset}
                  style={{
                    backgroundColor: "#fff",
                    color: "darkslategray",
                    boxShadow: "0 0 0 1px #d9d9d9 inset",
                  }}
                />
              </h5>
              <div style={{ maxHeight: "47vh", overflowY: "auto" }}>
                {!this.props.userData.isDatasetListInitLoading &&
                  this.props.userData.datasets !== null &&
                  this.renderUserDataset(this.props.userData.datasets)}
                <div id="endOfDatasetList" className="col-sm-24">
                  {!this.props.userData.hasMoreDataset &&
                  !this.props.userData.isDatasetListInitLoading &&
                  this.props.userData.datasets.length !== 0 ? (
                    <Divider>End Of List</Divider>
                  ) : null}
                  <PropagateNotifier
                    isLoading={this.props.userData.hasMoreDataset}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <h4 className="title-line">
          Follower&nbsp;
          <Badge
            count={this.props.userData.numberOfTotalFollower}
            style={{
              backgroundColor: "#fff",
              color: "darkslategray",
              boxShadow: "0 0 0 1px #d9d9d9 inset",
            }}
          />
        </h4>
        <PropagateNotifier
          isLoading={this.props.userData.isFollowerListInitLoading}
        />
        <div style={{ maxHeight: "30vh", overflowY: "auto" }}>
          {!this.props.userData.isFollowerListInitLoading ? (
            this.props.userData.followers.length !== 0 ? (
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ marginLeft: 0, marginRight: 0 }}
              >
                {this.userFollower(this.props.userData.followers)}
              </Row>
            ) : (
              <div
                className="rounded-lg p-1"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <FontAwesomeIcon
                  className="m-auto"
                  icon={faUserFriends}
                  style={{ fontSize: "xx-large" }}
                />
                <h6 className="m-auto">You haven’t any followers yet!</h6>
              </div>
            )
          ) : null}
          <Col xs={24} sm={24} md={24} lg={24} id="endOfFollowerList">
            {!this.props.userData.hasMoreFollower &&
            !this.props.userData.isFollowerListInitLoading &&
            this.props.userData.followers.length !== 0 ? (
              <Divider>End of List</Divider>
            ) : null}
            <PropagateNotifier
              isLoading={this.props.userData.hasMoreFollower}
            />
          </Col>
        </div>

        <h4 className="title-line">
          Following&nbsp;
          <Badge
            count={this.props.userData.numberOfTotalFollowing}
            style={{
              backgroundColor: "#fff",
              color: "darkslategray",
              boxShadow: "0 0 0 1px #d9d9d9 inset",
            }}
          />
        </h4>
        <PropagateNotifier
          isLoading={this.props.userData.isFollowingListInitLoading}
        />
        <div style={{ maxHeight: "30vh", overflowY: "auto" }}>
          {!this.props.userData.isFollowingListInitLoading ? (
            this.props.userData.following.length !== 0 ? (
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ marginLeft: 0, marginRight: 0 }}
              >
                {this.userFollowing(this.props.userData.following)}
              </Row>
            ) : (
              <div
                className="rounded-lg p-1"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <FontAwesomeIcon
                  className="m-auto"
                  icon={faUserFriends}
                  style={{ fontSize: "xx-large" }}
                />
                <h6 className="m-auto">You aren't following anyone!</h6>
              </div>
            )
          ) : null}
          <Col xs={24} sm={24} md={24} lg={24} id="endOfFollowingList">
            {!this.props.userData.hasMoreFollowing &&
            !this.props.userData.isFollowingListInitLoading &&
            this.props.userData.following.length !== 0 ? (
              <Divider>End Of List</Divider>
            ) : null}
            <PropagateNotifier
              isLoading={this.props.userData.hasMoreFollowing}
            />
          </Col>
        </div>
      </Fragment>
    );
  };

  userDataset = (userDatasets) => {
    return userDatasets.map((dataset) => {
      return (
        <Fragment>
          <Card key={dataset.id}>
            <Accordion.Toggle
              as={Card.Header}
              eventKey={dataset.id}
              className="dataset-header"
              onClick={() => this.handleShowDatasetDetail(dataset.id)}
            >
              <DatasetHeader properties={dataset} key={dataset.id} />
            </Accordion.Toggle>
          </Card>
          <br />
        </Fragment>
      );
    });
  };

  userFollowing = (followingUser) => {
    return followingUser.map((following) => {
      return (
        <Col
          className="gutter-row"
          xs={24}
          sm={24}
          md={12}
          lg={12}
          key={following.id}
        >
          <Card>
            <Card.Body style={{ padding: "0" }}>
              <div
                className="p-1"
                style={{ display: "flex", position: "relative" }}
              >
                <img
                  style={{
                    height: "7vw",
                    width: "7vw",
                    minWidth: "6em",
                    minHeight: "6em",
                  }}
                  src={userImage}
                  alt="User"
                />{" "}
                {/* TODO: read path from db & put correct photo */}
                {/* <Avatar shape="square" size={125} src={userImage} alt='User' /> */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" xs={20} sm={20} md={20} lg={20}>
                      <span
                        style={{
                          paddingBottom: 0,
                          fontSize: "large",
                          fontWeight: "bold",
                        }}
                      >
                        {following.name}
                      </span>
                      <span style={{ color: "gray", fontSize: "large" }}>
                        {" "}
                        ({following.username})
                      </span>
                    </Col>
                    <Col
                      className="gutter-row"
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      align="right"
                    >
                      <button
                        title="Unfollow"
                        style={{
                          fontSize: "x-large",
                          position: "absolute",
                          right: "1em",
                          backgroundColor: "transparent",
                          border: "none",
                        }}
                        onClick={() => this.handleFollow(false, following.id)}
                      >
                        <FontAwesomeIcon icon={faUserCheck} />
                      </button>
                    </Col>
                  </Row>
                  <Row type="flex">
                    <Col xs sm md lg>
                      <FontAwesomeIcon icon={faEnvelope} />
                      <span style={{ padding: "0 0.5em" }}>
                        {following.email}
                      </span>
                    </Col>
                    <Col xs="auto" sm="auto" md="auto" lg="auto">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      <span style={{ padding: "0 0.5em" }}>
                        {following.location}
                      </span>
                    </Col>
                  </Row>
                  <br />
                  {this.profileSummary(following)}
                </div>
              </div>
            </Card.Body>
          </Card>
          <br />
        </Col>
      );
    });
  };

  userFollower = (userFollowers) => {
    return userFollowers.map((follower) => {
      return (
        <Col
          className="gutter-row"
          xs={24}
          sm={24}
          md={12}
          lg={12}
          key={follower.id}
        >
          <Card>
            <Card.Body style={{ padding: "0" }}>
              <div
                className="p-1"
                style={{ display: "flex", position: "relative" }}
              >
                <img
                  style={{
                    height: "7vw",
                    width: "7vw",
                    minWidth: "6em",
                    minHeight: "6em",
                  }}
                  src={userImage}
                  alt="User"
                />{" "}
                {/* TODO: read path from db & put correct photo */}
                {/* <Avatar shape="square" size={125} src={userImage} alt='User' /> */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" xs={20} sm={20} md={20} lg={20}>
                      <span
                        style={{
                          paddingBottom: 0,
                          fontSize: "large",
                          fontWeight: "bold",
                        }}
                      >
                        {follower.name}
                      </span>
                      <span style={{ color: "gray", fontSize: "large" }}>
                        {" "}
                        ({follower.username})
                      </span>
                    </Col>
                    <Col
                      className="gutter-row"
                      xs={4}
                      sm={4}
                      md={4}
                      lg={4}
                      align="right"
                    >
                      {follower.isFollowing ? null : (
                        <button
                          title="Follow"
                          style={{
                            fontSize: "x-large",
                            position: "absolute",
                            right: "1em",
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                          onClick={() => this.handleFollow(true, follower.id)}
                        >
                          <FontAwesomeIcon icon={faUserPlus} />
                        </button>
                      )}
                    </Col>
                  </Row>
                  <Row type="flex">
                    <Col xs sm md lg>
                      <FontAwesomeIcon icon={faEnvelope} />
                      <span style={{ padding: "0 0.5em" }}>
                        {follower.email}
                      </span>
                    </Col>
                    <Col xs="auto" sm="auto" md="auto" lg="auto">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      <span style={{ padding: "0 0.5em" }}>
                        {follower.location}
                      </span>
                    </Col>
                  </Row>
                  <br />
                  {this.profileSummary(follower)}
                </div>
              </div>
            </Card.Body>
          </Card>
          <br />
        </Col>
      );
    });
  };

  userBasicInfo(basicInfo) {
    let joiningDate = new Date(basicInfo.member_since)
      .toISOString()
      .split("T")[0];
    let joiningTime = new Date(basicInfo.member_since).toLocaleTimeString();

    return (
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <span
            style={{
              position: "absolute",
              cursor: "pointer",
              fontSize: "x-large",
            }}
          >
            <FontAwesomeIcon icon={faPen} />
          </span>{" "}
          <br />
          <img
            style={{
              aspectRatio: 3 / 2,
              height: "14vw",
              width: "14vw",
              minWidth: "11em",
              minHeight: "11em",
            }}
            src={userImage}
            alt="User"
          />{" "}
          <Row>
            <span
              style={{
                paddingBottom: 0,
                fontSize: "x-large",
                fontWeight: "bold",
              }}
            >
              {basicInfo.name}
            </span>
            <span
              style={{ color: "gray", fontSize: "large", alignSelf: "center" }}
            >
              {" "}
              ({basicInfo.username})
            </span>
          </Row>
          <p style={{ padding: "1em 0" }}>{basicInfo.about}</p>
          <Row>
            <FontAwesomeIcon icon={faEnvelope} />
            <span style={{ padding: "0 0.5em" }}>{basicInfo.email}</span>
          </Row>
          <Row>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span style={{ padding: "0 0.5em" }}>{basicInfo.location}</span>
          </Row>
          <Row>
            <FontAwesomeIcon icon={faClock} />
            <span style={{ padding: "0 0.5em" }}>
              Joined on: {joiningDate + " " + joiningTime}
            </span>
          </Row>
        </Col>
      </Row>
    );
  }

  renderUserDataset(userDatasets) {
    return !this.props.userData.isDatasetListInitLoading ? (
      userDatasets.length !== 0 ? (
        <Accordion>{this.userDataset(userDatasets)}</Accordion>
      ) : (
        <div
          className="rounded-lg p-1"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <FontAwesomeIcon
            className="m-auto"
            icon={faFileInvoice}
            style={{ fontSize: "xx-large" }}
          />
          <h6 className="m-auto">You haven’t any dataset yet!</h6>
        </div>
      )
    ) : null;
  }

  renderActivity = () => {
    return (
      <Row className="container-fluid">
        <Col xs={24} sm={24} md={6} lg={6}></Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Tabs type="card">
            <Tabs.TabPane tab="User Group Activity" key="1">
              {this.renderUserActivity(activities)}
            </Tabs.TabPane>
            <Tabs.TabPane tab="User Activity" key="2">
              Here Goes User Activity Data
            </Tabs.TabPane>
            <Tabs.TabPane tab="Other" key="3">
              {this.renderUserActivity(activities)}
            </Tabs.TabPane>
          </Tabs>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6}></Col>
      </Row>
    );
  };

  renderUserActivity = (activities) => {
    if (Object.keys(activities).length === 0) {
      return (
        <div
          className="rounded-lg p-1"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <FontAwesomeIcon
            className="m-auto"
            icon={faTasks}
            style={{ fontSize: "xx-large" }}
          />
          <h6 className="m-auto">You have no activity!</h6>
        </div>
      );
    } else {
      return (
        <Timeline mode="left">
          {Object.keys(activities).map((keyDate, i) => {
            let formatedDate = moment(keyDate).format("LL");
            return (
              <div key={i}>
                <Divider orientation="left">{formatedDate}</Divider>
                <div style={{ padding: "0 0 0 1em" }}>
                  {activities[keyDate].map((activity) => {
                    let formatedTime = moment
                      .utc(activity.time, "HH:mm:ss")
                      .format("LT");
                    let shouldDotEnabled = activity.description.includes(
                      "Group is created"
                    );
                    return (
                      <Timeline.Item
                        dot={
                          shouldDotEnabled ? (
                            <ClockCircleOutlined style={{ fontSize: "16px" }} />
                          ) : (
                            false
                          )
                        }
                        color={shouldDotEnabled ? "green" : "blue"}
                      >
                        <small style={{ color: "gray" }}>{formatedTime}</small>{" "}
                        <br />
                        {activity.description}
                      </Timeline.Item>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Timeline>
      );
    }
  };

  toggleActivity = () => {
    this.setState({
      showActivity: !this.state.showActivity,
    });
  };

  render() {
    return (
      <Row style={{ maxHeight: "100vh", overflowY: "auto" }}>
        <Col xs={24} sm={24} md={24} lg={24}>
          {this.state.shouldSearchViewRender ||
          !this.props.authData.isAuthenticated ? (
            <div>
              <Col sm>
                {this.props.userData.numberOfTotalUser !== null && (
                  <Alert
                    variant="success"
                    dismissible
                    onClose={this.closeAlert}
                  >
                    {this.props.userData.numberOfTotalUser} user(s) found.
                  </Alert>
                )}
              </Col>
              <div style={{ maxHeight: "90vh", overflowY: "auto" }}>
                {!this.props.userData.isUserListInitLoading ? (
                  this.props.userData.users.length !== 0 ? (
                    <Row
                      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                      style={{ marginLeft: 0, marginRight: 0 }}
                    >
                      {this.renderSearchResult(this.props.userData.users)}
                    </Row>
                  ) : (
                    <div
                      className="rounded-lg p-1"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <FontAwesomeIcon
                        className="m-auto"
                        icon={faUserFriends}
                        style={{ fontSize: "xx-large" }}
                      />
                      <h6 className="m-auto">No User Found!</h6>
                    </div>
                  )
                ) : (
                  <PropagateNotifier
                    isLoading={this.props.userData.isUserListInitLoading}
                  />
                )}
                <Col xs={24} sm={24} md={24} lg={24} id="endOfUserSearchList">
                  {!this.props.userData.hasMoreUser &&
                  !this.props.userData.isUserListInitLoading &&
                  this.props.userData.users.length !== 0 ? (
                    <Divider>End Of List</Divider>
                  ) : null}
                  <PropagateNotifier
                    isLoading={this.props.userData.hasMoreUser}
                  />
                </Col>
              </div>
            </div>
          ) : (
            <Fragment>
              <h4
                className="title-line"
                style={{
                  marginRight: this.state.showActivity ? "2em" : "4em",
                  padding: "5px",
                }}
              >
                {" "}
                {!this.state.showActivity ? "Your Profile" : "Activity"}
              </h4>
              <Button
                onClick={this.toggleActivity}
                className="activity-button"
                variant={this.state.showActivity ? "danger" : "primary"}
              >
                {this.state.showActivity ? "X" : "Activity"}
              </Button>
              {this.state.showActivity
                ? this.renderActivity()
                : this.renderUserProfile()}
            </Fragment>
          )}
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authData: state.auth,
    userData: state.user,
    search: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadBasicInfo: () => dispatch(loadUserBasicInfo()),
    loadUserSearchResults: (searchFilters, pageNum, numOfItems, isInitLoad) =>
      dispatch(
        loadUserSearchResults(searchFilters, pageNum, numOfItems, isInitLoad)
      ),
    loadUserDataset: (pageNum, numOfItems, isInitLoading) =>
      dispatch(loadUserDataset(pageNum, numOfItems, isInitLoading)),
    loadUserGroup: (pageNum, numOfItems, isInitLoading) =>
      dispatch(loadUserGroup(pageNum, numOfItems, isInitLoading)),
    loadUserFollower: (pageNum, numOfItems, isInitLoading) =>
      dispatch(loadUserFollower(pageNum, numOfItems, isInitLoading)),
    loadUserFollowing: (pageNum, numOfItems, isInitLoading) =>
      dispatch(loadUserFollowing(pageNum, numOfItems, isInitLoading)),
    followUser: (isFollowing, numOfFollowItems) =>
      dispatch(followUser(isFollowing, numOfFollowItems)),
    unfollowUser: (isFollowing, numOfFollowItems) =>
      dispatch(unfollowUser(isFollowing, numOfFollowItems)),
    showDatasetDetailModal: (datasetId) =>
      dispatch(showDatasetDetailModal(datasetId)),
    dismissNumberOfUserResults: () => dispatch(dismissNumberOfUserResults()),
    toggleSearchUserFollow: (isFollowing, userId, userName) =>
      dispatch(toggleSearchUserFollow(isFollowing, userId, userName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(users);
