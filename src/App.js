import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import PlayList from './Pages/Playlist/PlayList';
import LikedVideos from './Pages/LikedVideos/LikedVideos';
import WatchLater from './Pages/WatchLater/WatchLater';
import History from './Pages/History/History';
import VideoDetails from './Pages/VideoDetails/VideoDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='video-container flex'> 
        <Sidebar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/playlist" element={<PlayList/>}/>
            <Route path="/likedvideos" element={<LikedVideos/>}/>
            <Route path="/watchlater" element={<WatchLater/>}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/videodetails/:videoId" element={<VideoDetails/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
