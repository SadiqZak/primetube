import React from 'react'
import { useContext } from 'react';
import { CardContext } from '../../utils/card-context';
import { Link } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { AuthContext } from '../../utils/auth-context';
import Header from '../../Components/Header/Header';

const PlayList=()=>{
  const { state, deletePlaylist } = useContext(CardContext);
  const {stateAuth} = useContext(AuthContext)
  const { token } = stateAuth;

  return (
    <>
      <div className="video-container flex">
    <Sidebar />
    <div className="recommended-videos color-primary">
      <div>
      <h3>Playlist</h3>
      </div>  
       {state.playlists?.map(({ _id, title }) => (
          <Link key={_id} className="link-tag" to={`/playlists/${_id}`}>
            <div className="videoCardPlaylist">
            <small>click to access playlist</small>
              <div>
                <div className="video-title">{`Title: ${title}`}</div>
                <div className="video-title">{`No. of Videos: ${state.playlists.find((playlist)=>playlist._id===_id)?.videos?.length}`}</div>
              </div>
              <div>
              <button onClick={()=>
                  deletePlaylist({
                    encodedToken: token,
                    playlistId:_id,
                  })
              } className="login-btn">Delete</button>
              </div>
            </div>
          </Link>
        ))}
    </div>
    </div> 
    </>
    
  );
}

export default PlayList  