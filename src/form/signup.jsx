// // const signup = () => {
// //     const handleSubmit = (e) => {
// //         console.log("submitted")
// //         console.log(e.target.username.value)
// //     }

// //     return (
// //         <>
// //         <form>
// //             <input type="text" placeholder="username"/><br/>
// //             <input type="email" placeholder="email"/><br/>
// //             <input type="number" placeholder="contact"/><br/>
// //             <input type="password" placeholder="password"/><br/>
// //             <input type="submit" value="signup"/>
// //         </form>

// //         </>
// //     )
    
// // }

// // export default signup

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted", formData);

//     fetch("http://localhost:8080/user/insert", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Signup Success:", data);
//         alert("Signup successful!");
//         navigate("/login"); // Navigate to the login page after successful signup
//       })
//       .catch((error) => {
//         console.error("Signup Error:", error);
//         alert("Signup failed, please try again.");
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Username</label>
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <button type="submit">Sign Up</button>
//       <button type="button" onClick={() => navigate("/login")}>
//         Login
//       </button>
//     </form>
//   );
// };

// export default Signup;


