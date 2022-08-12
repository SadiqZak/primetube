import { createContext, useReducer, useState } from "react";
import { LoginService, signupService } from "../services/auth-services";
import reducerFunc from "./reducer";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const [auth, setAuth] = useState({token:"", isAuthenticated:false})
  const [stateAuth, dispatchAuth] = useReducer(reducerFunc, {
    user:{},
    token:null,
    isAuthenticated: false
  })

  const LoginUser = async({email, password})=>{
    try{
      const response = await LoginService({email, password})
      dispatchAuth({type:'UpdateUser', payload:response.data})
      return response.data
    }catch(err){
      console.error(err)
    }
  }

  const signupUser = async({email, password, firstName, lastName})=>{
    try{
      const response = await signupService({email, password, firstName, lastName})
      dispatchAuth({type:'UpdateUserSignup', payload:response.data})
      return response.data
    }catch(err){
      console.error(err)
    }
  }

  return (
    <AuthContext.Provider value={{ stateAuth, dispatchAuth, LoginUser, signupUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };