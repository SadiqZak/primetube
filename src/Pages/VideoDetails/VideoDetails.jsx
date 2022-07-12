import React, { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import { useParams } from "react-router-dom";
import { CardContext } from "../../utils/card-context";
import Sidebar from '../../Components/Sidebar/Sidebar';
import { AuthContext } from "../../utils/auth-context";
import { useEffect } from "react";

const VideoDetails = () => {
  const {videoId} = useParams()
  const { state, postUserLike, deleteUserLike, deleteWatchlater, postWatchlater, postPlaylist, deletePlaylist, getVideo } = useContext(CardContext);
  const {stateAuth} = useContext(AuthContext)
  const navigate = useNavigate()
  const {currentVideo, likedvideos, watchlater, playlists} = state
  const {token} = stateAuth

  const {_id, id, title, source, img} = currentVideo

  useEffect(()=>{
    getVideo({videoId:videoId})
  },[])

  const checkLiked =()=> likedvideos?.some((likedVideo)=>likedVideo._id===_id)
  const checkWatched = ()=> watchlater?.some((watchedVideo)=>watchedVideo._id===_id)
  const checkPlaylisted = ()=> playlists?.some((playlisted)=>playlisted._id===_id)

  return (
    <div className="video-container flex">
    <Sidebar />
    <div className="color-primary recommended-videos">
          <div className="video-header-container">
            <iframe
              className="video-header"
              src={`https://www.youtube.com/embed/${_id}`}
              title="YouTube video player"
              frameBorder="0"
            ></iframe>
            <div className="video-play-footer">
              <div>
                <div className="">{title}</div>
                <div>
                  <small>{source}</small>
                </div>
              </div>
              <div className="video-footer-right">
                <div
                  onClick={() => {
                    if(checkLiked()){
                      deleteUserLike({encodedToken:token, videoId:_id})
                    }else{
                      postUserLike({encodedToken:token, video:currentVideo})
                    }
                  }}
                  //state.videoLibUpdated.find((item)=>item.id===id)?.videodetailState?.LikedVideos
                  className={`chips chips-vid ${checkLiked() && "selected"}`}
                >
                 <span className="material-icons wd-fc-1">thumb_up_alt_outlined</span>
                 <div>Like</div>
                </div>

                <div
                  onClick={() => {
                    if(checkWatched()){
                      deleteWatchlater({encodedToken:token, videoId:_id})
                    }else{
                      postWatchlater({encodedToken:token, video:currentVideo})
                    }
                  }}
                  className={`chips chips-vid ${checkWatched() && "selected"}`}
                >
                 <span className="material-icons wd-fc-1">watch_later_outlined</span>
                 <div>Watchlater</div>
                </div>

                <div
                  onClick={() => {
                    if(checkPlaylisted()){
                      deletePlaylist({encodedToken:token, videoId:_id})
                    }else{
                      postPlaylist({encodedToken:token, playlist:{title:"check"}})
                    }
                  }}
                  className={`chips chips-vid ${checkPlaylisted() && "selected"}`}
                >
                 <span className="material-icons wd-fc-1">playlist_play</span>
                 <div>Add Playlist</div>
                </div>

              </div>
            </div>
          </div>
    </div>
    </div>
  );
};

export default VideoDetails;
