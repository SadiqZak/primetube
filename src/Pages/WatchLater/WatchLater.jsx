import React from 'react'
import { useContext } from 'react';
import { CardContext } from '../../utils/card-context';
import { Link } from 'react-router-dom';

const WatchLater=()=> {
  const { state, dispatch } = useContext(CardContext);
  return (
    <div className="recommended-videos color-primary">
      <div>
      <h3>Watch Later</h3><button onClick={()=>dispatch({type:"ClearWatchList"})} className="login-btn">Clear All</button>
      </div>  
        Add Watch Later
    </div>
  );
}

export default WatchLater