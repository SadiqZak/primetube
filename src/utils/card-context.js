import filter from './filter';
// import data from '../backend/db/data';
import { getAllVideoService, getCategoriesService, getCategoryObjectService, getVideoService } from '../services/video-services';
import reducerFunc from './reducer';
const { createContext, useReducer, useEffect } = require("react");

const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducerFunc, {
    catSelect: "",
    sidebarState:"",
    currentVideo:{},
    videoLib: [],
    videoLibUpdated:[],
    playlists:[],
    likedvideos:[],
    watchlater:[],
    history:[]
 });

  useEffect(()=>{
    getAllVideos()
    getCategories()
  },[])

  const getAllVideos = async() =>{
    try{
      const response = await getAllVideoService()
      dispatch({type:"initialState", payload: {videos: response.data.videos}})
    }catch(error){
      console.error(error)
    }
  }

  const getVideo = async({videoId})=>{
    try{
      const response =await getVideoService({videoId})
      console.log(response.data.video)
      dispatch({type:"UpdateCurrentVideo", payload:{video: response.data.video}})
    }catch(err){
      console.error(err)
    }
  }

  const getCategories=async()=>{
    try{
      const response = await getCategoriesService()
    }catch(err){
      console.error(err)
    }
  }

  const filteredData = filter(state.videoLibUpdated, state.catSelect)

  return (
    <CardContext.Provider value={{ state, dispatch, filteredData, getVideo, getCategories }}>
      {children}
    </CardContext.Provider>

  );
};

export { CardContext, CardProvider };
