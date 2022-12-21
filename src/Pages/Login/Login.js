import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import email from "../../Assets/email.svg";
import password from "../../Assets/password.svg";
import facebook from "../../Assets/facebook.png";
import gmail from "../../Assets/gmail.png";
import linkedin from "../../Assets/linkedin.png";
// import { db, auth } from "../../FbaseConfig";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import {
//   collection,
//   addDoc,
//   setDoc,
//   doc,
//   onSnapshot,
// } from "firebase/firestore";

function Login() {
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    navigate("/sign-up");
  };

  const login = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="login">
        <div className="container">
          <div className="content">
            <div className="overall_login">
              <div className="title">
                Login <span className="subTitle">to continue...</span>
              </div>
              <hr />
              <div className="email">
                <img src={email} alt="" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="password">
                <img src={password} alt="" />
                <input type="password" placeholder="Password" />
              </div>
              <p className="no_account">
                Don't have an account?{" "}
                <span className="signUp" onClick={signUp}>
                  Sign Up
                </span>
              </p>
              <div className="loginBtn">
                <button onClick={login}>LOGIN</button>
              </div>
              <p className="or">or</p>
              <div className="other_socials">
                <div className="facebook">
                  <button>
                    <img src={facebook} alt="" />
                  </button>
                </div>
                <div className="gmail">
                  <button>
                    <img src={gmail} alt="" />
                  </button>
                </div>
                <div className="linkedin">
                  <button>
                    <img src={linkedin} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
