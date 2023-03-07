import React,{useState} from 'react'
import YoutubeData from './YoutubeData'
import { YtubeThumbnail } from './YtubeThumbnail'
import { YtubeSearch } from './YtubeSearch'
import './Youtube.css'
import { useSearchParams } from 'react-router-dom'

const Youtube = () => {

  const [search,setSearch]= useState("");
  const[searchComp,setSearchCmp] = useState(false);
  const [searchParams,setSearchParams] = useSearchParams();
  const [forSearch,setForSearch] = useSearchParams();


  const queryString =  forSearch.get("q");
  
  const searchClick =()=>{
  console.log(queryString);
  console.log(search)
  console.log(searchParams);
  if(search!==''){

    setSearchCmp(true);
    setSearchParams({q:search});
  }
  else{
    alert("Please enter value to search")
  }
    

}
const handleInputChange = (e)=>{
  setSearch(e.target.value);
}

  const searchInputFocus = ()=>{
    setSearchCmp(true);
  }

  const searchInputFocusOut = ()=>{
      setSearchCmp(false);
  }
  
  return (
    <>
    
    <div className='container-fluid'>
      <div className="row search-btn">
        <div className="col-sm-12 col-md-6">
       

          <input className='m-3 p-2' onChange={(e)=>handleInputChange(e)} onFocus={searchInputFocus} placeholder='Search'   onBlur={searchInputFocusOut}/>
        </div>
        <div className="col-sm-12 col-md-2">
          <button className='m-3 p-2' onClick={searchClick}>Search</button>

        </div>
      </div>
    </div>

    <div className='container-fluid '>

      <div className='row d-flex justify-content-around '>

        {YoutubeData.filter((item)=>
       {
        return(
          (queryString===null) 
          ? item
          : (item.title.toLowerCase().includes(queryString))
        )})
        .map((data,index)=>{
        return(
          <>
          {
          searchComp?
          <YtubeSearch  id={data.id} title={data.title} view={data.views} channel={data.channel} key={index}/>
          :
         <YtubeThumbnail id={data.id} title={data.title} view={data.views} channel={data.channel} key={index}/>
          }
          </>
        )
      })}
      </div>
    </div>
    </>
  )
}

export default Youtube