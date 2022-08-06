import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'


const Footer = () => {
  return (
    <div className='footer__container section__padding'>
      <div className='footer-heading__container'>
        <h1>
          do you want to step in the future before others
        </h1>
        <div>
          <p>request early access</p>
        </div>
      </div>
      <div className='footer-content__container'>
        <div>
          <img src={logo} alt="" />
          <h5>
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </h5>
        </div>
        <div>
          <ul>
            <li>Links</li>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Company</li>
            <li>Terms & Conditions</li>
            <li>Privacy policy</li>
            <li>Contact</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Get in touch</li>
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li> 085-132567</li>
            <li>info@payme.net</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className='rights__reserved__container'>
          <p className='rights__reserved'>
            © 2022 GPT-3. All rights reserved.
          </p>
      </div>
    </div>
  )
}

export default Footer