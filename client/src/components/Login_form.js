import React from "react";

function Login() {
    return <form className='login-page'>
        <div className="container">
            <h3 className="login_words">Start for free</h3>
            <h2 className="signup_elekrity">Sign Up to Elekrity</h2>
            <h3 className="login_words member">Already a member? <span><a href="#">Log in</a></span></h3>

            <div className="form_gr">
                <label className="form_label" htmlFor="email">Email ID</label>
                <input className="form_input" id="email" type="text" placeholder="name@mail.com" name="email" required />
            </div>

            <div className="form_gr">
                <label className="form_label" htmlFor="pass">Password</label>
                <input className="form_input" id="pass" type="password" placeholder="6+ Letters, 1 capital letter" name="psw" required />
            </div>

            <div className="form_gr">
                <button type="submit" className='create-btn'>Create an account</button>
                <h3 className="login_words words"><span>OR</span></h3>
                <button type="button" className="create-btn cancelbtn">Sign up with Google</button>
            </div>
            <p className="privacy"><span>Privacy Policy</span> and Terms of Service Apply</p>
        </div>
    </form >
}

export default Login;