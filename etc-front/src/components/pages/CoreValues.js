import React from 'react'
import './CoreValues.css'
import Think from '../../images/ThinkLikeAnOwner.jpg';
import CustomerComes from '../../images/Customer Comes First (2).jpg';
import Discipline from '../../images/Discipline and Accountability (2).jpg';
import Strive from '../../images/Strive for excellence (2).jpg';
import OurPurpose from '../../images/OurPurpose.jpg';
import BestIdeas from '../../images/Best Idea Wins..JPG';
function CoreValues() {
  return (
    <div className='core-values'>
      <h1>CORE VALUES</h1>
      <div className='image-collection'>
         <div className='image1' data-text="The Customer always comes first">
             <img src={CustomerComes} alt='dayoldchick' className='core-images'/>
             <h3 style={{textAlign:'center'}}>The Customer always comes first</h3>
         </div>
         <div className='image2' data-text="Discipline and Accountability">
             <img src={Discipline} alt='dayoldchick' className='core-images' />
             <h3  style={{textAlign:'center'}}>Discipline and Accountability</h3>
        </div>
        <div className='image3' data-text="Think Like and Owner">
             <img src={Think} alt='dayoldchick' className='core-images'/>
             <h3  style={{textAlign:'center'}}>Think Like and Owner</h3>
        </div>
      </div>
      <div className='image-collection'>
         <div className='image1' data-text="Strive for excellence reject Good enough">
             <img src={Strive}  alt='dayoldchick' className='core-images' />
             <h3 style={{textAlign:'center'}}>Strive for excellence reject "Good enough"</h3>
         </div>
         <div className='image2' data-text="Our Purpose Drives Us">
             <img src={OurPurpose}  alt='dayoldchick' className='core-images'/>
             <h3  style={{textAlign:'center'}}>Our Purpose Drives Us</h3>
        </div>
        <div className='image3'  data-text="Best ideas win">
             <img src={BestIdeas} alt='dayoldchick' className='core-images'/>
             <h3  style={{textAlign:'center'}}>Best ideas win</h3>
        </div>
      </div>
    </div>
  )
}

export default CoreValues
