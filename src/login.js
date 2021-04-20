import "./styles.css";
 // clientsecret="pu7iZkLTB3BgjaRcqP8OxCOy"
import React, { useState } from "react";
import GoogleLogin from 'react-google-login';
import {useHistory} from 'react-router-dom';


 
export default function Login () {
   
  const [container,setContainer]=useState('container');
  // state = {
  //   container: "container",
  // };
 
  const signUpButton = () => {
    setContainer({ container: "container right-panel-active" });
  };
 
  const signInButton = () => {
    setContainer({ container: "container" });
  };
    
  const history=useHistory();

  const Page = () => {
    let path='/dashboard';
    history.push(path);
  };
 
    return (
      <div>
        <div>
 
          <h2>Placement Cell </h2>
        </div>
 
        <div className={container}>
          <div class="form-container sign-up-container">
            <form action="#">
              <h1 className="colorCreateAccount">Create Account</h1>
 
              <div class="social-container">
                <a href="#" class="social">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social">
                  <i class="fab fa-google-plus-g"></i>
                </a>
                <a href="#" class="social">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
 
              <button className="rounded-pill" onClick={Page}>Sign Up</button>
            </form>
          </div>
          <div class="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <div class="social-container">
                <GoogleLogin 
                clientId="783117192370-no6pkdj7tfl1roe08d3ln6so6p5utr6p.apps.googleusercontent.com"
                buttonText="Sign In With Google"
                onSuccess={Page}
                cookiePolicy={'single_host_origin'}
                />
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <button className="rounded-pill">Sign In</button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  class="ghost rounded-pill"
                  id="signIn"
                  onClick={signInButton}
                >
                  Sign In
                </button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button
                  class="ghost rounded-pill "
                  id="signUp"
                  onClick={signUpButton}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

// export default withRouter(Login);