import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css'
const Navigation = () => {
    return (
        <div className='navigation container'>
            <div>
                <h3>Recharge Yourself</h3>
            </div>
            <div>
                <li>
                    <Link to='/'>Home</Link>
                    <Link to='/subject'>Subject</Link>
                    <Link to='/mission'>Mission</Link>
                    <Link to='/youtube'>dynamic Youtube</Link>
                    <Link to='/register'>Register</Link>
                </li>
            </div>
        </div>
    );
};

export default Navigation;