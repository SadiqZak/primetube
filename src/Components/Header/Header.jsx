import React, { useContext } from "react";
import Logo from "./Logo/Logo";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../utils/auth-context";
import { useState } from "react";
import { CardContext } from "../../utils/card-context";
import Chips from "../Chips/Chips";

const Header = () => {
  const navigate = useNavigate();
  const { stateAuth, dispatchAuth } = useContext(AuthContext);
  const { state, dispatch, getUserHistory, postUserHistory } = useContext(CardContext);
  const { videoLibUpdated, history } = state;
  const {token} = stateAuth
  const [userSearch, setUserSearch] = useState("");
  const [userSearchResults, setUserResearchResults] = useState("")
  const { isAuthenticated } = stateAuth;

  const test =(value)=>{
    return videoLibUpdated.filter((video) => video.title.toLowerCase().match(value.toLowerCase()))
  }

  const testCat =(value)=>{
    return videoLibUpdated.filter((video) => video.category.toLowerCase().match(value.toLowerCase()))
  }

  const inputHandler = (e) => {
    e.preventDefault()
    setUserSearch(e.target.value);
    setUserResearchResults(test(e.target.value))
   
  };

  const submitHandler =(e)=>{
    e.preventDefault()
    if(userSearchResults.length!==0){
      dispatch({ type: "SearchResults", payload:userSearchResults });
    }

    if("games"=== userSearch.toLowerCase() || "game"=== userSearch.toLowerCase()){
      dispatch({type:"All"})
      dispatch({type:"Games"})
    }else if("scifi"=== userSearch.toLowerCase()){
      dispatch({type:"All"})
      dispatch({type:"Sci_Fi"})
    }else if("javascript" === userSearch.toLowerCase()){
      dispatch({type:"All"})
      dispatch({type:"JavaScript"})
    }else if("documentary"=== userSearch.toLowerCase() || "documentaries"=== userSearch.toLowerCase()  ){
      dispatch({type:"All"})
      dispatch({type:"Documentary"})
    }else if("saga"=== userSearch.toLowerCase()){
      dispatch({type:"All"})
      dispatch({type:"Saga"})
    }else if("comedy"=== userSearch.toLowerCase()){
      dispatch({type:"All"})
      dispatch({type:"Comedy"})
    }else if("podcast"=== userSearch.toLowerCase() || "podcasts"=== userSearch.toLowerCase()){
      dispatch({type:"All"})
      dispatch({type:"Podcasts"})
    }else if("movie"=== userSearch.toLowerCase() || "movies"=== userSearch.toLowerCase()){
      dispatch({type:"All"})
      dispatch({type:"Movies"})
    }
    setUserSearch("")
  }

  let categoryChips = ['games', 'game','scifi', 'javascript','documentary', 'documentaries', 'saga', 'comedy', 'podcasts', 'movie', 'movies']
  
  const clickHandler = (id)=>{
    setUserSearch("")
    const historyCheck = history?.some((historyVid)=>historyVid._id===id)
    const video = videoLibUpdated.find((video)=>video._id===id)
    if(!historyCheck){
      postUserHistory({encodedToken:token, video:video})
    }else{
      getUserHistory({encodedToken:token})
    }
  }

  return (
    <div className="header">
      <div className="header-wrapper">
        <Logo />
        <div className="search">
          <form className="search-form" onSubmit={submitHandler} action="submit">
          <input
            value={userSearch}
            onChange={inputHandler}
            placeholder="Type here to start searching for something.."
            type="text"
          />
          {userSearch.length === 0 ? (
            <span className="search-icon material-icons">search</span>
          ) : (
            <span onClick={() => setUserSearch("")} className="search-icon-cancel">
              <strong>X</strong>
            </span>
          )}
          </form>
         
          {
          userSearch.length!==0 &&
          <div className="dropdown">
            <>
            { userSearchResults.length !==0 ?
                 userSearchResults.map((result)=>(
                  <Link onClick={()=>clickHandler(result._id)} className="link-tag-header" to={`/videoDetails/${result._id}`}>
                    <div className="search-cont">
                    <div className="search-thumb-cont">
                      <img className="search-thumb" src={result.img} alt="img"/>
                    </div>
                    <div className="search-result">
                      {result.title}
                    </div>
                  </div>
                  </Link>
                ))
                :<>
                  {
                  categoryChips.some((ele)=>ele.match(userSearch.toLowerCase())) ?
                  <div className="search-cont">
                  <div className="search-result">
                    {userSearch}
                  </div>
                </div>
                :<div className="search-cont">No information available</div>
                }
                </>
            }
            
            </>
            
          </div>
       
        }
        </div>
    
        <div className="header_right">
          {!isAuthenticated && (
            <button
              className="login-btn"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          )}
          {isAuthenticated && (
            <button
              className="login-btn"
              onClick={() => {
                dispatchAuth({ type: "LogoutUser" });
                navigate("/login");
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
