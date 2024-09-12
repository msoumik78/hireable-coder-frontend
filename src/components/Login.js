import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
 


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');    
    const navigate = useNavigate();
      
      const handleSubmit2 = (event) => {
        event.preventDefault();
        const userData = {
            "username": username,
            "password": password
          };
          axios.post("http://localhost:8080/api/1/bank-customers/login-verification", userData)
          .then((response) => {
            const userId = response.data.userId;
            const userName = response.data.username;
            const jwt = response.data.jwtResponse;
            localStorage.setItem("jwt-token", jwt);
             if (userId <= 0) {
                setError('Sorry Credentials dont match');    
            } else {
                navigate('/home', { state: { id: userId, name : userName} });
            }
          })
          .catch((error) => {
            console.log(error.message)
            setError('Sorry Credentials dont match');    
          });       
      };        


    return (
        <form onSubmit={handleSubmit2}>
          <div className="imgcontainer">
            <h2><center>Welcome to mini bank app, please enter your login details below:</center></h2>
          </div>

          <div className="container">
            <label><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" value={username}
              onChange={(e) => setUsername(e.target.value)}/>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            <div>
              <h4 style={{ color: 'red' }}>{error}</h4>
            </div>                
            <button type="submit">Login</button>
          </div>
    </form>
  )
}  