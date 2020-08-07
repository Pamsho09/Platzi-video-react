import React from "react";
import { connect } from 'react-redux'

import {setFavorite,deleteFavorite} from '../actions'
import '../assets/css/components/card.css'
import play from '../assets/img/icons8-play-64.png'
import plus from '../assets/img/icons8-plus-64.png'
import remove from '../assets/img/remove-icon_a56b8107-2c02-49ed-bead-308031b0dd76.png'
import { Link } from "react-router-dom";
//import cover from '../assets/img/brisa.jpeg'
function Card  (props) {
  const  {id,cover,title,year,contentRating,duration}=props
   const handleSetFavorite = ()=>{

    props.setFavorite({id,cover,title,year,contentRating,duration})
    console.log({id,cover,title,year,contentRating,duration})
   }
   const handleDeleteFavorite = (itemId)=>{
console.log(itemId)
    props.deleteFavorite(itemId)
   }
 return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
          <img src={play} alt="" />
          </Link>
          
          {props.mode?<img src={remove} alt="" onClick={()=>handleDeleteFavorite(id)} /> :   <img src={plus} alt="" onClick={handleSetFavorite} /> }
      
          
        </div>
 <p className="carousel-item__details--title">{title}</p>
 <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration} `}</p>
      </div>
    </div>
  );

    
 
}
const mapDispatchToProps ={
setFavorite,deleteFavorite,

}
export default connect(null,mapDispatchToProps)(Card);
