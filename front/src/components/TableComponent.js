import './TableComponent.css';
import React, { useState } from 'react';


const TableComponent = ({jobs}) => {

    //const [tableData, setTableData] = useState([]);
    const [currentPage, setCurentPage] = useState(1);
    const[filterStatus,setFilterStatus] =useState("all");
    const[sortOrder,setsortOrder] =useState("asc");


    //useEffect(()=>{setTableData(jobs);},[])

    const itemPerPage = 10;
    const IndexLastItem = currentPage * itemPerPage;
    const IndexFirstItem = IndexLastItem - itemPerPage;

    const filteredJobs = filterStatus ==="all" ? jobs : jobs.filter(job => job.status === filterStatus);

    const sortedJobs = [...filteredJobs].sort((a,b)=>{
        const parseDate = (dateStr) => {
            const [day, month] = dateStr.split('.'); 
            return new Date(2024, month - 1, day);  
        };
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA 
    });

    const currentItems = sortedJobs.slice(IndexFirstItem,IndexLastItem)

    const TotalPages = Math.ceil(sortedJobs.length/itemPerPage)

    const Pageinate = (pageNumber) => setCurentPage(pageNumber)

    const UpdateStatus = (index,newStatus) => {
        const UpdateTable = [...jobs];
        UpdateTable[index].status = newStatus;
        jobs(UpdateTable);
    }

    
    return (
        <div className="table-container">
            <h2> Uptade job</h2>
            <div className='filter-container'>
                <label>Filter by Status:</label>
                <select value={filterStatus} onChange={(e)=> setFilterStatus(e.target.value)}>
                    <option value="all">All</option>
                    <option value="not">Reject</option>
                    <option value="send">Send</option>
                </select>
                <label>Sort by Date:</label>
                <button className="sort-button" onClick={()=> setsortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
                    {sortOrder === "asc" ? 'Oldest' : 'Newest'}
                </button>

            </div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>roll</th>
                        <th>compony</th>
                        <th>date</th>
                        <th>status</th>
                        <th>CV</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item,index)=>(
                        <tr key = {item.id}
                            style={{backgroundColor: item.status === "not" ? '#ee9696':'white'}}>
                            <td>{index + 1 + IndexFirstItem} </td>
                            <td>{item.roll}</td>
                            <td>{item.compony}</td>
                            <td>{item.date}</td>
                            <td>
                                <select
                                className="status-select"
                                value={item.status}
                                onChange={(e)=>
                                    UpdateStatus(index+IndexFirstItem,e.target.value)}>
                                    <option value="send">Send</option>
                                    <option value="not">Rject</option>
                                </select>
                            </td>
                            <td>{item.CV}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={()=> Pageinate(currentPage-1)}
                    disabled = {currentPage ===1}>
                    prev
                </button>
                {[...Array(TotalPages)].map((_,index)=>(
                    <button
                    key={index}
                    onClick={()=> Pageinate(index+1)}
                    className={index+1 === currentPage ? 'active':''}>
                    {index + 1}
                    </button>

                ))}
                <button onClick={()=>Pageinate(currentPage +1)}
                    disabled = {currentPage === TotalPages}>
                    next
                </button>
            </div>
        </div>
    );
};

export default TableComponent;
