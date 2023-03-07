import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function sign() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setotp] = useState('');

const [random, setrandom] = useState(1234);

const getotp=()=>{
    let r=Math.random()
    r=r*10000;
    r=Math.round(r)
    setrandom(r)
    alert(r)
}


  const handleSubmit = (event) => {
    event.preventDefault();
    if(otp == random){
        alert("Login Succesfully");
        window.location.href='/'
    }
else{
    alert("OTP is Wrong")
}

  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
            required
          />
        </div>
        <div className="form-group">
            <label htmlFor="otp" className='otp' onClick={()=>{getotp()}}>
            Get OTP
        </label>
         
          <input
            type="text"
            id="otp"
            name="otp"
            value={otp}
            onChange={(event) => setotp(event.target.value)}
            placeholder="Enter OTP here"
            required
          />
        </div>
        
        <button type="submit">Login</button>
        <Link className='otp' to='/login'>
           Already Have Account Login In
        </Link>
      </form>
    </div>
  );
}

export default sign;