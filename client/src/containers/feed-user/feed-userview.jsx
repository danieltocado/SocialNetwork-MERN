import React from "react";
import "./feed-user.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Profile from "../../containers/profile/profile";
import UserFeed from "../../containers/feed-user/feed-user";
import Widgets from "../../components/widgets/widgets";
import Feed from "../feed/feed.jsx";


class FeedUserView extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="app">
    
        <Sidebar/>

        <UserFeed/>

        <Widgets/>

      </div>
    );
  }
}

export default FeedUserView;