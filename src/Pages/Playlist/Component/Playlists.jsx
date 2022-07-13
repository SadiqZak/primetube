import React from 'react'
import { useContext } from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'
import { CardContext } from '../../../utils/card-context'
import Sidebar from '../../../Components/Sidebar/Sidebar'

const Playlists = () => {
    const {playlistId} = useParams()
    const {state, dispatch} = useContext(CardContext)
    const navigate = useNavigate()

    const findPlayList = ()=>state.playlists.find((playlist)=>playlist._id===playlistId)
    let finalData = findPlayList()
  return (
    <div className="video-container flex">
    <Sidebar />
    <div className="recommended-videos color-primary">
      <div>
      <h3>{finalData?.title}</h3><button onClick={()=>navigate('/playlist')} className="login-btn">Playlists</button>
      </div>  
       {
        finalData?.videos.map(({ _id, img, title, source }) => (
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
          ))
        }
    </div>
    </div> 
  )
}

export default Playlists

