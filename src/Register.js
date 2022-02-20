import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import usePasswordValidator from 'react-use-password-validator'
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [msg, setErrorMessage] = useState("");

    const [ isValid, setIsValid ] = usePasswordValidator({
        min:8,
        max:30,
        symbols:true,
        lowercase: true,
        uppercase: 1,
        spaces: false
    })


  const register = () => {
    if (!name) alert("Please enter name");
    if (!isValid) {
        setErrorMessage('Password : 8 char & kombinasi huruf besar kecil, angka & simbol!');
        return;
    } else {
        registerWithEmailAndPassword(name, email, password);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
      <div>
        <h3>Register</h3>

        <div className="form-group">
          <label>Full Name</label>
          <input type="text" className="form-control" placeholder="Enter Full name"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Enter email addres"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password"
                 value={password}
                 onChange={(e) => {
                     setPassword(e.target.value)
                     setIsValid(e.target.value)
                 }}
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={register}>Register</button>
          <small>{msg}</small>
        <p className="forgot-password text-right">
          Already registered <a href="/">log in?</a>
        </p>
          <br/>
          <p className="forgot-password text-center">
              <small>This site is protected by reCAPTCHA and the Google Privacy</small><br/>
              <small>Policy and Term of Service Apply</small>
          </p>
      </div>

  );
}

export default Register;
