



import React from 'react';
// import logout from './index'
import {  Link, } from 'react-router-dom';
// import Login from './components/Login.js';

class Heading extends React.Component {
render(){
    const logout = () => {
        localStorage.removeItem('token')
      };
    
    return(


        <div className='heading'>
            <ul className='heading'>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link onClick={logout}>Logout</Link>
            </li>
            <li>
                <Link to="/protected">Get Users</Link>
            </li>
        </ul>
        </div>
            
    )
}

}


export default Heading