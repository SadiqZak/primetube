import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CardContext } from "../../utils/card-context";
// import Sidebar from "../../Components/Sidebar/Sidebar";
import SidebarChild from "../../Components/Sidebar/SidebarChild/SidebarChild";
import { AuthContext } from "../../utils/auth-context";
import { useEffect } from "react";
import { useState } from "react";
// import Header from "../../Components/Header/Header";

const VideoDetails = () => {
  const { videoId } = useParams();
  const {
    state,
    dispatch,
    postUserLike,
    deleteUserLike,
    deleteWatchlater,
    postWatchlater,
    postPlaylist,
    deletePlaylist,
    getVideo,
    postPlaylistVideo,
    getPlaylist,
    deletePlaylistVideo,
    getUserHistory,
    postUserHistory,
  } = useContext(CardContext);
  const { stateAuth } = useContext(AuthContext);
  const {history, videoLibUpdated} = state
  const [clickedPlaylist, setClickedPlaylist] = useState(false);
  const navigate = useNavigate();
  const { currentVideo, likedvideos, watchlater, playlists } = state;
  const [createPlaylist, setCreatePlaylist] = useState(false);
  const [currPlaylistId, setCurrPlaylistId] = useState("");
  const [playlistTitle, setPlaylistTitle] = useState("");
  const { token } = stateAuth;

  const { _id, id, title, source, recommendedCat } = currentVideo;

  useEffect(() => {
    getVideo({ videoId: videoId });
  }, [videoId]);

  useEffect(() => {
    getPlaylist({ encodedToken: token });
  }, [playlists]);

  const checkLiked = () =>
    likedvideos?.some((likedVideo) => likedVideo._id === _id);
  const checkWatched = () =>
    watchlater?.some((watchedVideo) => watchedVideo._id === _id);
  // const checkPlaylisted = () =>
  //   playlists?.some((playlisted) => playlisted._id === _id);

  const playlistHandler = (e) => {
    e.preventDefault();
    if (playlistTitle.length !== 0) {
      postPlaylist({ playlist: { title: playlistTitle }, encodedToken: token });
    }
    setCreatePlaylist(false);
  };

  const clickHandler = (id)=>{
    const historyCheck = history?.some((historyVid)=>historyVid._id===id)
    const video = videoLibUpdated.find((video)=>video._id===id)
    if(!historyCheck){
      postUserHistory({encodedToken:token, video:video})
    }else{
      getUserHistory({encodedToken:token})
    }
  }

  return (
    <div className="video-container flex">
      <div className="sidebar-single">
        <div className="sidebar-wrap-single">
          <Link
            onClick={() => {
              dispatch({ type: "Home" });
            }}
            className="link-tag"
            to={"/"}
          >
            <div
              className={`sidebar-child-single ${
                state.sidebarState === "home" && "selected"
              }`}
            >
              <span className="material-icons">{"home"}</span>
              <div>{"Home"}</div>
            </div>
          </Link>
          <Link
            onClick={() => {
              dispatch({ type: "Playlist" });
            }}
            className="link-tag"
            to={"/playlist"}
          >
            <div
              className={`sidebar-child-single ${
                state.sidebarState === "Playlist" && "selected"
              }`}
            >
              <span className="material-icons">{"playlist_play"}</span>
              <div>{"Playlist"}</div>
            </div>
          </Link>
          <Link
            onClick={() => {
              dispatch({ type: "Liked Videos" });
            }}
            className="link-tag"
            to={"/playlist"}
          >
            <div
              className={`sidebar-child-single ${
                state.sidebarState === "Liked Videos" && "selected"
              }`}
            >
              <span className="material-icons">{"thumb_up_alt_outlined"}</span>
              <div>{"Liked Videos"}</div>
            </div>
          </Link>
          <Link
            onClick={() => {
              dispatch({ type: "Watch Later" });
            }}
            className="link-tag"
            to={"/watchlater"}
          >
            <div
              className={`sidebar-child-single ${
                state.sidebarState === "Watch Later" && "selected"
              }`}
            >
              <span className="material-icons">{"watch_later_outlined"}</span>
              <div>{"Watch Later"}</div>
            </div>
          </Link>
          <Link
            onClick={() => {
              dispatch({ type: "History" });
            }}
            className="link-tag"
            to={"/history"}
          >
            <div
              className={`sidebar-child-single ${
                state.sidebarState === "History" && "selected"
              }`}
            >
              <span className="material-icons">{"history_outlined"}</span>
              <div>{"History"}</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="color-primary recommended-videos-single">
        <div className="video-container-wrapper">
          <div className="video-header-container">
            <iframe
              className="video-header"
              src={`https://www.youtube.com/embed/${_id}`}
              title="YouTube video player"
              frameBorder="0"
            ></iframe>
            <div className="video-play-footer">
              <div  className="video-play-title">
                <div>{title}</div>
                <div>
                  <small>{source}</small>
                </div>
              </div>
              <div className="video-footer-right">
                <div
                  onClick={() => {
                    if (checkLiked()) {
                      deleteUserLike({ encodedToken: token, videoId: _id });
                    } else {
                      postUserLike({
                        encodedToken: token,
                        video: currentVideo,
                      });
                    }
                  }}
                  //state.videoLibUpdated.find((item)=>item.id===id)?.videodetailState?.LikedVideos
                  className={`chips-single chips-vid ${
                    checkLiked() && "selected"
                  }`}
                >
                  {checkLiked() && (
                    <>
                      <span className="material-icons wd-single-fc-1">
                        thumb_up_alt_outlined
                      </span>
                      <div>Liked</div>
                    </>
                  )}
                  {!checkLiked() && (
                    <>
                      <span className="material-icons wd-single-fc-1">
                        thumb_up_alt_outlined
                      </span>
                      <div>Like</div>
                    </>
                  )}
                </div>

                <div
                  onClick={() => {
                    if (checkWatched()) {
                      deleteWatchlater({ encodedToken: token, videoId: _id });
                    } else {
                      postWatchlater({
                        encodedToken: token,
                        video: currentVideo,
                      });
                    }
                  }}
                  className={`chips-single chips-vid ${
                    checkWatched() && "selected"
                  }`}
                >
                  <span className="material-icons wd-single-fc-1">
                    watch_later_outlined
                  </span>
                  <div>Watchlater</div>
                </div>

                <div
                  onClick={() => {
                    setClickedPlaylist((prev) => !prev);
                  }}
                  className={`chips-single chips-vid ${
                    clickedPlaylist && "selected"
                  }`}
                >
                  <span className="material-icons wd-single-fc-1">
                    playlist_play
                  </span>
                  <div>Add Playlist</div>
                </div>

                {clickedPlaylist && (
                  <div className="playlist-container">
                    <div className="playlist-header">
                      <span className="heading">Add to...</span>
                      <span
                        onClick={() => {
                          setClickedPlaylist((prev) => !prev);
                        }}
                        className="close"
                      >
                        x
                      </span>
                    </div>
                    <div className="playlist-body">
                      {playlists?.length !== 0 &&
                        playlists?.map((playlist) => (
                          <div className="playlist-child">
                            <label className="playlist-child-container">
                              <input
                                onClick={() => {
                                  if (
                                    playlists
                                      .find(
                                        (playlistsChild) =>
                                          playlistsChild._id === playlist._id
                                      )
                                      ?.videos?.some(
                                        (ele) => ele._id === videoId
                                      )
                                  ) {
                                    deletePlaylistVideo({
                                      encodedToken: token,
                                      videoId: videoId,
                                      playlistId: playlist._id,
                                    });
                                  } else {
                                    postPlaylistVideo({
                                      encodedToken: token,
                                      video: currentVideo,
                                      playlistId: playlist._id,
                                    });
                                  }
                                }}
                                type="checkbox"
                                className="playlist-input"
                                checked={playlists
                                  .find(
                                    (playlistsChild) =>
                                      playlistsChild._id === playlist._id
                                  )
                                  ?.videos?.some((ele) => ele._id === videoId)}
                              />
                              <span className="checkmark checked">
                                {playlist.title}
                              </span>
                            </label>
                            <span
                              onClick={() =>
                                deletePlaylist({
                                  encodedToken: token,
                                  playlistId: playlist._id,
                                })
                              }
                              className="delete-playlist"
                            >
                              x
                            </span>
                          </div>
                        ))}

                      <div className="playlist-child-footer">
                        <span className="material-icons playlist-icon">
                          playlist_play
                        </span>
                        <span
                          onClick={() => setCreatePlaylist((prev) => !prev)}
                        >
                          Create Playlist
                        </span>
                      </div>
                    </div>
                    {createPlaylist && (
                      <div className="playlist-child-footer-extend">
                        <form onSubmit={playlistHandler} action="submit">
                          <p>title:</p>
                          <input
                            className="submit-input"
                            type="text"
                            onChange={(e) => setPlaylistTitle(e.target.value)}
                          />
                          <button className="submit-btn" type="submit">
                            create
                          </button>
                        </form>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="video-recommended">
          {state.videoLibUpdated.map((video) =>(
            recommendedCat?.map((videoCat) => (
              <>
                {videoCat === video.category && (
                  video._id !== _id &&
                  <Link onClick={()=>clickHandler(video._id)} className="link-tag" to={`/videodetails/${video._id}`}>
                  <div className="video-recommended-child">
                    <div className="video-recommended-header">
                      <img
                        className="video-thumbnail-recommended"
                        src={video.img}
                        alt=""
                      />
                    </div>
                    <div className="video-recommended-footer">
                      <div>
                      {video.title}
                      </div>
                      <small>
                        {
                          `Genre: ${video.category}`
                        }
                      </small>
                      
                    </div>
                  </div>
                  </Link>
                )}
              </>
            ))
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
