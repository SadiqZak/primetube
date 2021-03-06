import { useEffect } from "react";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/auth-context";

const Login = () => {
  const {LoginUser, stateAuth } = useContext(AuthContext);
  const [userLog, setUserLog] = useState({email: "mozak@gmail.com", password: "moZak@NeoG22"});
  const navigate = useNavigate();
  const location = useLocation();
  const {isAuthenticated} = stateAuth

  const loginHandler = async (e) => {
    e.preventDefault();
    LoginUser({email: userLog.email,password: userLog.password }) 
  };

  useEffect(()=>{
    if(isAuthenticated){
      return location.state?.from?.pathname
        ? navigate(location.state?.from?.pathname)
        : navigate("/");
    }
  },[isAuthenticated])

  return (
    <>
      <div className="login-management">
        <div className="login-management-wrapper">
          <div className="login-manage-header">
            <h2>Please Login to continue</h2>
            <small>
              You are trying to access:{" "}
              {location.state?.from.pathname === "/watchlater" && "Watch Later"}
              {location.state?.from.pathname === "/likedvideos" && "Liked Videos"}
              {location.state?.from.pathname === "/playlist" && "Playlist"}
              {location.state?.from.pathname === "/history" && "History"}
            </small>
          </div>

          <div className="login-wrapper">
            <form onSubmit={loginHandler} className="login-form" action="">
              <div className="flex-dir-column-login">
                <small>Email:</small>
                <input
                  onChange={(e) =>
                    setUserLog({ ...userLog, email: e.target.value })
                  }
                  className="login-inp"
                  type="email"
                  placeholder="mozak@gmail.com"
                  required
                />
              </div>

              <div className="flex-dir-column-login">
                <small>Password:</small>
                <input
                  onChange={(e) =>
                    setUserLog({ ...userLog, password: e.target.value })
                  }
                  className="login-inp"
                  type="password"
                  placeholder="moZak@NeoG22"
                  required
                />
              </div>

              <button className="login-btn">Login</button>
            </form>

            {location?.state?.from?.pathname && (
              <button
                className="login-btn"
                onClick={() => {
                  LoginUser({email: userLog.email, password: userLog.password }) 
                  navigate(location.state?.from?.pathname);
                }}
              >
                Login as Guest
              </button>
            )}
            {!location?.state?.from?.pathname && (
              <button
                className="login-btn"
                onClick={() => {
                  LoginUser({email: userLog.email, password: userLog.password }) 
                  navigate("/");
                }}
              >
                Login as Guest
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
