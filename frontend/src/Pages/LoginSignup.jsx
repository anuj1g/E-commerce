import React, { useState } from 'react';
import "../CSS/LoginSignup.css";
import { Link } from 'react-router-dom'; // Link ko import kiya hai

const LoginSignup = () => {
    // Nai state jo form ke data ko manage karegi
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [isLogin, setIsLogin] = useState(false); // Login state add kiya

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{isLogin ? "Login" : "Sign Up"}</h1> {/* Heading ko dynamic kiya */}
                <form onSubmit={handleSubmit}>
                    <div className='loginsignup-fields'>
                        {!isLogin && ( // Agar login nahi hai, to name field dikhega
                            <input 
                                type='text' 
                                placeholder='Your Name' 
                                name='name' 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                            />
                        )}
                        <input 
                            type='email' 
                            placeholder='Email Address' 
                            name='email' 
                            value={formData.email} 
                            onChange={handleChange} 
                            required
                        />
                        <input 
                            type='password' 
                            placeholder='Password' 
                            name='password' 
                            value={formData.password} 
                            onChange={handleChange} 
                            required
                        />
                        <button type="submit">{isLogin ? "Login" : "Continue"}</button>
                    </div>
                </form>
                
                <p className="loginsignup-login">
                    {isLogin ? (
                        <>Don't have an account? <span onClick={() => setIsLogin(false)}>Sign Up here</span></>
                    ) : (
                        <>Already have an account? <span onClick={() => setIsLogin(true)}>Login here</span></>
                    )}
                </p>
                
                {!isLogin && ( // Agar login nahi hai, to agree checkbox dikhega
                    <div className='loginsignup-agree'>
                        <input type='checkbox' name='' id='' required/>
                        <p>By continuing, I agree to the terms of use & privacy policy.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LoginSignup;