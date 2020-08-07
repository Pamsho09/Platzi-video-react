import React from 'react'
import '../assets/css/components/carousel.css'


function Carousel ( {children}){
   
return <>
<section className="carousel" >
      <div id='carousel__containe' className="carousel__container">
    
     {children}
          
      </div>
     </section>
</>

}
export default Carousel