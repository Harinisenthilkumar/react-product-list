import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

const Signin = () => {
  const navigate = useNavigate();

  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
  };

  const [state, setState] = useState(initialState);

  const handleEvent = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleData = () => {
    console.log(state);

    const user = {
      username: state.username,
      email: state.email,
      password: state.password,
      // confirmPassword: state.confirmPassword,
      contact: state.contact,
    }

    fetch("http://localhost:8080/user/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(user)
    })
      // .then((response) => response.json())
      // .then((data) => {
      //   console.log("Success:", data);
      //   // Optionally, navigate to another page on successful signup
      //   navigate("/dashboard");
      // })
      // .catch((error) => {
      //   console.error("Error:", error);
      // });
  };

  const onNavigate = () => {
    navigate("/");
  };

  return (
    <div className="sign">
      <h1> Signin</h1>

      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={state.username}
        placeholder="Enter Username"
        onChange={handleEvent}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={state.email}
        placeholder="Enter Email"
        onChange={handleEvent}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={state.password}
        placeholder="Enter Password"
        onChange={handleEvent}
      />

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={state.confirmPassword}
        placeholder="Confirm Password"
        onChange={handleEvent}
      />

      <label htmlFor="contact">Contact</label>
      <input
        type="number"
        id="contact"
        name="contact"
        value={state.contact}
        placeholder="Enter Contact Number"
        onChange={handleEvent}
      />

      <button type="submit" onClick={handleData}>
        Signin
      </button>
      <button type="button" onClick={onNavigate}>
        Login
      </button>
    </div>
  );
};

export default Signin
