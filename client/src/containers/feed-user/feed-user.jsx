import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Axios from "axios";
import { connect } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import moment from "moment";
import Post from "../../components/post/post.jsx";
import { Avatar, Button } from "@material-ui/core"
import { follow, unfollow } from "../../redux/actions/users";
import "./feed-user.scss";


const UserFeed = () => {

  const user = useSelector(state => state.user);
  console.log(user._id)

  const [userProfile, setProfile] = useState(null)
  const [userPosts, setUserPosts] = useState(null)
  const [userFollowing, setUserFollowing] = useState(null)
  const [userFollowed, setUserFollowed] = useState(null)
  const [userFollow, setUserFollow] = useState()
  const [userUnfollow, setUserUnfollow] = useState()

  const { username } = useParams()
  console.log("hola " + username)
  
  
  useEffect(()=> {
    Axios.get(`http://localhost:3000/users/${username}`)
    .then((res) => {
      const user = res.data;
      //this.setState({ user });
      console.log(user)
      setProfile(user)
      
    });
  },[])

    const followUser = () => {
      const followw = {
        user: user._id,
        followed: userProfile?.user._id
      };
  
      follow(followw)
      setUserFollow(followw)
      //window.location.reload()

      console.log(followw);

    };

    const unfollowUser = () => {
      Axios.delete(`http://localhost:3000/users/follow/${userProfile?.user._id}`)
      .then((res) => {
      const unfollow = res.data;
      setUserUnfollow(unfollow)
      console.log(unfollow)
      
      })
    };

    const getUserPosts = () => {
      Axios.get(`http://localhost:3000/post/${userProfile?.user._id}`).then((res) => {
      const posts = res.data;
      console.log(posts)
      setUserPosts(posts)
      setUserFollowed(null)
      setUserFollowing(null)
      });
    }


    const getUserFollowing = () => {
      Axios.get(`http://localhost:3000/users/following/${userProfile?.user._id}`)
      .then((res) => {
      const following = res.data.following;
      //this.setState({ user });
      console.log(following)
      setUserFollowing(following)
      setUserFollowed(null)
      setUserPosts(null)
      });
    }

    const getUserFollowed = () => {
      Axios.get(`http://localhost:3000/users/followed/${userProfile?.user?._id}`)
        .then((res) => {
        const followed = res.data.followed;
        //this.setState({ user });
        console.log(followed)
        setUserFollowed(followed)
        setUserFollowing(null)
        setUserPosts(null)
        });
      
    }

    
  

  return (
  
    <div className="feed">
      {/* Header */}
      <div className="feed_header">
  <h2>Feed del usuario!! {userProfile?.user.name} {userProfile?.user.surname}</h2>
      </div>

      <div>
  </div>
      {/* TweetBox */}
      
      <div className="post_container">
        <div className="user_container">
          <div className="user_info">
            <div className="user_left">
              <img src={userProfile?.user.avatar} className="profile_avatar" alt="" srcset=""/>
            </div>

            <div className="user_right">
              <h1>{userProfile?.user.name} {userProfile?.user.surname}</h1> 
              <span className="username">@{userProfile?.user.username}</span>

              <h3>{userProfile?.user.email}</h3>
              <h4>{userProfile?.user.bio}</h4>

              <h3>Following: {userFollowing?.length}
              Followers: {userFollowed?.length}
            </h3>

            <button onClick={() => followUser()}>Follow</button>
            <button onClick={() => unfollowUser()}>Unfollow</button>
            <br/>
            <button onClick={() => getUserPosts()}>Inicio</button>
            <button onClick={() => getUserFollowing()}>Clicka aqui para ver los usuarios seguidos por @{userProfile?.user?.username}</button>
            <button onClick={() => getUserFollowed()}>Clicka aqui para ver los seguidores de @{userProfile?.user?.username}</button>
            </div>
          </div>
          

          <div className="user_bottom">
           
          
          {/*<Link to={"/" + userProfile?.user.username + "/followers"}><h3>Followers</h3></Link> */}
          </div>
        </div>
     </div> 
    {userPosts?.map((post) => (
        <Post
            key={post._id}
            name={post.user?.name}
            surname={post.user?.surname}
            username={post.user?.username}
            text={post.text}
            avatar={post.user?.avatar}
            image={post.image}
            date={moment(post.date).calendar()}
          />
        ))}

    {userFollowing?.map((following) => (
        <Post
            key={following.followed._id}
            name={following?.followed.name}
            surname={following?.followed.surname}
            username={following?.followed.username}
            text={following?.followed.username}
            avatar={following?.followed.avatar}
          />
        ))}
    
    {userFollowed?.map((followed) => (
        <Post
            key={followed?.user._id}
            name={followed?.user.name}
            surname={followed?.user.surname}
            username={followed?.user.username}
            text={followed?.user.username}
            avatar="https://i.ytimg.com/vi/2ulh3M9sQM8/maxresdefault.jpg"
          />
        ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      user: state.user
    }
  }
  
export default connect(mapStateToProps)(UserFeed)