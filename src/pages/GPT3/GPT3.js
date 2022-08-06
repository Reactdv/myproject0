import React from 'react'
import "./gpt3.css"
import { Feature  } from '../../components'

const Gpt3 = () => {
  return (
    <div id='gpt3' className='gpt3__container section__padding'>
      <div className="gpt3-content__container section__padding">
        <div className="gpt3-top__section ">      
           <div>
             <Feature txt="What is GPT-3"/>
           </div>
           <div>
             <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
           </div>
        </div>
        <div className="gpt3-center__section">
            <h1>
                The possibilities are beyond <br />
                your imagination
            </h1>
            <h5>
                Explore the library
            </h5>
        </div>
        <div className="gpt3-bottom__section">
            <div>
                 <Feature txt="Chatbots"/>
                 <p>
                    We so opinion friends me message <br/>as delight. Whole front do of plate <br/> heard oh ought. 
                 </p>
            </div>
            <div>
                 <Feature txt="Knowledge base"/>
                 <p>
                    At jointure ladyship an insisted <br/> humanity he. Friendly bachelor <br/>entrance to on by. As put
                      <br/>impossible own apartments 
                 </p>
            </div>
            <div>
                 <Feature txt="Education"/>
                 <p>
                     At jointure ladyship an insisted <br/> humanity he. Friendly bachelor <br/>entrance to on by. As put
                      <br/>impossible own apartments 
                 </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Gpt3