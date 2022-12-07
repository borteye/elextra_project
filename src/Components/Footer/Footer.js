import React from "react";
import "./Footer.css";
import mailing from "../../svgIcons/message-svgrepo-com.svg";
import phone from "../../svgIcons/phone-call-svgrepo-com.svg";
import visa from "../../Assets/visa.png"
import mastercard from "../../svgIcons/mastercard-svgrepo-com.svg";
import american_exp from "../../svgIcons/american-express-svgrepo-com.svg";
import paypal from "../../svgIcons/paypal-svgrepo-com.svg";


function Footer() {



    return (

        <>

            <div className="footer">
                <div className="container">
                    <div className="content">
                        <div className="text_section">
                            <div className="section_one">
                                <div className="subSection_one">
                                    <div className="slogan">
                                        <h2>Elextra</h2>
                                        <p className="company_slogan">And On The Eighth Day, God Created <strong>ELEXTRA</strong>.</p>
                                    </div>
                                </div>

                                <div className="subSection_two">
                                    <div className="company">
                                        <ul>
                                            <h4>COMPANY</h4>
                                            <li>ABOUT US</li>
                                            <li>PRIVACY POLICY</li>
                                            <li>TERMS & CONDITIONS</li>
                                            <li>NEWS</li>
                                        </ul>
                                    </div>
                                    <div className="social">
                                        <ul>
                                            <h4>SOCIAL</h4>
                                            <li>FACEBOOK</li>
                                            <li>TWITTER</li>
                                            <li>INSTAGRAM</li>
                                        </ul>
                                    </div>
                                    <div className="service">
                                        <ul>
                                            <h4>SERVICE</h4>
                                            <li>FEEDBACK</li>
                                            <li>BUG REPORT</li>
                                            <li>INSTAGRAM</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="section_two">
                                <div className="contact_us">
                                    <ul>
                                        <h4>CONTACT US</h4>
                                        <li>
                                            <img src={mailing} alt="" />
                                            <p className="mailing_address">elextra@outlook.com</p>
                                        </li>
                                        <li>
                                            <img src={phone} alt="" />
                                            <p className="mailing_address">+91 999 999 999</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright">
                                    <p>Copyright &copy; 2018 ELEXTRA. All right rights reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="payment_section">
                        <div className="payment_method">
                            <div className="title">
                                <strong>Supported payment systems</strong>
                            </div>
                            <div className="method_types">
                                <div className="paypal">
                                    <img src={paypal} alt="" />
                                </div>
                                <div className="visa">
                                    <img src={visa} alt="" />
                                </div>
                                <div className="mastercard">
                                    <img src={mastercard} alt="" />
                                </div>
                                <div className="american_exp">
                                    <img src={american_exp} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;