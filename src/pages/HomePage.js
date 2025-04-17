import React from 'react';
import TableComponent from '../components/TableComponent';

const HomePage = ({jobs}) => {
    return (
        <div>
            <TableComponent jobs={jobs}/>
        </div>
    );
};

export default HomePage;
