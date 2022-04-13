import { useContext } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../../../utils/card-context";


const Logo = () => {
  const {dispatch}=useContext(CardContext)
  return (
    <Link onClick={()=>dispatch({type:"Home"})} className="link-tag" to={`/`}>
      <div className="logo">
        <span  className="logo-icon material-icons">play_arrow</span> PrimeTube
      </div>
    </Link>
  );
};

export default Logo;
