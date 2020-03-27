import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';


// const flexbox = {
//   display: 'flex',
//   flexDirection: 'column',
//   width: '30%',
// }

const Login = () => {
  const history = useHistory()
  const [ user, setUser ] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(`http://localhost:5000/api/login`, user)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
      })
    history.push('/bubbles')
  }

  const handleChange = (e) => {
    setUser({
      ...user, 
      [ e.target.name ] : e.target.value,
    })
  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label htmlFor="username">Username: </label>
        <input onChange={handleChange} name="username" type="text" value={user.username} placeholder="username"/>

        <label htmlFor="password">Password: </label>
        <input onChange={handleChange} name="password" type="password" value={user.password} placeholder="password"/>

        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
};

export default Login;
