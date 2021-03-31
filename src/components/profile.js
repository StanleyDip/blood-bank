import React, { Component } from 'react'
import bloodlogo from '../images/logo.png';
import donate from '../images/donatetosave.png';
import home from '../images/home.png';
import user from '../images/user.png';
import bell from '../images/bell.png';
import book from '../images/book.png';
import settings from '../images/settings.png';
 class profile extends Component {
    render() {
        return (
            <div>
                <div className="side-bar">
                <img className="profile-blood" src={bloodlogo}/>
                        <h2 className="profile-h2"><span>Blood</span> Donation</h2>
                        <h4><img  className="profile-sd-icon"src={home}></img>  Home</h4>
                        <h4><img className="profile-sd-icon" src={user}></img>  Profile</h4>
                        <h4><img className="profile-sd-icon" src={bell}></img> Notifiations</h4>
                        <h4><img className="profile-sd-icon" src={book}></img>  Donors</h4>
                        <h4><img className="profile-sd-icon" src={settings}></img>  Customize</h4>
                        <img className="donate-image" src={donate}/>
                </div>
                <div className="profile">

                </div>
            </div>
        )
    }
}

export default profile
