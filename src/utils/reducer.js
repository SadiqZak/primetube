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
    default:
      return state;
  }
};

export default reducerFunc;
