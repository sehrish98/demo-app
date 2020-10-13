import React, { useState } from 'react';
import ProfilePicture from "../../assets/Images/ProfilePicture.PNG"
import Posts from "../../assets/Images/posts.jpg";
import SettingsIcon from '@material-ui/icons/Settings';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import "./Profile.css";



const Profile = () => {
    const [likesAndComments, setLikesAndComments] = useState({ showLikesAndComments: false });
    const [posts, setPosts] = useState([{
        images: (Posts),
        noOfLikes: 22,
        noOfComments: 22
    },
    {
        images: (Posts),
        noOfLikes: 25,
        noOfComments: 100
    },
    {
        images: (Posts),
        noOfLikes: 28,
        noOfComments: 110
    },
    {
        images: (Posts),
        noOfLikes: 201,
        noOfComments: 876
    },
    ]);
    const showLikesAndCommentsHandler = () => {
        setLikesAndComments({ showLikesAndComments: true });
    }
    const hideLikesAndCommentsHandler = () => {
        setLikesAndComments({ showLikesAndComments: false });
    }
    var likesClass = "post";
    var likeAndCommentsClass="likesAndCommentsConatiner"
    if (likesAndComments.showLikesAndComments === true) {
        likesClass = "post like";
        likeAndCommentsClass="likesAndCommentsConatiner"
    }
    else if (likesAndComments.showLikesAndComments === false) {
        likesClass = "post";
        likeAndCommentsClass="likesAndCommentsConatiner  hidden";
    }

    return (
        <div>
            <div className="Profile" onMouseOver={hideLikesAndCommentsHandler}>
                <div className="ProfileInfoContainer">
                    <img src={ProfilePicture} alt="" className="ProfilePicture" />
                    <div className="ProfileInfo">
                        <p className="AccountName">Account___Name</p>
                        <button class="EditProfile">Edit Profile</button>
                        <SettingsIcon className="settings" />
                        <div className="followersContainer">
                            <p className="posts"><b>10</b> posts</p>
                            <p className="followers"><b>10</b> followers</p>
                            <p className="following"><b>10</b> following</p>
                        </div>
                        <p className="userName"><b>Sabir Ansari</b></p>
                        <p>Bio Bio Bio Bio Bio</p>
                    </div>
                </div>
            </div>
            <div className="postsContainer">
                {posts.map(data => {
                    return(
                        <div className="postContainer">
                        <div className={likeAndCommentsClass}>
                        <FavoriteIcon className="likeIcon" />
                        <p className="noOfLikes">{data.noOfLikes}</p>
                    <div className="commentContainer">
                    <ChatBubbleIcon />
                    <p className="noOfLikes">{data.noOfComments}</p>
                    </div>
                </div>

                <img src={data.images} alt="post" class={likesClass} onMouseOver={showLikesAndCommentsHandler}/>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}
export default Profile;