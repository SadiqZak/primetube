import filter from '../backend/controllers/filter';
import data from '../backend/db/data';
import reducerFunc from './reducer';
const { createContext, useReducer, useEffect } = require("react");

const CardContext = createContext();

// categorySelected: {All:false , Games:false, Sci_Fi:false, JavaScript:false, Documentary:false, History:false, Comedy:false, Podcasts:false, Movies:false  },
const CardProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducerFunc, {
    catSelect: "",
    sidebarState:"",
    videoLib: [...data],
    videoLibUpdated:[],
    // videodetailState:{LikedVideos:false, AddPlayList:false, WatchLater:false},
    playlists:[],
    likedvideos:[],
    watchlater:[],
    history:[]
 });

  useEffect(()=>{
    dispatch({type:"initialState"})
  },[])

  const filteredData = filter(state.videoLibUpdated, state.catSelect)

  return (
    <CardContext.Provider value={{ state, dispatch, filteredData }}>
      {children}
    </CardContext.Provider>
  );
};

export { CardContext, CardProvider };
