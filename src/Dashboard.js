import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Createstudent from './Createstudent';
import Liststudents from './Liststudents';
import Listbooks from './Listbooks';
import Createbook from './Createbook';
import Assignbooks from './Assignbooks';
import Listassignbooks from './Listassignbooks';

function Dashboard() {
    return (
    <div className='dash'>       
        <h1 className='dashhead'>Dashboard For Library Management </h1>
<br/>
        <div className='dashboard'>
        
             <Link to="/Createstudent" element={<Createstudent />}>Create Student</Link> | &nbsp;
             <Link to="/Liststudents" element={<Liststudents />}>View Students</Link> | &nbsp;
             <Link to="/Createbook" element={<Createbook />}>Create Book</Link> | &nbsp;
             <Link to="/Listbooks" element={<Listbooks />}>View Books</Link> | &nbsp;
             <Link to="/Assignbooks" element={<Assignbooks />}>Assign Book</Link> | &nbsp;
             <Link to="/Listassignbooks" element={<Listassignbooks />}>View Assigned Books</Link> | &nbsp;
             </div>
    </div>
    );
} 

export default Dashboard;