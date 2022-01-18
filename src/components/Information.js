import React from "react"



export default function Information()
{
    return(
        <div className="info--section">
            <img src="https://www.closetag.com/images/photo4.jpg" className="info--pic"/>
            <h1 className="info--name">Jose</h1>
            <h2 className="info--extra">To be developer</h2>
            <ul className="info--links">
                <li>Email</li>
                <li><a href="https://github.com/justanacho?tab=repositories" target="_blank">Projects</a></li>
            </ul>
        </div>
    )
}