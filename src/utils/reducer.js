const reducerFunc = (state, action) => {
  switch (action.type) {
    case "initialState":
      return {
        ...state,
        catSelect: "All",
        sidebarState: "Home",
        videoLibUpdated: [...state.videoLib],
      };
    default:
      return state;
  }
};

export default reducerFunc;
