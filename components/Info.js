import React from 'react'

const Info = () => {
    return (
        <header className = "info">
            <img src= "./images/56185c1f-86e9-42e7-ac54-447aeb5996ef.jpg" 
                alt = "woman image"
                width ="317" 
                height ="317"/>
            <h2>David Unah</h2>
            <h3>Full-Stack Developer</h3>
            <a href="#">davidunah.website</a>
            <div className= "info--link">
                <a href="#"><img src="./images/Mail.png"
                className="link-image" 
                alt= "mail image" />Email</a> 
                <a href="#" 
                id= "LinkedIn--icon"><img src="./images/linkedin.png"
                className="link-image" 
                alt= "linkedin image" />LinkedIn</a>
            </div>
        </header>
    )
}

export default Info 