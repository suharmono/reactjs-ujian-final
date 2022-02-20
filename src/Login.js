import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword} from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
        <div>
            <h3>Log in</h3>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" className="form-control"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="Enter email address"/>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control"
                     placeholder="Enter password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}/>
              <p className="forgot-password text-left">
                <a href="/reset">Forgot password?</a>
              </p>
            </div>

            <button type="submit" className="btn btn-primary btn-lg btn-block"
                    onClick={() => logInWithEmailAndPassword(email, password)}>Log in
            </button>
            <p className="has-text-centered">{msg}</p>
            <br/>
            <div className="form-group">
              <p className="forgot-password text-center">
                Don't have an account ? <a href="/register">Sign Up</a>
              </p>
              <br/>
              <p className="forgot-password text-center">
                <small>This site is protected by reCAPTCHA and the Google Privacy</small><br/>
                <small>Policy and Term of Service Apply</small>
              </p>
            </div>
      </div>

  );
}

export default Login;
