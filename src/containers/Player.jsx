import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import {getVideoSource} from '../actions'
import '../assets/css/Player.css'
import { Redirect } from 'react-router-dom'
import NotFound from '../containers/NotFound'
function Player(props) {
    const {id}=props.match.params
    const hasPlaying =Object.keys(props.playing).length >0
useEffect(()=>{
    props.getVideoSource(id)
},[])

    return hasPlaying ? (
        <div className='Player'>
            <video controls autoPlay>
                <source src={props.playing.source} type='video/mp4' />

            </video>
            <div className="Player-back">
                <button onClick={()=> props.history.goBack()}>
                    Regresar
                </button>
            </div>
        </div>
    ):<NotFound />
}
const recibir=state=>{

return{
    playing:state.playing,
}
}
const enviar={

    getVideoSource,
}
export default connect(recibir,enviar)(Player)