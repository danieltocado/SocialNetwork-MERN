import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Axios from "axios";
import { connect } from 'react-redux';
import { create } from "../../redux/actions/posts";
import moment from "moment";
import { Avatar } from "@material-ui/core"
import Post from "../../components/post/post.jsx";
import ModalInfo from "../../components/modal_info/modal_info"
import "./feed-following.scss"



const FeedFollowing = () => {

  const user = useSelector(state => state.user);
  console.log(user._id)

  const [userPosts, setPosts] = useState(null)
  
  
  
  useEffect(()=> {
    Axios.get(`http://localhost:3000/users/following/posts/${user._id}`)
    .then((res) => {
      const user = res.data;
      //this.setState({ user });
      console.log(user)
      setPosts(user)
      
    });
  },[])

  const onSubmit = (event) => {
    event.preventDefault();
    const post = {
      text: event.target.text.value,
      image: event.target.image.value,
      user: user._id
    };

    create(post)
    
    
    //window.location.reload()

    console.log(post);
    

};

    
  return (
  
    <div className="feed">
        {/* Header */}
        <div className="feed_header">
          <h2>Inicio</h2>
        </div>

        <div>
    </div>
        {/* TweetBox */}
        <div className="post_container">
        
                <div className="post_form">
                    <Avatar src={user.avatar}/>
                    <div className="post_welcome">
                        <h2>¡Bienvenido {user.name} {user.surname}! 👋</h2>
                        
                            <ModalInfo/>
                    </div>

                </div>

                
           
        </div>
    {/*LikeAction === "liked" ?  :  */}

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

    
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      user: state.user
    }
  }
  
export default connect(mapStateToProps)(FeedFollowing)