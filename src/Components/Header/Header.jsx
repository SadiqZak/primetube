import React, {useContext} from "react";
import Logo from "./Logo/Logo";
import { useNavigate} from "react-router-dom";
import { AuthContext } from "../../backend/utils/auth-context";

const Header = () => {
  const navigate = useNavigate()
  const { auth, setAuth} = useContext(AuthContext)
  return (
    <div className="header">
      <div className="header-wrapper">
        <Logo />
        <div className="search">
          <input placeholder="Search" type="text" />
          <span className="search-icon material-icons">search</span>
        </div>
        <div className="header_right">
        { !auth.isAuthenticated && (
          <button
          className="login-btn"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        )}
        {auth.isAuthenticated && (
          <button
          className="login-btn"
            onClick={() => {
              setAuth({...auth, isAuthenticated:!auth.isAuthenticated})
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
