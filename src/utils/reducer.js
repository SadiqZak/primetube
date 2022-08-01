const reducerFunc = (state, action) => {
  switch (action.type) {
    case "initialState":
      return {
        ...state,
        catSelect: "All",
        sidebarState: "Home",
        videoLibUpdated: action.payload.videos,
      };
    case "All":
      return {
        ...state,
        catSelect: action.type,
        searchResults: []
      };
    case "SearchResults":
      return{
        ...state,
        searchResults: action.payload,
        catSelect:""
      }
    case "Games":
      return {
        ...state,
        catSelect: action.type,
      };
    case "Sci_Fi":
      return {
        ...state,
        catSelect: action.type,
      };
    case "JavaScript":
      return {
        ...state,
        catSelect: action.type,
      };
    case "Documentary":
      return {
        ...state,
        catSelect: action.type,
      };
    case "Saga":
      return {
        ...state,
        catSelect: action.type,
      };
    case "Comedy":
      return {
        ...state,
        catSelect: action.type,
      };
    case "Podcasts":
      return {
        ...state,
        catSelect: action.type,
      };
    case "Movies":
      return {
        ...state,
        catSelect: action.type,
      };
    case "Home":
      return {
        ...state,
        sidebarState: action.type,
      };
    case "Playlist":
      return {
        ...state,
        sidebarState: action.type,
      };
    case "Liked Videos":
      return {
        ...state,
        sidebarState: action.type,
      };
    case "Watch Later":
      return {
        ...state,
        sidebarState: action.type,
      };
    case "History":
      return {
        ...state,
        sidebarState: action.type,
      };
    case "AddPlayList":
      return {
        ...state,
        playlists: action.payload
      };
    case "LikedVideos":
      return {
        ...state,
        likedvideos: action.payload,
      };
    case "ClearLikedVideos":
      return {
        ...state,
        likedvideos: [],
      };
    case "WatchLater":
      return {
        ...state,
        watchlater: action.payload,
      };
    case "ClearWatchList":
      return {
        ...state,
        watchlater: [],
      };

    case "WatchHistory":
      return {
        ...state,
        history: action.payload.history,
      };
    case "UpdateCurrentVideo":{
      return{
        ...state,
        currentVideo: action.payload.video
      }
    }
    case "UpdateUser":{
      return{
        ...state,
        user: action.payload.foundUser,
        token: action.payload.encodedToken,
        isAuthenticated: true
      }
    }
    case "UpdateUserSignup":{
      console.log(action.payload)
      return{
        ...state,
        user: action.payload.createdUser,
        token: action.payload.encodedToken,
        isAuthenticated: true
      }
    }
    case "LogoutUser":{
      return{
        ...state,
        user: {},
        token: null,
        isAuthenticated: false
      }
    }
    default:
      return state;
  }
};

export default reducerFunc;


//--DND->Function to manually update liked videos and similarly watchlater--
      // const likeCheck = () => {
      //   const updatedVideoLike = state.videoLibUpdated.find(
      //     (item) => item.id === action.payload.id
      //   );

      //   if (!updatedVideoLike.videodetailState?.LikedVideos) {
      //     return [...state.likedvideos, updatedVideoLike];
      //   } else {
      //     const updatedLibLiked = state.likedvideos.filter(
      //       (item) => item.id !== action.payload.id
      //     );
      //     return updatedLibLiked;
      //   }
      // };

      // const likeUpdate = () => {
      //   return [...state.videoLibUpdated].map((item, idx) => {
      //     return item.id === action.payload.find((liked)=>liked.id===item.id)?.id
      //       ? {
      //           ...item,
      //           videodetailState: {
      //             ...item.videodetailState,
      //             LikedVideos:
      //               !state.videoLibUpdated[idx].videodetailState.LikedVideos,
      //           },
      //         }
      //       : item;
      //   });
      // };

      // const likeState = likeUpdate();
//--------------------------------------------------------
      // const clearLikedUpdate = () => {
      //   return [...state.videoLibUpdated].map((item) => {
      //     return {
      //       ...item,
      //       videodetailState: {
      //         ...item.videodetailState,
      //         LikedVideos: false,
      //       },
      //     };
      //   });
      // };

      // const clearLikedState = clearLikedUpdate();
