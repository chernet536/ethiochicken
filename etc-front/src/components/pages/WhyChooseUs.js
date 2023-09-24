import React from 'react'
import './WhyChooseUs.css'
import a1 from '../../images/a1.png';
import a2 from '../../images/a2.png';
import a7 from '../../images/a7.png';
function WhyChooseUs() {
  return (
    <>
    <div className='Why-Choose'>
    <div>
        <h1 style={{textAlign:'center'}}>WHY CHOOSE US?</h1>
        
    </div>
    <div className='Choose-Container'>
       <div className='one'>
            <img className='distribution'src={a1} alt='no-image' />
            <p>We have built a distrbution network to reach every Ethiopian family</p>
        </div> 
        <div className='two'>
            <img className='distribution2'  src={a2} alt='no-image' />
            <p>We provide various on-site training to our customers</p>      
        </div> 
        <div className='three'>
          <img className='distribution3' src={a7} alt='no-image' />
            <p>We are a GLOBALG.A.P. certified producer</p>           
        </div> 
    </div>
   
    </div>
    </>
  )
}

export default WhyChooseUs
