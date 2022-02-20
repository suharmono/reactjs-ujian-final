import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "./firebase";
import "./Reset.css";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
      <div>
        <h3>Reset Password</h3>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" className="form-control" placeholder="Enter email address"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={() => sendPasswordReset(email)}>Send password reset email</button>
            <p className="forgot-password text-right">
              Don't have an account? <a href="/register">Register</a> now.
            </p>
          <p className="forgot-password text-right">
              Back to <a href="/">Login</a>
          </p>

      </div>

  );
}

export default Reset;
