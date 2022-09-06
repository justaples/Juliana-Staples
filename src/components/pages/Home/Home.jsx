import React from 'react'
import styled from 'styled-components'
import { TbBrandJavascript, TbBrandPython } from 'react-icons/tb';
import {SiExpress, SiDjango, SiPostgresql, SiHeroku, SiMongodb, SiBootstrap, SiCss3, SiReact, SiNodedotjs, SiHtml5} from 'react-icons/si'



const HomeContainer = styled.div`
font-family: 'Ubuntu', sans-serif;

.home{
    height: 100vh;
    overflow: auto;
}

.home::-webkit-scrollbar {
    display: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-around;
  }

.main-text{
    width: 75%;
    margin: auto;
    margin-top: 170px;
    margin-bottom: 40px;
    padding: 5px;
    color: black;
    /* text-shadow: 3px 3px #eff9fc; */
    font-size: 3vw;
    background-color: rgba(192, 236, 249, 0.9);
    border-radius: 50px;
}

.title{
    font-size: 3.5vw;
    font-weight: bold;
    padding-top: 30px;
    margin: 0px;
  }

  .skills-container{
    background-color: rgba(192, 236, 249, 0.9);
    border-radius: 50px;
    margin: auto;
    margin-bottom: 50px;
    width: 75%;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    font-size: 100px;
    flex-wrap: wrap;
  }
  
  .logo{
    width: 150px;
    margin: 10px;
    position: relative;
    display: inline-block;
  }
  
  /* .logo-container{
    padding: 0px;
  } */
  
  .logo-name{
    text-align: center;
    font-size: 2vw;
    margin: 0.1vh;
    margin-bottom:0px;
    padding: 0vw;
  }
  
  .logo-icon{
    /* height:10vh; */
    margin: 0px;
    font-size: 8vw;
  }
  
  
  @media screen and (max-width: 600px) {
    .logo{
      width: 20px;
      margin: 15px;
      display: inline-block;
    }
    
    .skills-container{
      font-size: 30px;
    }

    .logo-icon{
      height:5vh;
      margin: 0px;
    }
    
  
  }
`

const Home = () => {
  return (
    <HomeContainer>
    <div className='home'>
      <div className="main-text">
      <h1>Hello, I'm Juliana!</h1>
      <p>A Software Engineer with a creative eye and passion for delivering delightful customer experiences, assisting my team in realizing their own goals, and creating processes to foster cross-departmental collaboration. </p> 
      </div>
    <div className='skills-container'>
          <div className='skills-title'>
            <h1 className='title'>Skills</h1>
          </div>
          <div className="logo-container">
            <div className='logo'>
            <p className='logo-name'>JavaScript</p>
            <TbBrandJavascript className='logo-icon' />
            </div>
            <div className='logo'>
            <p className='logo-name'>ReactJs</p>
            <SiReact className='logo-icon' />
            </div>
            <div className='logo'>
            <p className='logo-name'>Python</p>
            <TbBrandPython className='logo-icon' />
            </div>
            <div className='logo'>
            <p className='logo-name'>HTML</p>
            <SiHtml5 className='logo-icon' />
            </div>
            <div className='logo'>
            <p className='logo-name'>CSS</p>
            <SiCss3 className='logo-icon' />
            </div>
            <div className='logo'>
            <p className='logo-name'>Node.Js</p>
            <SiNodedotjs className='logo-icon' />
            </div>
            <div className='logo'>
            <p className='logo-name'>Express</p>
            <SiExpress className='logo-icon' />
            </div>
            <div className='logo'>
            <p className='logo-name'>Django</p>
            <SiDjango className='logo-icon' />
            </div>
            <div className='logo'>
            <p className='logo-name'>PostgreSQL</p>
            <SiPostgresql className='logo-icon' />
            </div>
            <div className='logo'>
            <p className='logo-name'>Heroku</p>
            <SiHeroku className='logo-icon' />
            </div>
            <div className='logo'>
            <p className='logo-name'>MongoDB</p>
            <SiMongodb className='logo-icon' />
            </div>
            <div className='logo'>
            <p className='logo-name'>Bootstrap</p>
            <SiBootstrap className='logo-icon' />
            </div>
          </div>
        </div>
    </div>
    </HomeContainer>
  )
}

export default Home