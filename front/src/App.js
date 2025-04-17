import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import ApplyJob from './pages/ApplyJob';
import UpdateInformation from './pages/UpdateInformation';
import jobsData from './jobs.json'

import './App.css';

const App = () => {
    const [jobs,setJobs] = useState([]); 

    useEffect(()=>{
        setJobs(jobsData);
    },[])

const addNewJob = (newjob)=>{
    setJobs((prevJobs) => [...prevJobs,newjob]);
}

    return (
        <Router>
            <div className="app-container">
                <Sidebar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<HomePage jobs = {jobs} />} />
                        <Route path="/page1" element={<ApplyJob addJob ={addNewJob}/>} />
                        <Route path="/page2" element={<UpdateInformation jobs = {jobs} />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
