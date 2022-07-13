import { createContext, useReducer, useState } from "react";
import { LoginService } from "../services/auth-services";
import reducerFunc from "./reducer";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const [auth, setAuth] = useState({token:"", isAuthenticated:false})
  const [stateAuth, dispatch] = useReducer(reducerFunc, {
    user:{},
    token:null,
    isAuthenticated: false
  })

  const LoginUser = async({email, password})=>{
    try{
      const response = await LoginService({email, password})
      dispatch({type:'UpdateUser', payload:response.data})
    }catch(err){
      console.error(err)
    }
  }

  return (
    <AuthContext.Provider value={{ stateAuth, dispatch, LoginUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };