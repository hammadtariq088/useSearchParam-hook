import React from 'react';
import { useParams, useLocation, useNavigate } from "react-router-dom";

const User = () => {
    const {fname, lname} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <>
        <div>
            <h1>This is user {fname} {lname} Page</h1>
            {/* {console.log(location.pathname)} */}
            <h2>My current location is {location.pathname}</h2>
            {location.pathname === '/user/hammad/tariq' ? <button onClick={()=> alert('Hello welcome here....')}>Click Me to show alert</button> : null}
            <button onClick={()=> navigate(-1)}>Go back to previous page</button>
        </div>
        </>
    )
}

export default User;
