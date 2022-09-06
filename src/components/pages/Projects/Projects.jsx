import React from 'react'
import styled from 'styled-components'
import HarryPotter from '../../../assets/images/HarryPotterTrivia.png'
import PettingZoo from '../../../assets/images/PettingZoo.png'
import PIF from '../../../assets/images/PlantItForward.png'
import Portfolio from '../../../assets/images/Portfolio.png'

const ProjectsContainer = styled.div`
  font-family: 'Ubuntu', sans-serif;

.projects{
  height: 100vh;
  overflow: auto;
}

.projects::-webkit-scrollbar {
  display: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;
}

.title{
  font-size: 50px;
  font-weight: bold;
  padding-top: 30px;
  margin: 0px;
}

.all-projects{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;
  margin-top: 130px;
  padding-top: 50px;
  padding-bottom: 50px;
}


.container{
  padding: 20px;
  border: 5px solid white;
  border-radius: 20px;
  background-color: rgba(192, 236, 249, 0.9);
  width: 400px;
  margin-bottom: 20px;
}

img{
  width: 20vw;
}

.project-box{
  background-color: rgba(192, 236, 249, 0.9);
  margin: 15px;
  width: 75%;
  display: flex;
  flex-direction: row;
  border-radius: 50px;
}

.img-box{
  width: 30%;
  font-size:1.5vw;
  margin: 0px 25px 25px 25px;  
}

.description-box{
  width:70%;
  font-size: 2vw;
  margin: auto;
  /* margin-left: 0px; */
  margin-right: 20px;
  text-align: justify;
}

.link{
  text-decoration: none;
  background-color: white;
  padding: 5px;
  border: 2px solid black;
  border-radius: 15px;
  color: black;
}
`

const Projects = () => {
  return (
    <ProjectsContainer>
    <div className='projects'>
    <div className='all-projects'>
    <h1 className='title'>Portfolio</h1>

    <div className="project-box">
      <div className="img-box">
        <h2>Harry Potter Trivia</h2>
        <a href="https://justaples.github.io/Harry-Potter-Trivia/" target='_blank' rel='noreferrer'>
          <img src={HarryPotter} alt="" />
        </a>  
      </div>
      <div className="description-box">
        <div>
          <p>Description: This is a trivia for all the Potterheads to test if they are Pure-blood, Half- Blood, or a Squib. The player is shown a Harry Potter related question and 4 different possible answers on screen. There are a total of 10 questions and each correct answer awards 10 points.</p>
          <p>Tecnologies: JavaScript, HTML and CSS </p>
          <a className='link' href="https://github.com/justaples/Harry-Potter-Trivia" target='_blank' rel='noreferrer'>GitHub Repo</a>
        </div>
      </div>
    </div>

    <div className="project-box">
      <div className="img-box">
        <h2>Forrest & Friends <br /> Petting Zoo</h2>
        <a href="https://crud-petting-zoo.herokuapp.com/home" target='_blank' rel='noreferrer'>
          <img src={PettingZoo} alt="" />
        </a>  
      </div>
      <div className="description-box">
        <div>
          <p>Description: This is a full CRUD project with Google OAuth implemented. It was designed to help the employees of a petting zoo keep track of the husbandry log for each animal. Employees are able to see all animals available, enter add / edit / delete animals to the list, as well as enter logs for their care.</p>
          <p>Tecnologies: Express, Node.js, Mongoose, GoogleOAuth, EJS, Multer, Bootstrap </p>
          <a className='link' href="https://github.com/justaples/Forrest-and-Friends-Petting-Zoo" target='_blank' rel='noreferrer'>GitHub Repo</a>
        </div>
      </div>
    </div>

    <div className="project-box">
      <div className="img-box">
        <h2>Plant it Forward</h2>
        <a href="https://plant-it-forward.herokuapp.com/" target='_blank' rel='noreferrer'>
          <img src={PIF} alt="" />
        </a>  
      </div>
      <div className="description-box">
        <div>
          <p>Description: This is a group project for Plant Propagation. My main roles were: Write the code for the RESTful routes in the backend. Create and connect to Atlas database. Design the search bar. Deploy both front and backend. </p>
          <p>Tecnologies: React, Node.js, Express, JavaScript, HTML, CSS, Google Maps, Multer, Cloudinary </p>
          <a className='link' href="https://github.com/Plants-and-stuff" target='_blank' rel='noreferrer'>GitHub Repo</a>
        </div>
      </div>
    </div>

    <div className="project-box">
      <div className="img-box">
        <h2>This Website</h2>
          <img src={Portfolio} alt="" />
      </div>
      <div className="description-box">
        <div>
          <p>Description: Work in Progress</p>
          <p>Tecnologies: React.js, HTML, CSS </p>
          <a className='link' href="https://github.com/justaples/Juliana-Staples" target='_blank' rel='noreferrer'>GitHub Repo</a>
        </div>
      </div>
    </div>
    </div>
    </div>
    </ProjectsContainer>
  )
}

export default Projects