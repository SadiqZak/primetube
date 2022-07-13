import React, {useContext} from "react";
import Logo from "./Logo/Logo";
import { useNavigate} from "react-router-dom";
import { AuthContext } from "../../utils/auth-context";

const Header = () => {
  const navigate = useNavigate()
  const { stateAuth, dispatch} = useContext(AuthContext)
  const {isAuthenticated} = stateAuth
  return (
    <div className="header">
      <div className="header-wrapper">
        <Logo />
        <div className="search">
          <input placeholder="Search" type="text" />
          <span className="search-icon material-icons">search</span>
        </div>
        <div className="header_right">
        { !isAuthenticated && (
          <button
          className="login-btn"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        )}
        {isAuthenticated && (
          <button
          className="login-btn"
          onClick={() => {
            dispatch({type:"LogoutUser"})
            navigate('/login')
          }}
          >
            Logout
          </button>
        )}
        </div>
      </div>
    </div>
  );
};

export default Header;
