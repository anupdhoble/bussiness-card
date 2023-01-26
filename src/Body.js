import React from "react";

export default function Body(){
    return (
        <div className="body">
            <h1 className="body-name">Anup Dhoble</h1>
            <h3 className="body-profession">Frontend Developer</h3>
            <h5 className="body-skills">HTML | CSS | JS | React.js</h5>
            <div className="body-buttons">
                <button className="body-button email">Email</button>
                <button className="body-button linkedin">LinkedIn</button>
            </div>

            <div className="body-about">
                <div className="body-about-module">
                <h3 className="body-about-title">About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </div>
                
                <div className="body-about-module">
                <h3 className="body-about-title">Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
                
            </div>
        </div>
        )
}