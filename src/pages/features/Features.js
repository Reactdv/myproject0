import React from 'react'
import './features.css'
import { Feature } from '../../components'

const  data = [
  {
    title:'Improving end distrusts instantly ',
    subtitle:'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },

  {
    title:'Become the tended active',
    subtitle:'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
  },

  {
    title:'Message or am nothing',
    subtitle:'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
  },

  {
    title:'Really boy law county',
    subtitle:'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
  }
]



const Features = () => {
  return (
    <div className='features__container section__padding'>
      <div>
        <h1>
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h1>
        <h5>Request early access to get started</h5>
      </div>
      <div>
        {
          data.map((item,index)=>(
            <div key={index}>
              <Feature txt={item.title}/>
              <h3>{item.subtitle}</h3>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Features