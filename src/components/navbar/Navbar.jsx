import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import'./navbar.css';

const Menu = () =>(
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wgpt3">What is GPT3?</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <did className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />  
        </did>
        <did className="gpt3__navbar-links_container">
          <Menu/>
        </did>
      </div>
      <did className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </did>
      <did className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <did className="gpt3__navbar-menu_container-links"></did>
            <Menu />
            <did className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </did>
          </div>
        ) }
      </did>      
    </div>
  )
}

export default Navbar