
import React, { useContext } from 'react'

import { Navigate } from 'react-router-dom';
import { Usercontext } from '../Context/AuthContext';


function PrivateRoute({ children }) {

    const { token } = useContext(Usercontext);

    if (!token) {
        return <Navigate to={"/login"} />;
    }
    else {
        return children;
    }
}

export default PrivateRoute;
