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
  deletePlaylistService,
  postPlaylistVideoService,
  deletePlaylistVideoService,
  getHistoryService,
  postHistoryService,
  deleteHistoryService
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
    searchResults: [],
    videoLibUpdated: [],
    playlists: [],
    newPlaylists:[],
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
      dispatch({ type: "AddPlayList", payload: response.data.playlists });
    } catch (err) {
      console.error(err);
    }
  };

  const postPlaylist = async ({ encodedToken, playlist }) => {
    try {
      const response = await postPlaylistService({ encodedToken, playlist});
      dispatch({ type: "AddPlayList", payload: response.data.playlists });
    } catch (err) {
      console.error(err);
    }
  };

  const deletePlaylist = async ({ encodedToken, playlistId }) => {
    try {
      const response = await deletePlaylistService({ encodedToken, playlistId });
      dispatch({ type: "AddPlayList", payload: response.data.playlists });
    } catch (err) {
      console.error(err);
    }
  };
  
  const postPlaylistVideo = async({encodedToken, playlistId, video})=>{
    try{
      const response = await postPlaylistVideoService({encodedToken, playlistId, video})
      dispatch({ type: "AddPlayList", payload: response.data.playlists });
    }catch(err){
      console.error(err)
    }
  }

  const deletePlaylistVideo = async({encodedToken, playlistId, videoId})=>{
    try{
      const response = await deletePlaylistVideoService({encodedToken, playlistId, videoId})
      console.log(response.data.playlists)
      dispatch({ type: "AddPlayList", payload: response.data.playlists });
    }catch(err){
      console.error(err)
    }
  }

  const getUserHistory = async({encodedToken})=>{
    try {
      const response = await getHistoryService({encodedToken})
      dispatch({type:"WatchHistory", payload:response.data})
    } catch (err) {
      console.error(err)
    }
  }

  const postUserHistory = async({encodedToken, video})=>{
    try {
      const response = await postHistoryService({encodedToken, video})
      dispatch({type:"WatchHistory", payload:response.data})
    } catch (err) {
      console.error(err)
    }
  }

  const deleteUserHistory = async({encodedToken}) =>{
    try {
      const response = await deleteHistoryService({encodedToken})
      dispatch({type:"WatchHistory", payload:response.data})
    } catch (err) {
      console.error(err)
    }
  }

  let filteredData = []
  if(state.searchResults.length!==0){
    filteredData = filter(state.searchResults, state.catSelect)
  }else{
    filteredData = filter(state.videoLibUpdated, state.catSelect);
  }

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
        deletePlaylist,
        postPlaylistVideo,
        deletePlaylistVideo,
        getUserHistory,
        postUserHistory,
        deleteUserHistory
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export { CardContext, CardProvider };
