import React from "react"
import GitHub_logo from "../images/GitHub Icon.png"
import Twitter_logo from "../images/Twitter Icon.png"

export default function Footer()
{
    return (
        <div className="footer">
            <a href = "https://github.com/justanacho" target="_blank"><img className="footer--img" src={GitHub_logo}/></a>
            <a href = "https://twitter.com/justonenacho" target="_blank" ><img className="footer--img" src={Twitter_logo}/></a>
        </div>
    )
}

