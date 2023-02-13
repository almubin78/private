import React from 'react';
import { Link } from 'react-router-dom';

const NoRoute = () => {
    return (
        <div>
            <h3>404 forbidden</h3>
            <h4>Back To <Link to='/'>Home</Link></h4>
        </div>
    );
};

export default NoRoute;