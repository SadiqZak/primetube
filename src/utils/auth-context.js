import { createContext, useReducer, useState } from "react";
import { LoginService, signupService } from "../services/auth-services";
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
      console.log(response.data)
      dispatch({type:'UpdateUser', payload:response.data})
    }catch(err){
      console.error(err)
    }
  }

  const signupUser = async({email, password, firstName, lastName})=>{
    try{
      const response = await signupService({email, password, firstName, lastName})
      console.log(response.data)
      dispatch({type:'UpdateUserSignup', payload:response.data})
    }catch(err){
      console.error(err)
    }
  }

  return (
    <AuthContext.Provider value={{ stateAuth, dispatch, LoginUser, signupUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };