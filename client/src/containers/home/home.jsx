import React from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Widgets from "../../components/widgets/widgets";
import FeedFollowing from "../feed-following/feed-following"


class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="app">
    
        <Sidebar/>

        <FeedFollowing/>

        <Widgets/>

      </div>
    );
  }
}

export default Home;
