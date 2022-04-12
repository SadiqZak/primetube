import React from "react";
import { CardContext } from "../../utils/card-context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const History = () => {
  const { state, dispatch } = useContext(CardContext);
  return (
    <div className="recommended-videos color-primary">
      <div>
      <h3>History</h3><button onClick={()=>dispatch({type:"ClearHistory"})} className="login-btn">Clear History</button>
      </div>  
        Add History
    </div>
  );
};

export default History;
