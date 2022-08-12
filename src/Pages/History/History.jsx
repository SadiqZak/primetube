import React, { useEffect } from "react";
import { CardContext } from "../../utils/card-context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Sidebar from '../../Components/Sidebar/Sidebar';
import { AuthContext } from "../../utils/auth-context";
import Header from "../../Components/Header/Header";

const History = () => {
  const { state, getUserHistory, deleteUserHistory} = useContext(CardContext);
  const {stateAuth} = useContext(AuthContext)
  const {token} = stateAuth

  useEffect(()=>{
    getUserHistory({encodedToken:token})
  },[])

  const clickHandler =()=>{
    deleteUserHistory({encodedToken:token})
  }
  return (
    <div className="video-container flex ">
    <Sidebar />
    <div className="recommended-videos color-primary margin-check">
      <div>
      <h3>History</h3><button onClick={clickHandler} className="login-btn">Clear History</button>
      </div>  
      {state.history.map(({ _id, img, title, source }) => (
          <Link key={_id} className="link-tag" to={`/videodetails/${_id}`}>
            <div className="videoCard">
              <img className="video-thumbnail" src={img} alt="" />
              <div className="video-footer">
                <div className="video-title">{title}</div>
                <div>
                  <small>{source}</small>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
    </div>
  );
};

export default History;
