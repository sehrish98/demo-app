import React, { useState } from 'react';
import "./DirectMessages.css";
import ProfilePicture from "../../assets/Images/ProfilePicture.PNG"
import Header from "../header/header";
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import EditLocationOutlinedIcon from '@material-ui/icons/EditLocationOutlined';
const DirectMessages = () => {
    const [contacts, setContacts] = useState([
        {
            id: 1,
            profilePicture: ProfilePicture,
            userName: "Sabir_Ansari",
            ActiveStatus: "Active now",
            messages: [{
                id: "",
                text: "",
                date: ""
            }]
        },
        {
            id: 2,
            profilePicture: ProfilePicture,
            userName: "Silent___Knight",
            ActiveStatus: "Active now",
        },
        {
            id: 2,
            profilePicture: ProfilePicture,
            userName: "Silent___Knight",
            ActiveStatus: "Active now",
        },
        {
            id: 2,
            profilePicture: ProfilePicture,
            userName: "Silent___Knight",
            ActiveStatus: "Active now",
        },
        {
            id: 2,
            profilePicture: ProfilePicture,
            userName: "Silent___Knight",
            ActiveStatus: "Active now",
        },
        {
            id: 2,
            profilePicture: ProfilePicture,
            userName: "Silent___Knight",
            ActiveStatus: "Active now",
        },
        {
            id: 2,
            profilePicture: ProfilePicture,
            userName: "Silent___Knight",
            ActiveStatus: "Active now",
        },
        {
            id: 2,
            profilePicture: ProfilePicture,
            userName: "Silent___Knight",
            ActiveStatus: "Active now",
        },
        {
            id: 2,
            profilePicture: ProfilePicture,
            userName: "Silent___Knight",
            ActiveStatus: "Active now",
        },
    ])
    return (
        <div>
            <Header />
            <div className="DirectMessages">
                <div className="contactContainer">
                    <div className="DirectHeader">
                    <h5 className="direct">Direct</h5>
                    <EditLocationOutlinedIcon/>
                    </div>
                    <div className="contactInfoContainer">
                    {contacts.map(contact => {
                        return (
                            <div className="contactInfo">
                                <img src={contact.profilePicture} alt="Profile Picture" className="DMProfilePicture" />
                                <p className="DmUserName">{contact.userName}</p>
                                {/* <p className="DmActiveStatus">{contact.ActiveStatus}</p> */}
                            </div>
                        );
                    })}
                    </div>
                </div>
                <div className="messagesContainer">
                    <div className="messagesHeader">
                        <img src={ProfilePicture} alt="Profile Picture" className="messageProfilePicture" />
                        <div className="UserNameActiveStateContainer">
                            <p className="messageUserName">Sabir__Ansari</p>
                            <p className="MessageActiveStatus">Active 1h ago</p>
                        </div>
                        <InfoOutlinedIcon className="infoIcon"/>
                    </div>
                    <div className="messageContainer">
                        <div className="incommingMessages">
                            <img src={ProfilePicture} alt="Profile Picture" className="messageProfilePicture" />
                            <p className="incommingMessage">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra facilisis ligula eget hendrerit. In finibus, urna eget ultricies malesuada.</p>
                        </div>
                        <div className="incommingMessages">
                            <img src={ProfilePicture} alt="Profile Picture" className="messageProfilePicture" />
                            <p className="incommingMessage">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra facilisis ligula eget hendrerit. In finibus, urna eget ultricies malesuada.</p>
                        </div>
                        <div className="outgoingMessages">
                            <p className="outgoingMessage">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra facilisis ligula eget hendrerit. In finibus, urna eget ultricies malesuada.</p>
                            <img src={ProfilePicture} alt="Profile Picture" className="messageProfilePicture" />
                        </div>
                        <div className="outgoingMessages">
                            <p className="outgoingMessage">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra facilisis ligula eget hendrerit. In finibus, urna eget ultricies malesuada.</p>
                            <img src={ProfilePicture} alt="Profile Picture" className="messageProfilePicture" />
                        </div>
                        <div className="incommingMessages">
                            <img src={ProfilePicture} alt="Profile Picture" className="messageProfilePicture" />
                            <p className="incommingMessage">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra facilisis ligula eget hendrerit. In finibus, urna eget ultricies malesuada.</p>
                        </div>
                        <div className="outgoingMessages">
                            <p className="outgoingMessage">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra facilisis ligula eget hendrerit. In finibus, urna eget ultricies malesuada.</p>
                            <img src={ProfilePicture} alt="Profile Picture" className="messageProfilePicture" />
                        </div>
                    </div>
                    <div className="typeMessageContainer">
                        <div className="SendMessageContainer">
                        <EmojiEmotionsOutlinedIcon className="smile"/>
                        <input type="text" className="textMessage"/>
                        <ImageOutlinedIcon className="SendImage"/>
                        <FavoriteBorderOutlinedIcon className="likee"/>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
}
export default DirectMessages;