import React from 'react'
import './nav.css'
import navLogo from '../../assets/logo.svg'

const Nav = () => {
  const [isMenuOpen,setIsMenuOpen] = React.useState(false)

  const handleMenu =()=> setIsMenuOpen(open=>!open)
  const handleMenuModal =
    isMenuOpen  && (
    <div className="nav-menu__modal__container">
      <ul>
         <li><a href="#home">Home</a></li>
         <li><a href="#wgp3">What is GP3?</a></li>
         <li><a href="#open-ai">Open Ai</a></li>
         <li><a href="#case-study">Case Study</a></li>
         <li><a href="#library">Library</a></li>
         <li><a href="#login">Login</a></li>
         <button className="signup__btn">Signup</button>
      </ul>
    </div>
    
    )
   
  
  

  return (
   <div className="nav__container">
    <div className="nav-logo__container">
        <img src={navLogo} alt="" className="nav__logo" />
    </div>
    <div className="nav-links__container">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#wgp3">What is GP3?</a></li>
            <li><a href="#open-ai">Open Ai</a></li>
            <li><a href="#case-study">Case Study</a></li>
            <li><a href="#library">Library</a></li>

        </ul>
    </div>
    <div className="nav-auth__container">
        <button className="login__btn">Login</button>
        <button className="signup__btn">Signup</button>
    </div>
    <div id={isMenuOpen && 'menuOpen'} onClick={handleMenu} className="nav-menu__container">
        <div />
        <div />
        <div />
    </div>
     {handleMenuModal}
   </div>
  )
}

export default Nav