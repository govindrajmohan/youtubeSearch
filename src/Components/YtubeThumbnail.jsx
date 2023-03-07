import React from 'react'
import img from './images/YouTube.png'
import { Link } from 'react-router-dom';
import {YoutubeData} from './YoutubeData'
export const YtubeThumbnail = (props) => {
 
  return (
    <div className='col-sm-6 col-md-3 col-lg-2 p-2  m-3 youtube-card'>
       
        <div className='yt-thumnail'>
            <Link to={`/videodata/${props.id}`} >
            <img src={img} className="img1" alt="Youtube Thumbnail" />
           
            </Link>
        </div>

        <div className='yt-thumnail-desc'>
            <Link to={`/videodata/${props.id}`} >
            <h5>{props.title}</h5>
            </Link>
            <p>{props.view}</p>
            <p>{props.channel} - {props.id}</p>

      
       </div>
        {/* <YoutubeData title={props.title} view={props.views} channel={props.channel} id={props.id}/> */}
    </div>
  )
}
