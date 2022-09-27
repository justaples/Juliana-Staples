import React from 'react'
import styled from 'styled-components'
import profilePic from '../../../assets/images/JulianaPicture.png'

const AboutPage = styled.div`

  font-family: 'Ubuntu', sans-serif;

  .about{
    height: 100vh;
    overflow: auto;
  }

  .about::-webkit-scrollbar {
    display: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-around;
  }
  
  img{
    width: 90%;
    border-radius: 100px;
    align-items: center;
  }
  
  .img-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    float: left;
    margin: 30px 50px 25px 50px;
    border-radius: 100px;
  }

  .resume{
    display: flex;
  }

  .resume-btn{
    height: 70px;
    width: 50%;
    text-align: center;
    font-size: 100%;
    text-shadow: 1px 1px gray;
    text-decoration: none;
    border-radius: 15px;
    margin: auto;
    margin-bottom: 5px;
    margin-top: 15px;
    padding: 10px;
    font-weight: bold;
    font-family: 'Ubuntu', sans-serif;
    color: black;
  }
  
  .about-container{
    background-color: rgba(192, 236, 249, 0.9);
    display:flex;
    flex-direction: column;
    margin: auto;
    margin-top: 170px;
    margin-bottom: 75px;
    width: 75%;
    border-radius: 50px;
  }
  
  .title{
    font-size: 50px;
    font-weight: bold;
    padding-top: 30px;
    margin: 0px;
  }
  
  p{
    text-align: justify;
    font-size: 28px;
    padding: 0px 50px 25px 50px;
  }
  
  @media screen and (max-width: 800px) {
    .img-container {
      float: none;
      /* width: 100%; */
    }
    
    p{
      font-size: 12px;
      padding: 0px 25px 25px 25px;
    }
    
    .title{
      font-size: 25px;
    }
    
    .resume-btn{
      height: 45px;
      width: 50%;
      text-align: center;
      font-size: 10px;
      text-shadow: 1px 1px gray;
      text-decoration: none;
      border-radius: 15px;
      margin: auto;
      margin-bottom: 5px;
      margin-top: 10px;
      padding: 0px 10px;
      font-weight: bold;
      font-family: 'Ubuntu', sans-serif;
      color: black;
    }
  }
  `

const About = () => {
  
  const downloadResume = () => {
    fetch('Juliana-Staples.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Juliana-Staples.pdf';
            alink.click();
        })
    })
}

  return (
    <AboutPage>
    <div className='about'>
      <div className='about-container'>

      <h1 className='title'>About Me</h1>
        <article>
        <div className='img-container'>
          <img src={profilePic} alt="profile" />
          <div className='resume'>
          <button className='resume-btn' ><a href="https://drive.google.com/file/d/10Jthp61K0lH1qPRzQSGb8u5R2eUBVMGQ/view?usp=sharing" target='_blank' rel='noreferrer' className='resume-btn'>Resume</a></button>
          <button className='resume-btn' onClick={downloadResume}>Download <br />my Resume</button>
          </div>
        </div>
          <p>
          People joke that I’m an extroverted introvert because of my quiet nature paired with a highly vocal approach to teaching, problem-solving, and driving a higher mission among my team!
        <hr />
          Though my educational background in Material Engineering highlights my logical and analytical approach to delivering value, I’m much more than that! I, also, consider myself someone not afraid to take calculated risks – including my move from Brazil to the USA! Every professional move I make brings me one step closer to giving back in bigger ways, paving the road for others with similar backgrounds, and creating a dream lifestyle for my family and myself!
        <hr />
          Dogs, sunny beaches, and Harry Potter are perfect conversation starters in my book! <br/> When I’m in between trips to Aruba, the Adirondacks, São Paulo, or Florida you can find me curled up at home with my pups (Forrest and Savannah) watching Netflix, re-reading Harry Potter for the X-teenth time, or trying new restaurants with my husband. If my move from Brazil to New York wasn’t enough, I’ve also spent time living in Rhode Island and South Carolina; feel free to ask for restaurant recommendations as I’m a foodie to be trusted!
          </p>
          </article>
      </div>
        
    </div>
    </AboutPage>
  )
}

export default About