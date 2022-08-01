import React, {useState} from 'react'
import { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../utils/auth-context'
import Header from '../../Components/Header/Header'

const Signup = () => {
    const [userLog, setUserLog] = useState({email:"", password:"", firstName:"", lastName:""})
    const {signupUser} =useContext(AuthContext)
    const navigate = useNavigate()

    const loginHandler = (e)=>{
        e.preventDefault()
        signupUser({email:userLog.email, password:userLog.password, firstName:userLog.firstName, lastName:userLog.lastName})
        navigate('/')
    }
    
  return (

    <div className="login-management">
      <div className="login-management-wrapper">
        <div className="login-manage-header">
          <h2>Please Sign up to continue</h2>
        </div>

        <div className="login-wrapper">
          <form onSubmit={loginHandler} className="login-form" action="">
          <div className="flex-dir-column-login">
              <small>First Name:</small>
              <input
                onChange={(e) =>
                  setUserLog({ ...userLog, firstName: e.target.value })
                }
                className="login-inp"
                type="text"
                placeholder='First Name'
                required
              />
            </div>
          <div className="flex-dir-column-login">
              <small>Last Name:</small>
              <input
                onChange={(e) =>
                  setUserLog({ ...userLog, lastName: e.target.value })
                }
                className="login-inp"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>

            <div className="flex-dir-column-login">
              <small>Email:</small>
              <input
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
                onChange={(e) =>
                  setUserLog({ ...userLog, password: e.target.value })
                }
                className="login-inp"
                type="password"
                placeholder="Password"
                required
              />
            </div>

            <button className="login-btn">Sign up</button>
          </form>
         
          <div>Already have an account? <Link className="signup-link" to='/login'>Login here</Link> </div>
        </div>
      </div>
    </div>
  )
}

export default Signup