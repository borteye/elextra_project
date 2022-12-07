import React from "react";
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import person from "../../Assets/person.png";


function Login() {

    const navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault();
        navigate("/sign-up");
    }

    return (
        <>
            <div className="login">
                <div className="container">
                    <div className="content">
                        <div className="overall_login">
                            <div className="section_one">
                                <div className="image">
                                    <img src={person} alt="" />
                                </div>
                                <div className="preamble">
                                    <p>Get access to your Order,</p>
                                    <p>Wishlist and Recommendation</p>
                                </div>
                                <div className="signUp_btn">
                                    <button onClick={signUp}>SIGN UP</button>
                                </div>
                            </div>
                            <div className="section_two">
                                <div className="title">
                                    ELEXTRA
                                </div>
                                <div className="alert">
                                    <p>Log In To Continue</p>
                                </div>
                                <form>
                                    <div className="email">
                                        <label>Email</label>
                                        <input type="email" />
                                    </div>
                                    <div className="password">
                                        <label>Password</label>
                                        <input type="text" />
                                    </div>
                                </form>

                                <div className="forgot_password">
                                    <p>Forgot Your Password?</p>
                                </div>

                                <div className="login_btn">
                                    <button>LOGIN</button>
                                </div>
                                <div className="new_acc">
                                    <p>Don't have an account? <span className="register" onClick={signUp}>Register Now</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;