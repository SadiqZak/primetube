import React from 'react'
import { useContext } from 'react';
import { CardContext } from '../../utils/card-context';
import { Link } from 'react-router-dom';

const LikedVideos=()=>{
  const { state, dispatch } = useContext(CardContext);
  return (
    <div className="recommended-videos color-primary">
      <div>
      <h3>LikedVideos</h3><button onClick={()=>dispatch({type:"ClearLikedVideos"})} className="login-btn">Clear All</button>
      </div>  
      {state.likedvideos.map(({ id, img, title, source }) => (
          <Link className="link-tag" to={`/videodetails/${id}`}>
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
}

export default LikedVideos