import filter from "./filter";
import {
  getAllVideoService,
  getCategoriesService,
  getCategoryObjectService,
  getVideoService,
  getUserLikesService,
  postUserLikeService,
  deleteUserLikeService,
  getWatchlaterService,
  postWatchlaterService,
  deleteWatchlaterService,
  getPlaylistService,
  postPlaylistService,
  deletePlaylistService
} from "../services/video-services";
import reducerFunc from "./reducer";
const { createContext, useReducer, useEffect } = require("react");

const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, {
    catSelect: "",
    sidebarState: "",
    currentVideo: {},
    videoLib: [],
    videoLibUpdated: [],
    playlists: [],
    likedvideos: [],
    watchlater: [],
    history: [],
  });

  useEffect(() => {
    getAllVideos();
    getCategories();
  }, []);

  const getAllVideos = async () => {
    try {
      const response = await getAllVideoService();
      dispatch({
        type: "initialState",
        payload: { videos: response.data.videos },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getVideo = async ({ videoId }) => {
    try {
      const response = await getVideoService({ videoId });
      dispatch({
        type: "UpdateCurrentVideo",
        payload: { video: response.data.video },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const getCategories = async () => {
    try {
      const response = await getCategoriesService();
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };

  const getUserLikes = async ({ encodedToken }) => {
    try {
      const response = await getUserLikesService({ encodedToken });
      dispatch({ type: "LikedVideos", payload: response.data.likes });
    } catch (err) {
      console.error(err);
    }
  };

  const postUserLike = async ({ encodedToken, video }) => {
    try {
      const response = await postUserLikeService({ encodedToken, video });
      dispatch({ type: "LikedVideos", payload: response.data.likes });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteUserLike = async ({ encodedToken, videoId }) => {
    try {
      const response = await deleteUserLikeService({ encodedToken, videoId });
      dispatch({ type: "LikedVideos", payload: response.data.likes });
    } catch (err) {
      console.error(err);
    }
  };

  const getWatchlater = async ({ encodedToken }) => {
    try {
      const response = await getWatchlaterService({ encodedToken });
      dispatch({ type: "WatchLater", payload: response.data.watchlater });
    } catch (err) {
      console.error(err);
    }
  };

  const postWatchlater = async ({ encodedToken, video }) => {
    try {
      const response = await postWatchlaterService({ encodedToken, video });
      dispatch({ type: "WatchLater", payload: response.data.watchlater });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteWatchlater = async ({ encodedToken, videoId }) => {
    try {
      const response = await deleteWatchlaterService({ encodedToken, videoId });
      dispatch({ type: "WatchLater", payload: response.data.watchlater });
    } catch (err) {
      console.error(err);
    }
  };

  const getPlaylist = async ({ encodedToken }) => {
    try {
      const response = await getPlaylistService({ encodedToken });
      console.log(response.data.playlists)
      dispatch({ type: "AddPlayList", payload: response.data.playlists });
    } catch (err) {
      console.error(err);
    }
  };

  const postPlaylist = async ({ encodedToken, video }) => {
    try {
      const response = await postPlaylistService({ encodedToken, video });
      dispatch({ type: "AddPlayList", payload: response.data.playlists });
    } catch (err) {
      console.error(err);
    }
  };

  const deletePlaylist = async ({ encodedToken, videoId }) => {
    try {
      const response = await deletePlaylistService({ encodedToken, videoId });
      dispatch({ type: "AddPlayList", payload: response.data.playlists });
    } catch (err) {
      console.error(err);
    }
  };
  
  const filteredData = filter(state.videoLibUpdated, state.catSelect);

  return (
    <CardContext.Provider
      value={{
        state,
        dispatch,
        filteredData,
        getVideo,
        getCategories,
        getUserLikes,
        postUserLike,
        deleteUserLike,
        getWatchlater,
        postWatchlater,
        deleteWatchlater,
        getPlaylist,
        postPlaylist,
        deletePlaylist
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export { CardContext, CardProvider };
