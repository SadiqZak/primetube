import { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { CardContext } from "../../../utils/card-context";
import { AuthContext } from "../../../utils/auth-context";

const CardChild = ({video}) => {
  const {dispatch, getVideo, postUserHistory, getUserHistory, state} =useContext(CardContext)
  const [historyExist, setHistoryExist] = useState()
  const {history} = state
  const {stateAuth} = useContext(AuthContext)
  const {token} = stateAuth
  const { _id, id, img, title, source, videodetailState } = video

  const historyCheck = history?.some((historyVid)=>historyVid._id===_id)

  const clickHandler = ()=>{
    dispatch({type:"WatchHistory", payload:{id, img, title ,source , videodetailState:{videodetailState}}})
    getVideo({videoId:_id})
    if(!historyCheck){
      postUserHistory({encodedToken:token, video:video})
    }else{
      getUserHistory({encodedToken:token})
    }
  }
  return (
    <div>
      <Link onClick={clickHandler} className="link-tag" to={`/videodetails/${_id}`}>
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
    </div>
  );
};

export default CardChild;
