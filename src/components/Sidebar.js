import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './Sidebar.css';

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="sidebar">
            <h2>Hello</h2>
            <ul>
                <li className={location.pathname === "/" ? "active" : ""}>
                    <Link to="/">Main page</Link>
                </li>
                <li className={location.pathname === "/page1" ? "active" : ""}>
                    <Link to="/page1">Apply for a job</Link>
                </li>
                <li className={location.pathname === "/page2" ? "active" : ""}>
                    <Link to="/page2">Update information</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
