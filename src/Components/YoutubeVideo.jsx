import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import YoutubeData from "./YoutubeData";
import img from "./images/YouTube.png";
import { Link } from "react-router-dom";

const YoutubeVideo = (e) => {
  const params = useParams();
  const { id } = params;
//   const [foundData, setFoundData] = useState(false);

  // console.log(searchParams)
  return (
    <>
      {/* <h1>{id}</h1> */}
      {YoutubeData.filter((item, index) => {
        if (item.id == id) {
          return item;
        } 
       
      }).map((item, index) => {
        return(
            <div className="container p-2 m-2 ">
            <div className="row my-3">
              <div className="col-10">
                <div className="yt-thumnail-video">
                  <img src={img} className="img1" alt="Youtube Thumbnail" />
                </div>
                <div className="yt-thumnail-desc" key={index}>
                  <h5>{item.title}</h5>
                  <p>{item.views}</p>
                  <p>
                    {item.channel} - {item.id}
                  </p>
                  <Link to="/">Back</Link>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  );
};

export default YoutubeVideo;
