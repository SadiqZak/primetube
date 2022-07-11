import React, { useContext } from "react";
import { CardContext } from "../../utils/card-context";
import Sidebar from '../../Components/Sidebar/Sidebar';

const VideoDetails = () => {
  const { state, dispatch } = useContext(CardContext);
  const {currentVideo} = state

  const {id, title, source, img} = currentVideo

  return (
    <div className="video-container flex">
    <Sidebar />
    <div className="color-primary recommended-videos">
          <div className="video-header-container">
            <iframe
              className="video-header"
              src={`https://www.youtube.com/embed/${id}`}
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
                    dispatch({ type: "LikedVideos", payload: {id, title, source, img} });
                  }}
                  className={`chips chips-vid ${state.videoLibUpdated.find((item)=>item.id===id)?.videodetailState?.LikedVideos && "selected"}`}
                >
                 <span className="material-icons wd-fc-1">thumb_up_alt_outlined</span>
                 <div>Like Video</div>
                </div>

                <div
                  onClick={() => {
                    dispatch({ type: "WatchLater", payload: {id, title, source, img}  });
                  }}
                  className={`chips chips-vid ${state.videoLibUpdated.find((item)=>item.id===id)?.videodetailState?.WatchLater && "selected"}`}
                >
                 <span className="material-icons wd-fc-1">watch_later_outlined</span>
                 <div>Watch Later</div>
                </div>

                <div
                  onClick={() => {
                    dispatch({ type: "AddPlayList", payload: {id, title, source, img}  });
                  }}
                  className={`chips chips-vid ${state.videoLibUpdated.find((item)=>item.id===id)?.videodetailState?.AddPlayList && "selected"}`}
                >
                 <span className="material-icons wd-fc-1">playlist_play</span>
                 <div>Add to Playlist</div>
                </div>

              </div>
            </div>
          </div>
    </div>
    </div>
  );
};

export default VideoDetails;
