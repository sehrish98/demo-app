import React,{useState} from 'react';
import "./DirectMessages.css";
import ProfilePicture from "../../assets/Images/ProfilePicture.PNG"
const DirectMessages=()=>{
    const [contacts,setContacts]=useState([
        {
            profilePicture:ProfilePicture,
            userName:"Sabir_Ansari",
            ActiveStatus:"Active now",
        },
        {
            profilePicture:ProfilePicture,
            userName:"Silent___Knight",
            ActiveStatus:"Active now",
        }
    ])
    return(
        <div className="DirectMessages">
            <div className="contactContainer">
                    <h5 className="direct">Direct</h5>
                    {contacts.map(contact=>{
                        return(
                            <div className="contactInfo">
                                <img src={contact.profilePicture} alt="Profile Picture" className="DMProfilePicture"/>
                                <p className="DmUserName">{contact.userName}</p>
                                {/* <p className="DmActiveStatus">{contact.ActiveStatus}</p> */}
                        </div>        
                        );
                    })}
                </div>
            </div>
    );
}
export default DirectMessages;