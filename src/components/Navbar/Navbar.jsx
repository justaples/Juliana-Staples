import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import myLogo from '../../assets/images/JulianaStaples.png'
import { SocialIcon } from 'react-social-icons';

const NavContainer = styled.div`
  
  .navBar {
    height: 130px;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    background-color: #F0F3F5;
    border-bottom: 2px solid black;
    /* background: inherit; */
  }
  
.logo{
    height: 115px;
    position: absolute;
    left: 0;
    margin: 10px 30px 10px 30px;
}

.nav{
    display: flex;
    align-items: center;
    /* justify-content: flex-start; */
    /* border: 1px solid blue; */
}

.link{
    margin: 20px;
    text-decoration: none;
    font-size: 25px;
    font-family: 'Ubuntu', sans-serif;
    color: black;
    font-weight: bold;
  }
  
  .linkIcons{
  margin: 10px;

}
`
const Navbar = () => {

  return (
    <NavContainer >
    <div className='navBar' 
     >
      <div>
      <Link to='/home' className='link'>
      <img src={myLogo} alt="juliana-staples-logo" className='logo'/>
      </Link>
    </div>      
      <div className="nav">
        <Link to='/about' className='link'>About Me</Link>
        
        <Link to='/projects' className='link'>Portfolio</Link>
        <div className="contact-container">
          {/* <div className="contact-me">
            <h3>Contact me!</h3>
          </div> */}
          <div className="links-container">
        <SocialIcon url="mailto:juhpaim@hotmail.com" className='linkIcons' bgColor='#403f53'/>
        <SocialIcon url="https://www.linkedin.com/in/julianastaples/" className='linkIcons' bgColor='#0a56a2' target='_blank' rel='noreferrer'/>
        <SocialIcon url="https://github.com/justaples" className='linkIcons' bgColor='black' target='_blank' rel='noreferrer'/>
          </div>
        </div>
        </div>
    </div>
    </NavContainer>
  )
}

export default Navbar