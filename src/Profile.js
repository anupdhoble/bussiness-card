import React from "react"
export default function Profile(){
    return(
        <img className="profile_img" src={process.env.PUBLIC_URL + '/img/profile.jpg'}/>
   
    )
}