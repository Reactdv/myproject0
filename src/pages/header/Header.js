import React from 'react'
import aiHead from "../../assets/ai.png"
import peoples from '../../assets/people.png'
import './header.css'

const Header = () => {
  return (
    <div className='header__container section__padding'>
      <div className="header-content__container">
        <div className="title">
           <h1>Let's build something amazing with GP3 open ai</h1>
        </div>
        <div className="subtitle">
          <h3>Yet bed any for travelling assistance indulgence unpleasing.
             Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. 
             Party we years to order allow asked of.
          </h3>
        </div>
        <div className="input__section">
          <input type="email" placeholder='Enter email' />
          <button>Get Started</button>
        </div>
        <div className="peoples__container">
          <img src={peoples} alt="" />
          <h3>1,600 people requested access a visit in last 24 hours</h3>
        </div>
      </div>
      <div className="header-img__container">
        <img src={aiHead} alt="" className="header-ai__img" />
      </div>

    </div>
  )
}

export default Header