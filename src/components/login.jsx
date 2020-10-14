/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from "react";



function Login() {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    
    
    const handleEmailChange = (e) => {
        setEmailInput(e.target.value);
        
    }
    
    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    }
    
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        let hardcodedCred = {
            email: 'email@email.com',
            password: 'password'
        }
    
        if ((emailInput === hardcodedCred.email) && (passwordInput === hardcodedCred.password)) {
            document.write("<h1>Login Was Successful</h1>")

                                               
        }else if((emailInput === hardcodedCred.email && (passwordInput !== hardcodedCred.password))) {
            
            document.write("<h1>Password is Wrong</h1>")

        }
        else {
                alert('Invalid Email or Password,Login Failed!');
        }
            

    }
    return (
        <div className="login-page">
            <h2>Sign In</h2>
            <form className="form" autoComplete="off" onSubmit={handleLoginSubmit}>
            <div className="display">
                <div className="form-group">
                    
                    <label htmlFor="Username">User Name </label> <br/>
                    <input
                    type="email"
                    required
                    className="input"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email"
                    value={emailInput}                    
                    onChange={handleEmailChange}

                    />
                    
                    
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password </label>
                    <br/>
                    <input
                    type="password"
                    required
                    autoComplete="new-password"
                    className="input"
                    id="exampleInputPassword1"
                    placeholder="Enter Password"
                    minLength="8"
                    value={passwordInput}
                    onChange={handlePasswordChange}

                    />
                                       
                </div>
                <br/>
                <div className="form-group">
                <button type="submit" className="button">
                    Sign In
                </button>
                </div>
                </div>                                
                <br/>
                <a className="link" href="#" id="forgot">Forgot Password?</a>          
          </form>
          
        </div>
      );
}

export default Login;