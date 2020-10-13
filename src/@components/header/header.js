import React from "react";
import {Link,Router} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import "./header.css";
const header=()=>{
    return (
        <div className="header">
            <div className="navigation">
            <div className="brandName">
            <Link to="/" className="brandNameLink">Instagram</Link>
            </div>
            <div className="searchContainer">
            <input type="text" placeholder="search" className="search"/>
            </div>
            <Link to="/home" className="navigationLinks">
            <HomeIcon/>
            </Link>
        <Link to="/message" className="navigationLinks">
                <SendOutlinedIcon/>
                </Link>
            <Link to="" className="navigationLinks">
            <ExploreOutlinedIcon/>
                </Link>
            <Link to="" className="navigationLinks">
                <FavoriteBorderOutlinedIcon/>
                </Link>
                <Link to="/profile" className="navigationLinks">
                    <AccountCircleOutlinedIcon/>
                    </Link>
                </div>
        </div>
    );
}
export default header;