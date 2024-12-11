import React from 'react';
import {Link} from "react-router";

const Dashboard = () => {
    return (
        <div>
            <h1 style={{"color":"aqua"}}>Dashboard</h1>
            <br/>
            <Link to="/add" style={{"padding" : "1rem"}}>Add Customer</Link>
            <Link to="/delete" style={{"padding" : "1rem"}}>Delete Customer</Link>
            <Link to="/update" style={{"padding" : "1rem"}}>Update Customer</Link>
        </div>
    );
};

export default Dashboard;