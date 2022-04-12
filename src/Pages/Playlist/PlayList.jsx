import React from 'react'
import { useContext } from 'react';
import { CardContext } from '../../utils/card-context';
import { Link } from 'react-router-dom';


const PlayList=()=>{
  const { state, dispatch } = useContext(CardContext);
  return (
    <div className="recommended-videos color-primary">
      <div>
      <h3>Playlist</h3><button onClick={()=>dispatch({type:"ClearPlayList"})} className="login-btn">Clear All</button>
      </div>  
        Add Playlist
    </div>
  );
}

export default PlayList  