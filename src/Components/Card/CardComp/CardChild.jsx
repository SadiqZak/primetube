import { useContext } from "react";
import {Link} from "react-router-dom";
import { CardContext } from "../../../utils/card-context";

const CardChild = ({ _id, id, img, title, source, videodetailState }) => {
  const {dispatch, getVideo} =useContext(CardContext)

  const clickHandler = ()=>{
    dispatch({type:"WatchHistory", payload:{id, img, title ,source , videodetailState:{videodetailState}}})
    getVideo({videoId:_id})
  }

  return (
    <div>
      <Link onClick={clickHandler} className="link-tag" to={`/videodetails/${id}`}>
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
