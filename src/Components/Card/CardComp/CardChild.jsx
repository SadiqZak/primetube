import { useContext } from "react";
import {Link} from "react-router-dom";
import { CardContext } from "../../../utils/card-context";

const CardChild = ({ id, img, title, source, videodetailState }) => {
  const {dispatch} =useContext(CardContext)
  return (
    <div>
      <Link onClick={()=>dispatch({type:"WatchHistory", payload:{id, img, title ,source , videodetailState:{videodetailState}}})} className="link-tag" to={`/videodetails/${id}`}>
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
