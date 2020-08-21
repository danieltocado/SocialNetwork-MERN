import React from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Widgets from "../../components/widgets/widgets";
import Feed from "../feed/feed.jsx";


class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="app">
    
        <Sidebar/>

        <Feed/>

        <Widgets/>

      </div>
    );
  }
}

export default Home;
