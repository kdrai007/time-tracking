// import React from 'react'


const Profile = () => {
    return (
        <div className="user-profile">
            <div className="user-details">
                <div className="user-img">
                    <img src="./images/image-jeremy.png" alt="jeremy pic" />
                </div>
                <div className="user-desc">
                    <p>Report for</p>
                    <h3>Jeremy Robson</h3>
                </div>
            </div>
            <div className="user-time">
                <ul>
                    <li>Daily</li>
                    <li>Weekly</li>
                    <li>Monthly</li>
                </ul>
            </div>
        </div>
    )
}

export default Profile