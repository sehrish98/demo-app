import React from 'react';
import "./Post.css";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import SendIcon from '@material-ui/icons/Send';
const Post = (props) => {
    var like=<FavoriteBorderIcon className="like"/>;
    if(props.liked===true){
        like=<FavoriteIcon className="filledLike"/>;
    }
    else if(props.liked===false){
        like=<FavoriteBorderIcon className="like"/>;
    }
    console.log(props.userName);
    return (
        <div className="postt">
            <div className="identity">
                <img src={props.img} alt="Profile Picture" className="ProfilePicturee" />
                    <p className="userName">{props.userName}</p>
                    <MoreHorizIcon className="more"/>
            </div>
            <img src={props.postImage} alt="Post Image" className="postImagee" />
            <div className="likeContainer" onClick={()=>{props.likeHandler(props.id)}}>
            {like}
            </div>
            <ChatBubbleOutlineOutlinedIcon className="comment"/>
            <SendIcon className="share"/>
            <p className="noOfLikes">{props.noOfLikes} likes</p>
            <p className="postDescription">{props.postDescription}</p>

        </div>)
};
export default Post;