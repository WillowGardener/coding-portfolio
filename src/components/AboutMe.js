import React from 'react'


function AboutMe() {

    return (
        <div className="about-me component">
            
            <div className="profile">
                <img className="profile-pic" src="./headshot.png" alt="profile picture"/>
                <div className="profile-text-container">
                    <p className="profile-text">My name is Griffin; I'm a programmer and woodworker based in Portland, Oregon. I'm passionate about AI, UI design, and game development; there is nothing more exciting to me than creating dynamic code that takes on a life of its own. I'm especially interested in how robotics and artifical intelligence can be used to reduce humanity's impact on the planet and usher us forward into an age of sustainability. I am a full-stack developer; I love conquering both the logic puzzles and the design challenges that need to be overcome in order to make an application function perfectly. When I'm not coding, you can find me in my garden conducting experiments in permaculture or working on my latest carpentry project. </p>
                    <p className="profile-text">For inquiries, you can reach me at Griffin.Wimminger@gmail.com</p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe