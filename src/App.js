import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import PlayList from "./Pages/Playlist/PlayList";
import LikedVideos from "./Pages/LikedVideos/LikedVideos";
import WatchLater from "./Pages/WatchLater/WatchLater";
import History from "./Pages/History/History";
import VideoDetails from "./Pages/VideoDetails/VideoDetails";
import Login from "./Pages/Login/Login";
import RequiresAuth from "./utils/require-auth";
import Playlists from "./Pages/Playlist/Component/Playlists";

import Mockman from "mockman-js";

function MockAPI() {
  return (
    <div className="MockAPI">
      <Mockman />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          } />
        <Route
          path="/playlist"
          element={
            <RequiresAuth>
              <PlayList />
            </RequiresAuth>
          }
        />
        <Route
          path="/likedvideos"
          element={
            <RequiresAuth>
              <LikedVideos />
            </RequiresAuth>
          }
        />
        <Route
          path="/watchlater"
          element={
            <RequiresAuth>
              <WatchLater />
            </RequiresAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RequiresAuth>
              <History />
            </RequiresAuth>
          }
        />
        <Route path="/videodetails/:videoId" 
        element={
          <RequiresAuth>
            <VideoDetails />
          </RequiresAuth>
        }
         />
          <Route path="/playlists/:playlistId" 
        element={
          <RequiresAuth>
            <Playlists />
          </RequiresAuth>
        }
         />
        <Route path="/login" element={<Login />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
