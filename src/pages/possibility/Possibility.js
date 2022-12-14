import React from 'react'
import './possibility.css'
import possibility from '../../assets/possibility.png'


const Possibility = () => {
  return (
    <div id='possibility' className='possibility__container section__padding'>
     <div className="possibility-img__container">
      <img src={possibility} alt="" className="possibility__img" />
     </div>
     <div className="possibility-content__container">
        <p>
          Request Early Access to Get Started
        </p>
        <h1>
          The possibilities are <br/>beyond your imagination
        </h1>
        <p className='possibility-txt'>
          Yet bed any for travelling assistance indulgence unpleasing.
          Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <h5>
          Request Early Access to Get Started
        </h5>
     </div>
    </div>
  )
}

export default Possibility