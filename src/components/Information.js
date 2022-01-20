import React from "react"
import mail_icon from "../images/Mail.png"
import linkedin_icon from "../images/linkedin.png"
import picture from "../images/pic.jpg"


export default function Information()
{

    return(
        <div className="info--section">
            <img src={picture} className="info--pic"/>
            <h1 className="info--name">Jose Ignacio Labella Sanfrutos</h1>
            <h2 className="info--extra">Fullstack Developer</h2>
            <ul className="info--links">
                <li><img src={mail_icon} /><a onClick={()=>{alert("ls.joseignacio@gmail.com")}}>Email</a></li>
                <li><img src={linkedin_icon}/><a href="https://www.linkedin.com/in/jose-ignacio-l-574970229/" target="_blank">Linkedin</a></li>
            </ul>
        </div>
    )
}