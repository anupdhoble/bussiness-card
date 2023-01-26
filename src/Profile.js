import React from "react"
export default function Profile(){
    return(
        // <div className="profile-img">
            <img className="profile_img" src={process.env.PUBLIC_URL + '/img/profile.jpg'}/>
            
        // </div>
    )
}