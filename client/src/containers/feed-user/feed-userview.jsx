import React from "react";
import "./feed-user.scss";
import Sidebar from "../../components/sidebar/sidebar";
import UserFeed from "../../containers/feed-user/feed-user";
import Widgets from "../../components/widgets/widgets";



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