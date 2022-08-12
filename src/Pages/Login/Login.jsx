import { useEffect } from "react";
import { useContext, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../utils/auth-context";
import Header from "../../Components/Header/Header";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { LoginUser, stateAuth } = useContext(AuthContext);
  const [userLog, setUserLog] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();
  // const { isAuthenticated } = stateAuth;
  

  const loginHandler = async (e) => {
    e.preventDefault();
    Promise.resolve(LoginUser({ email: userLog.email, password: userLog.password }))
    .then((response) => {
      if (response) {
        toast.success("User logged in");
        setTimeout(() => {
          return location.state?.from?.pathname? navigate(location.state?.from?.pathname): navigate("/");
        }, [2000]);
      } else {
        toast.error("Please enter correct credentials");
      }
    });
  };

  const dummyDataHandler = ()=>{
    setUserLog({...userLog, email: "mozak@gmail.com", password: "moZak@NeoG22"});
  }

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     return location.state?.from?.pathname
  //       ? navigate(location.state?.from?.pathname)
  //       : navigate("/");
  //   }
  // }, [isAuthenticated]);

  return (
    <>
      <div className="login-management">
        <div className="login-management-wrapper">
          <div className="login-manage-header">
            <div>
              <h2>Please Login to continue</h2>
              <small>
                You are trying to access:{" "}
                {location.state?.from.pathname === "/watchlater" &&
                  "Watch Later"}
                {location.state?.from.pathname === "/likedvideos" &&
                  "Liked Videos"}
                {location.state?.from.pathname === "/playlist" && "Playlist"}
                {location.state?.from.pathname === "/history" && "History"}
              </small>
            </div>

            <button onClick={dummyDataHandler} className="login-btn">Dummy Data</button>
          </div>

          <div className="login-wrapper">
            <form onSubmit={loginHandler} className="login-form" action="">
              <div className="flex-dir-column-login">
                <small>Email:</small>
                <input
                value={userLog.email}
                  onChange={(e) =>
                    setUserLog({ ...userLog, email: e.target.value })
                  }
                  className="login-inp"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="flex-dir-column-login">
                <small>Password:</small>
                <input
                value={userLog.password}
                  onChange={(e) =>
                    setUserLog({ ...userLog, password: e.target.value })
                  }
                  className="login-inp"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>

              <button className="login-btn">Login</button>
            </form>

            {location?.state?.from?.pathname && (
              <button
                className="login-btn"
                onClick={() => {
                  LoginUser({
                    email: "mozak@gmail.com",
                    password: "moZak@NeoG22",
                  });
                  toast.success("User logged in");
                  setTimeout(()=>{
                    navigate(location.state?.from?.pathname);
                  },[2000])
                  
                }}
              >
                Login as Guest
              </button>
            )}
            {!location?.state?.from?.pathname && (
              <button
                className="login-btn"
                onClick={() => {
                  LoginUser({
                    email: "mozak@gmail.com",
                    password: "moZak@NeoG22",
                  });
                  toast.success("User logged in");
                  setTimeout(()=>{
                    navigate("/");
                  },[2000])
                }}
              >
                Login as Guest
              </button>
            )}
            <div>
              Don't have an account?{" "}
              <Link className="signup-link" to="/signup">
                Sign up here
              </Link>{" "}
            </div>
          </div>
          <ToastContainer 
          position="bottom-right" autoClose={1000}/>
        </div>
      </div>
    </>
  );
};

export default Login;
