//import React from 'react'
import './Taskbar.css'
import DataTable from '../../components/dataTable/DataTable'
import more_icon from '../../assets/more_icon.png'


import PropTypes from 'prop-types';

const Taskbar = ({ className }) => {
  return (
    <div className={className}>
      <div className="navBar">
        <div className="title">
        <p className='titlebar'>Contacts Management</p>
        </div>
        <div className="share">
            <div className="sharelink">
                <button>Share</button>
            </div>
            <div className="more">
                <img src={more_icon} alt="" />
            </div>
        </div>
      </div>
      <div className="data-table">
      <DataTable/>
      </div>
    </div>
  );
};

Taskbar.propTypes = {
  className: PropTypes.string,
};

export default Taskbar;//