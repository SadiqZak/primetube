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
        Add Liked Videos
    </div>
  );
}

export default LikedVideos