import {Routes,Route} from 'react-router-dom'

import Header from './Components/Header';
import ErrorPage from './Components/ErrorPage';
import Youtube from './Components/Youtube'
import YoutubeVideo from './Components/YoutubeVideo';


function App() {
  return (
    <>
    <Header/>  
    
    <Routes>
      <Route path="/" element={<Youtube/>}>
      </Route>
      {/* <Route path="/:q" element={<Youtube/>}>
      </Route> */}
      <Route path="/videodata/:id" element={<YoutubeVideo/>}>
      </Route>
   
      <Route path="/*" element={<ErrorPage/>}>
      </Route>
      {/* <Route path="/videodata/*" element={<ErrorPage/>}>
      </Route> */}
    </Routes>

    </>
  );
}

export default App;
