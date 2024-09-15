// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import './Login.css'

// const Login = () => { 
//     const navigate = useNavigate()
//     const va = {
//         email: "",
//         password: ""
//     }
// const [state, setState] = useState(va)

// const handleevent = (e) => {
//     setState({
//         ...state,
//         [e.target.name]: e.target.value
//     })
// }
// const handleData = () => {
//     console.log(state)
    
// }
// const onNavigate =()=>{
//   navigate('/Signin')
// }

//   return (
//     <div className='login'>
//         <h1> Login</h1>
        
//             <label htmlFor="email">Email</label>
//             <input type="email" id='email' name='email' value={state.email} placeholder='Enter Email' onChange={(handleevent) }/>
//             <label htmlFor="password">Password</label>
//             <input type="password" id='password' name='password' value={state.password} placeholder='Enter Password' onChange={handleevent}/>
//             <button type='submit' onClick={handleData}>Login</button>
//             <button onClick={onNavigate}>Signin</button>
        
      
//     </div>
//   )
// }
// export default Login

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const [state, setState] = useState({
//     email: "",
//     password: "",
//   });

//   const handleEvent = (e) => {
//     setState({
//       ...state,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleData = (e) => {
//     e.preventDefault();
//     console.log(state);

//     fetch("http://localhost:8080/user/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify(state),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Login Success:", data);
//         alert("Login successful!");
//         navigate("/home"); // Replace "/home" with the path you want to navigate to after login
//       })
//       .catch((error) => {
//         console.error("Login Error:", error);
//         alert("Login failed, please try again.");
//       });
//   };

//   return (
//     <div className="login">
//       <h1>Login</h1>
//       <form onSubmit={handleData}>
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={state.email}
//           placeholder="Enter Email"
//           onChange={handleEvent}
//           required
//         />
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={state.password}
//           placeholder="Enter Password"
//           onChange={handleEvent}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       <button onClick={() => navigate("/")}>Sign Up</button>
//     </div>
//   );
// };

// export default Login;

