import React from 'react';
import '../Components/Component_css/SellerForm.css';
import { Navigate } from 'react-router-dom';

const SellerForm = () => {
    return (
        <>
            <div className="afterseller" >
                {/* Progress Bar - Steps */}
                <header className="progress-bar" >
                    <a className="step" href='#1'>Email ID & GST</a>
                    <a className="step" href='#2'>Password Creation</a>
                    <a className="step" href='#3'>Onboarding Dashboard</a>
                </header>

                {/* Form Section */}
                <div className="form-container"  id='1' style={{ marginTop: "7vh" }}>
                    <div className="form-section" >
                        <label htmlFor="mobile-number">Enter Mobile Number *</label>
                        <div className="input-with-otp">
                            <input type="text" id="mobile-number" placeholder="Enter Mobile Number" />
                            <button className="otp-btn">Send OTP</button>
                        </div>

                        <label htmlFor="email">Email ID *</label>
                        <input type="text" id="email" placeholder="Email ID" />

                        <label htmlFor="sell-on">What are you looking to sell on Doorstep? *</label>

                        <div className="categories">
                            <button className="category-btn active">All Categories</button>
                            <button className="category-btn">Only Books (PAN is mandatory)</button>
                        </div>

                        <label htmlFor="gstin">Enter GSTIN</label>
                        <input type="text" id="gstin" placeholder="Enter GSTIN" />

                        <p className="gst-disclaimer">
                            GSTIN is required to sell products on Doorstep. You can also share it in the final step.
                        </p>

                        <p className="terms">
                            By continuing, I agree to Doorstep's
                            <a href="#"> Terms of Use </a> & <a href="#"> Privacy Policy</a>.
                        </p>

                        <button className="submit-btn">Register & Continue →</button>
                    </div>
      
                    {/* Right Side Info Section */}
                    <div className="info-section">
                        <img src='/images/register.png'/>
                    
            
                    </div>
                </div>
                <br/>
                <hr/>
    
            </div>
            <div className="passContainer" id='2' style={{marginTop:"3vh"}}>
            <div className='password-img'>
                <img src='/images/passCreation.png' alt=''/>
            </div>
            <div className="passwordCreation">
                <h2>Choose your secret password secretly</h2>
                <p>You will use this password to Sign In to Door Step.</p>
                <form className="setPassword">
                    <h3>Enter your password: </h3>
                    <input placeholder='Enter Password'/>
                    <h3>Confirm  your password: </h3>
                    <input placeholder='Confirm Your Password'/>
                    <h3>Password requirements</h3>
                    <ul>
                        <li>must be at least 5 characters</li>
                        <li>must be fewer than 10</li>
                        <li>must be different from email address</li>
                    </ul>
                    <button>Submit</button>
                </form>
                </div>
                </div>
                <hr></hr>
                <div className="sellerLogin" id='3'>
                    
                    <div className="seller-form">
                    <h1>Sign In here to access the Dashboard</h1>
                        <form className='enterPasswordSeller'>
                            <h2>Email Address</h2>
                            <input placeholder='Enter Email Address'/>
                            <h2>Password</h2>
                            <input placeholder='Enter Password'/>
                            <button>Submit</button>
                        </form>
                    </div>
                    <div className='sellerLogInImg'>
                        <img src='/images/sellerLogin.png'></img>
                    </div>
                </div>
        </>
    );
};

export default SellerForm;
