import React, { useState } from 'react';
import "./Home.css"
import PostImage from "../../assets/Images/posts.jpg";
import ProfilePicture from "../../assets/Images/ProfilePicture.PNG"
import Post from "./postcomponent/Post";
import Header from "../header/header";
const Home = () => {
    var [posts, setposts] = useState([
        {
            id: 1,
            img: ProfilePicture,
            userName: "Sabir__Ansari",
            postImage: PostImage,
            noOfLikes: 12,
            postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Kzakjf sajkh skdjh ksjdh jvb dksajh.",
            liked: true
        },
        {
            id: 2,
            img: ProfilePicture,
            userName: "Silent_Knight",
            postImage: PostImage,
            noOfLikes: 12,
            postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Kzakjf sajkh skdjh ksjdh jvb dksajh.",
            liked: false
        }
    ])
    const likeHandler = (id) => {
        // console.log("id",id)
        const post = posts.find((p => p.id == id))
        post.liked = !post.liked
        const index = posts.map((e) => { return e.id; }).indexOf(id);
        const newPosts = posts
        newPosts[index] = post
        setposts(newPosts)
        // console.log(posts);
    }
    // console.log(posts);
    return (
        <div className="home">
            <Header/>
            {
                posts.map((post) => (
                    <Post
                        id={post.id}
                        img={post.img}
                        userName={post.userName}
                        postImage={post.postImage}
                        noOfLikes={post.noOfLikes}
                        postDescription={post.postDescription}
                        liked={post.liked}
                        likeHandler={likeHandler}
                    />
                ))
            }
        </div>
    );
}
export default Home;