import React from "react";
import "./profile.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Profile from "../../containers/profile/profile";
import Widgets from "../../components/widgets/widgets";
import Feed from "../feed/feed.jsx";


class ProfileView extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="app">
    
        <Sidebar/>

        <Profile/>

        <Widgets/>

      </div>
    );
  }
}

export default ProfileView;