import React from 'react'
import './Teams.css'
import Justin from '../../images/Justin2.PNG';
import Joseph from '../../images/Joseph2.PNG';
import Mulugeta from '../../images/Mulugeta2.PNG';
import Endrias from '../../images/Endrias.PNG';
import DR_Fikresilassie from '../../images/DR_FikreSilassie.PNG';
import Yonatan from '../../images/Yonatan2.PNG';
import DR_Mulualem from '../../images/DR_Mulualem.PNG';
function Teams() {
  return (
    <div className='Teams'>
    <h1 style={{textAlign:'center', marginTop:'30px'}}>OUR TEAMS</h1>
    <div className='image-collection2'>
       <div className='image7' data-text="DR. JUSTIN BENADE">
           <img src={Justin} alt='dayoldchick' className='teams-images'/>
           <h3 style={{}}>DR. JUSTIN BENADE</h3>
           <p>Ethiopia Managing Director</p>
       </div>
       <div className='image8' data-text="JOSEPH CHIVINGE">
           <img src={Joseph} alt='dayoldchick' className='teams-images'/>
           <h3  style={{}}>JOSEPH CHIVINGE</h3>
           <p>Finance Director</p>
      </div>
      <div className='image9' data-text="MULUGETA ABRHA">
           <img src={Mulugeta} alt='dayoldchick' className='teams-images' />
           <h3  style={{}}>MULUGETA ABRHA</h3>
           <p>Feed Business Director</p>
      </div>
    </div>
    <div className='image-collection2'>
       <div className='image7' data-text="ENDRIAS ALGANEH">
           <img src={DR_Mulualem} alt='dayoldchick' className='teams-images'/>
           <h3 style={{}}>DR.Mulualem Tesfaye</h3>
           <p>Sales Director</p>
       </div>
       <div className='image8' data-text="DR.FIKRESILASSIE DAWIT">
           <img src={DR_Fikresilassie} alt='dayoldchick' className='teams-images' />
           <h3  style={{}}>DR.FIKRESILASSIE DAWIT</h3>
           <p>Production Director</p>
      </div>
      <div className='image9'  data-text="YONATAN FSEHA">
           <img src={Yonatan} alt='dayoldchick' className='teams-images'/>
           <h3  style={{}}>YONATAN FSEHA</h3>
           <p>Human Resource Director</p>
      </div>
    </div>
   
  </div>
  )
}

export default Teams
