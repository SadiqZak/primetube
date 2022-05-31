import filter from '../backend/controllers/filter';
// import data from '../backend/db/data';
import { getAllVideoService } from '../services/video-services';
import reducerFunc from './reducer';
const { createContext, useReducer, useEffect } = require("react");

const CardContext = createContext();

// categorySelected: {All:false , Games:false, Sci_Fi:false, JavaScript:false, Documentary:false, History:false, Comedy:false, Podcasts:false, Movies:false  },
const CardProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducerFunc, {
    catSelect: "",
    sidebarState:"",
    videoLib: [],
    videoLibUpdated:[],
    playlists:[],
    likedvideos:[],
    watchlater:[],
    history:[]
 });

  useEffect(()=>{
    getAllVideos()
  },[])

  const getAllVideos = async() =>{
    try{
      const videoResults = await getAllVideoService()
      if(videoResults.status===200){
        dispatch({type:"initialState", payload: {videos: videoResults.data.videos}})
      }
    }catch(error){
      console.error(error)
    }
  }
  const filteredData = filter(state.videoLibUpdated, state.catSelect)

  return (
    <CardContext.Provider value={{ state, dispatch, filteredData }}>
      {children}
    </CardContext.Provider>
  );
};

export { CardContext, CardProvider };
