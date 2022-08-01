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
  const { state, dispatch } = useContext(CardContext);
  const { videoLibUpdated, searchResults } = state;
  const [userSearch, setUserSearch] = useState("");
  const { isAuthenticated } = stateAuth;

  const inputHandler = (e) => {
    setUserSearch(e.target.value);
    let result = videoLibUpdated.filter((video) =>
      video.title.toLowerCase().includes(userSearch)
    );
    dispatch({ type: "SearchResults", payload: result });
  };

  const clickHandler = ()=>{
    setUserSearch("")
  }

  const submitHandler =(e)=>{
    e.preventDefault()
    return
  }

  console.log(searchResults)
  return (
    <div className="header">
      <div className="header-wrapper">
        <Logo />
        <div className="search">
          <form className="search-form" onSubmit={submitHandler} action="submit">
          <input
            value={userSearch}
            onChange={inputHandler}
            placeholder="Search"
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
            {
                 searchResults.map((result)=>(
                  <Link onClick={clickHandler} className="link-tag-header" to={`/videoDetails/${result._id}`}>
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
            }
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
