import React from 'react'
import './brand.css'
import { atlassian,google,dropbox,shopify,slack} from './imports'

const Brand = () => {
  return (
    <div className='brand__container '>
        <div className='brand-img__container'>
            <img src={google} alt="" />
            <img src={dropbox} alt="" />
            <img src={shopify} alt="" />
            <img src={slack} alt="" />
        </div>
    </div>
  )
}

export default Brand