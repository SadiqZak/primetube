const reducerFunc = (state, action) => {
  switch (action.type) {
    case "initialState":
      return {
        ...state,
        catSelect: "All",
        sidebarState: "Home",
        videoLibUpdated: [...state.videoLib],
      };
    case "All":
      return {
        ...state,

        catSelect: action.type,
      };
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
      const playCheck = () => {
        const updatedVideoPlay = state.videoLibUpdated.find(
          (item) => item.id === action.payload.id
        );

        if (!updatedVideoPlay.videodetailState.AddPlayList) {
          return [...state.playlists, updatedVideoPlay];
        } else {
          const updatedLibPlayed = state.playlists.filter(
            (item) => item.id !== action.payload.id
          );
          return updatedLibPlayed;
        }
      };

      const playUpdate = () => {
        return [...state.videoLibUpdated].map((item, idx) => {
          return item.id === action.payload.id
            ? {
                ...item,
                videodetailState: {
                  ...item.videodetailState,
                  AddPlayList:
                    !state.videoLibUpdated[idx].videodetailState.AddPlayList,
                },
              }
            : item;
        });
      };

      const playState = playUpdate();

      return {
        ...state,
        playlists: playCheck(),
        videoLibUpdated: playState,
      };
    case "ClearPlayList":
      const clearPlayUpdate = () => {
        return [...state.videoLibUpdated].map((item) => {
          return {
            ...item,
            videodetailState: {
              ...item.videodetailState,
              AddPlayList: false,
            },
          };
        });
      };

      const clearState = clearPlayUpdate();
      return {
        ...state,
        playlists: [],
        videoLibUpdated: clearState,
      };
    case "LikedVideos":
      const likeCheck = () => {
        const updatedVideoLike = state.videoLibUpdated.find(
          (item) => item.id === action.payload.id
        );

        if (!updatedVideoLike.videodetailState.LikedVideos) {
          return [...state.likedvideos, updatedVideoLike];
        } else {
          const updatedLibLiked = state.likedvideos.filter(
            (item) => item.id !== action.payload.id
          );
          return updatedLibLiked;
        }
      };

      const likeUpdate = () => {
        return [...state.videoLibUpdated].map((item, idx) => {
          return item.id === action.payload.id
            ? {
                ...item,
                videodetailState: {
                  ...item.videodetailState,
                  LikedVideos:
                    !state.videoLibUpdated[idx].videodetailState.LikedVideos,
                },
              }
            : item;
        });
      };

      const likeState = likeUpdate();

      return {
        ...state,
        likedvideos: likeCheck(),
        videoLibUpdated: likeState,
      };
    case "ClearLikedVideos":
      const clearLikedUpdate = () => {
        return [...state.videoLibUpdated].map((item) => {
          return {
            ...item,
            videodetailState: {
              ...item.videodetailState,
              LikedVideos: false,
            },
          };
        });
      };

      const clearLikedState = clearLikedUpdate();
      return {
        ...state,
        likedvideos: [],
        videoLibUpdated: clearLikedState,
      };
    case "WatchLater":
      const watchCheck = () => {
        const updatedVideoWatch = state.videoLibUpdated.find(
          (item) => item.id === action.payload.id
        );

        if (!updatedVideoWatch.videodetailState.WatchLater) {
          return [...state.watchlater, updatedVideoWatch];
        } else {
          const updatedLibWatched = state.watchlater.filter(
            (item) => item.id !== action.payload.id
          );
          return updatedLibWatched;
        }
      };

      const watchUpdate = () => {
        return [...state.videoLibUpdated].map((item, idx) => {
          return item.id === action.payload.id
            ? {
                ...item,
                videodetailState: {
                  ...item.videodetailState,
                  WatchLater:
                    !state.videoLibUpdated[idx].videodetailState.WatchLater,
                },
              }
            : item;
        });
      };

      const watchState = watchUpdate();

      return {
        ...state,
        watchlater: watchCheck(),
        videoLibUpdated: watchState,
      };
    case "ClearWatchList":
      const clearWatchUpdate = () => {
        return [...state.videoLibUpdated].map((item) => {
          return {
            ...item,
            videodetailState: {
              ...item.videodetailState,
              WatchLater: false,
            },
          };
        });
      };

      const clearWatchState = clearWatchUpdate();
      return {
        ...state,
        watchlater: [],
        videoLibUpdated: clearWatchState,
      };

    case "WatchHistory":
      const historyUpdate = () => {
        const updatedHistoryList = state.history.find(
          (item) => item.id === action.payload.id
        );

        console.log(updatedHistoryList);

        if (updatedHistoryList === undefined) {
          return [...state.history, action.payload];
        } else {
          return state.history;
        }
      };

      return {
        ...state,
        history: historyUpdate(),
      };
    case "ClearHistory":
      return {
        ...state,
        history: [],
      };
    default:
      return state;
  }
};

export default reducerFunc;
