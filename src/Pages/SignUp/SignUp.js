import React from "react";
import "./SignUp.css";
import { useNavigate } from 'react-router-dom';
import person from "../../Assets/person.png";


function Login() {

    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        navigate("/login");
    }

    return (
        <>
            <div className="signUp">
                <div className="container">
                    <div className="content">
                        <div className="overall_signUp">
                            <div className="section_one">
                                <div className="image">
                                    <img src={person} alt="" />
                                </div>
                                <div className="preamble">
                                    <p>Get access to your Order,</p>
                                    <p>Wishlist and Recommendation</p>
                                </div>
                                <div className="login_btn">
                                    <button onClick={login}>LOGIN</button>
                                </div>
                            </div>
                            <div className="section_two">
                                <div className="title">
                                    ELEXTRA
                                </div>
                                <div className="alert">
                                    <p>Sign Up To Get Started</p>
                                </div>
                                <form>
                                    <div className="username">
                                        <label>Username</label>
                                        <input type="text" />
                                    </div>
                                    <div className="email">
                                        <label>Email</label>
                                        <input type="email" />
                                    </div>
                                    <div className="password">
                                        <label>Password</label>
                                        <input type="text" />
                                    </div>
                                </form>
                                <div className="signUp_btn">
                                    <button>REGISTER</button>
                                </div>
                                <div className="existing_acc">
                                    <p>Already have an account? <span className="login" onClick={login}>Login</span></p>
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