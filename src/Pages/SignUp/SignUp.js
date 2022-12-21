import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import emailsvg from "../../Assets/email.svg";
import passwordsvg from "../../Assets/password.svg";
import facebook from "../../Assets/facebook.png";
import gmail from "../../Assets/gmail.png";
import linkedin from "../../Assets/linkedin.png";
import person from "../../Assets/person.svg";
import { db, auth } from "../../FbaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  // collection,
  // addDoc,
  setDoc,
  doc,
  // onSnapshot,
} from "firebase/firestore";

function SignUp() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const userRegistration = (username, email, confirmpassword) => {
    createUserWithEmailAndPassword(auth, email, confirmpassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...

        const userProfile = {
          uid: user.uid,
          name: username,
          mail: email,
        };
        const userDocRef = doc(db, "users", user.uid);
        setDoc(userDocRef, userProfile);
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    userRegistration(username, email, confirmpassword);
  };

  const login = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <>
      <div className="signUp">
        <div className="container">
          <div className="content">
            <div className="overall_signUp">
              <div className="title">
                Sign Up <span className="subTitle">to get started...</span>
              </div>
              <hr />
              <form onSubmit={handleSignUp}>
                <div className="username">
                  <img src={person} alt="" />
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="email">
                  <img src={emailsvg} alt="" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="password">
                  <img src={passwordsvg} alt="" />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="password">
                  <img src={passwordsvg} alt="" />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmpassword}
                    onChange={(e) => {
                      setConfirmpassword(e.target.value);
                    }}
                    required
                  />
                </div>
                <p className="no_account">
                  Already have an account?
                  <span className="login" onClick={login}>
                    Login
                  </span>
                </p>
                <div className="signUpBtn">
                  <button type="submit">SIGN UP</button>
                </div>
              </form>

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

export default SignUp;
