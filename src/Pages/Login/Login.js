import React, { useState } from 'react';
import UserAccount from '../UserAccount/UserAccount';
import './Login.css';


function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [isLoggedin, setIsLoggedin] = useState(false);

  const login = (e) => {
    e.preventDefault();
    console.log( email, password);
    const userData = {
      
      email,
      password,
    };
    sessionStorage.setItem('token-info', JSON.stringify(userData));
    setIsLoggedin(true);
  
    setEmail('');
    setPassword('');
  };
 
  const logout = () => {
    sessionStorage.removeItem('token-info');
    setIsLoggedin(false);
  };
  return (
    <div className=''>
      { !isLoggedin ? "" :<button className='login-button' onClick={logout}>logout user</button> }
   {!isLoggedin  ? ( <div className="loginParentDiv">
        <img width="200px" height="200px" src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" alt=''></img>
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            value={email}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
          />
          <br />
          <br />
          <button onClick={login}>Login</button>
        </form>
      </div>) :
       <UserAccount />  }
    
    </div>
  );
}

export default Login;


// import axios from "axios";
// import React from 'react'
// import { useEffect } from "react";
// import { useState } from "react";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState()

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const user = { username, password };
//     // send the username and password to the server
//     const response = await axios.post(
//       "http://blogservice.herokuapp.com/api/login",
//       user
//     );
//     // set the state of the user
//     setUser(response.data)
//     // store the user in localStorage
//     localStorage.setItem('user', response.data)
//     console.log(response.data)
//   };


// // if there's a user show the message below
//   if (user) {
//     return <div>{user.name} is loggged in</div>;
//   }


//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//       <label htmlFor="username">Username: </label>
//       <input
//         type="text"
//         value={username}
//         placeholder="enter a username"
//         onChange={({ target }) => setUsername(target.value)}
//       />
//       <div>
//         <label htmlFor="password">password: </label>
//         <input
//           type="password"
//           value={password}
//           placeholder="enter a password"
//           onChange={({ target }) => setPassword(target.value)}
//         />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//     </div>
//   )
// }

// export default Login
