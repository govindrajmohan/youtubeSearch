import React from 'react'
import { Link } from 'react-router-dom'
import img from './images/YouTube.png'

export const YtubeSearch = (props) => {
    console.log(props.id);
  return (
    
    <div className='container p-2 m-2 '>
        <div className="row">
            <div className="col-2">
                <div className='yt-thumnail'>
                <Link to={`/videodata/${props.id}`} >
            <img src={img} className="img1" alt="Youtube Thumbnail" />
           
            </Link>
                </div>
            </div>
            <div className="col-4">
                <div className='yt-thumnail-desc'>
                <Link style={{display:'block'}} to={`/videodata/${props.id}`} >
            <h5>{props.title}</h5>
            </Link>
                    <p>{props.view}</p>
                    <p>{props.channel}</p>
                </div>
            </div>
            <div className="col-6"></div>
        </div>
        

        
    </div>
  )
}
