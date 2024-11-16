//import React from 'react';
import './Sidebar.css'
import PropTypes from 'prop-types';
import logo_icon from '../../assets/logo_icon.png'
import toggle_theme from '../../assets/toggle_theme.png'
import profile_icon from '../../assets/profile_icon.png';
import arrow_icon from '../../assets/arrow_icon.png';
import TaskPanel from '../../components/taskPanel/TaskPanel';


const Sidebar = ({ className }) => {
  return (
    <div className={className}>
      <div className="navBar">
        <img src={logo_icon} alt="" className='logo-icon'/>
        <img src={toggle_theme} alt="" className='toggle-theme'/>
      </div>

      <div className="taskPanel">
        <TaskPanel/>
      </div>
      
      <div className="profile-border">
      <div className="profile">
      <div className="userPic">
           <img src={profile_icon} alt="" className='profile-icon' />
        </div>
        <div className="textInfo">
           <p className="name">Full Name</p>
           <p className="userID">example@gmail.com</p>
        </div>
        <div className="dropDown">
           <img src={arrow_icon} alt="" className='arrow-icon'/>
        </div>
      </div>         
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default Sidebar;//