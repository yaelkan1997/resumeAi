import React from 'react';
import JobForm from '../components/JobForm';


const Page1 = ({addJob}) => {
    return (
        <div>
            <JobForm addJob = {addJob}/>
        </div>
    );
};

export default Page1;
