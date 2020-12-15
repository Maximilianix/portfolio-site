import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <React.Fragment>
        <h1>404 This page does not exist</h1><br/>
        <Link to="/" >Go Back Home</Link>
    </React.Fragment>
);

export default NotFoundPage;