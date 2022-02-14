import React, {useState} from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

import Varmints from "./varmint_example.png"
import NotePassr from "./notepassr.png"
import Camo from "./camo_example.png"
import ChatHub from "./chat_hub.png"
import Skillswap from "./skillswap.png"
import StarPew from "./star-pew.png"

function Carousel() {

    const [currentImage,setCurrentImage] = useState(0)

    const images = [
        {title: "Varmints", bgColor: "rgba(11, 3, 34, 0.849)", image: Varmints, address:"https://github.com/WillowGardener/WillowGardener.github.io/tree/master/Varmints", description: "Varmints is a tiny ecosystem simulator. Varmints includes code that simulates evolution, allowing each species to adapt to their environment. I originally coded it in pygame, and have recently updated it in javascript, adding a UI panel where users can edit the statistics of the plants and animals, making it a sandbox game. "},
        {title: "Cascadia Skillswap", bgColor: "rgba(0, 30, 80, 0.849)", image: Skillswap, address:"http://willowgardener.pythonanywhere.com/", description: "Cascadia Skill Swap is a social network and message board I'm developing to help people create resilient communities by teaching each other practical skills. This concept occurred to me as cascading crises occurred in the US and I saw just how fragile our infrastructure is. I've coded a minimum viable product, but plan to add many more features in the future. I intend to remake Skill Swap in React in the next year. In the meantime, you can check out the alpha version on Python Anywhere: "},
        {title: "Notepassr", bgColor: "rgba(36, 9, 1, 0.849)", image: NotePassr, address:"https://notepassr.web.app", description: "NotePassr is a chatroom app I developed to have a retro style, reminiscent of the days of passing notes in the classroom. It uses a React front-end and a Firebase backend, and is free for anyone to use!"},
        {title: "Camo Generator", bgColor: "rgba(0, 27, 8, 0.849)", image: Camo, address:"https://github.com/WillowGardener/WillowGardener.github.io/tree/master/camo%20generator", description: "A website where you can upload any image and get a randomly-generated image that will blend in with that picture, allowing you to dynamically create a pattern so that you can create highly-specialized camouflage that doesn't look like camouflage."},
        {title: "Chat Hub", bgColor: "rgba(73, 11, 0, 0.849)", image: ChatHub, address:"http://hub.cyphernaut.net/", description: "A site developed for a network administration client for his VoIP server, with interactible, editable cards. The client needed a website where he could consolidate information about his private VoIP service so that he could direct his clients toward it, rather than sending out information manually over email."},
        {title: "Star Pew", bgColor: "rgba(78, 11, 78, 0.849)", image: StarPew, address:"https://scratch.mit.edu/projects/633464046/fullscreen/", description: "A small game I developed using the block coding language Scratch to show my coding students the sort of projects they can create."}
    ]
    

    return (
        <div className="carousel" style={{ backgroundImage: `url(${images[currentImage].image})`}}>

            <div className="left arrow"
            onClick={()=> {
                if (currentImage === 0) {
                    setCurrentImage(images.length-1)
                } else {
                    setCurrentImage(currentImage-1)
                }
            }}>
                <ArrowBackIosIcon style={{ fontSize: 30 }} />
            </div>

            <div className="carousel-content" >
                

                <div className="carousel-text" style={{backgroundColor:`${images[currentImage].bgColor}`}}>
                    <h2>{images[currentImage].title}</h2>
                    <p>{images[currentImage].description}</p>
                    
                    <a className="button-container" href={`${images[currentImage].address}`}><button style={{backgroundColor:`${images[currentImage].bgColor}`}} className="link-button">Check it Out!</button></a>
                </div>
            </div>

            <div className="left arrow" onClick={()=> {
                if (currentImage === images.length-1) {
                    setCurrentImage(0)
                } else {
                    setCurrentImage(currentImage+1)
                }
            }}>
                <ArrowForwardIosIcon style={{ fontSize: 30 }} />
            </div>

        </div>
    )
}

export default Carousel
