import { useContext } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../../../utils/card-context";

const SidebarChild = ({ icon, comp, path }) => {
  const {state, dispatch} = useContext(CardContext)
  return (
    <>
      <Link onClick={()=>{dispatch({type:`${comp}`})}} className="link-tag" to={`${path}`}>
        <div className={`sidebar-child ${state.sidebarState===`${comp}` && "selected"}`}>
          <span className="material-icons">{icon}</span>
          <div>{comp}</div>
        </div>
      </Link>
    </>
  );
};

export default SidebarChild;
