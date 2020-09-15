import React, { useEffect, useState } from "react";
import Axios from "axios";
import Post from "../../components/post/post"
import Search from "../search/search";

import "./widgets.scss";

function Widgets() {
  const [fiveUsers, setFiveUsers] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3000/users/five`).then((res) => {
      const users = res.data;
      console.log(users);
      setFiveUsers(users);
    });
  }, []);

  return (
    <div className="widgets">
       
      <Search/>
      <div className="widgets_container">
        <h2>Sugerencias para ti</h2>

        <div className="suggestion_container">
          {fiveUsers.map((user) => (
            <Post
              key={user?._id}
              name={user?.name}
              surname={user?.surname}
              username={user?.username}
              
              avatar={user?.avatar}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Widgets;
