import React from "react";
import { CardContext } from "../../utils/card-context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const History = () => {
  const { state, dispatch } = useContext(CardContext);
  return (
    <div className="recommended-videos color-primary">
      <div>
      <h3>History</h3><button onClick={()=>dispatch({type:"ClearHistory"})} className="login-btn">Clear History</button>
      </div>  
      {[...state.history].map(({ id, img, title, source }) => (
          <Link key={id} className="link-tag" to={`/videodetails/${id}`}>
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
  );
};

export default History;
