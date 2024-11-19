//import React from 'react'
import './Home.css';
import Sidebar from "../../Segments/sidebar/Sidebar";
import Taskbar from "../../Segments/taskbar/Taskbar"; 

const Home = () => {
  return (
    <div className="container">
        <Sidebar className="sidebar"/>
        <Taskbar className="taskbar"/>
    </div>
  )
}

export default Home;
