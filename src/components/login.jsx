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
            document.write("<h1>Login Was Successfull</h1>")

                                               
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
                    <label htmlFor="Username">User Name 
                    <input
                    type="email"
                    required
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={emailInput}                    
                    onChange={handleEmailChange}
                    title="This field should not be left blank."

                    />
                    </label>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password
                    <input
                    type="password"
                    required
                    autoComplete="new-password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Password"
                    minLength="8"
                    value={passwordInput}
                    onChange={handlePasswordChange}

                    />
                    
                    </label>
                    
                </div>
                
                <button type="submit" className="button  btn-block">
                    Sign In
                </button>
                </div>                                
                <br/>
                <a className="link" href="#" id="forgot">Forgot Password?</a>          
          </form>
          
        </div>
      );
}

export default Login;