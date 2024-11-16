import {useState} from 'react'
import Form from '../form/Form'
//import Box from '@mui/material/Box';
import AddBoxIcon from '@mui/icons-material/AddBox';
import StarIcon from '@mui/icons-material/Star';
import SearchIcon from '@mui/icons-material/Search';
import './TaskPanel.css'

const TaskPanel = () => {

    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const handleOpenOverlay = () => {
      setOverlayVisible(true);
    };
  
    const handleCloseOverlay = () => {
      setOverlayVisible(false);
    };

  return (
    <>
    <div className="search">
      <SearchIcon className="search-icon" />
      <input type="text" placeholder="Search" />
    </div>

      <div className="add-contact">
      <button onClick={handleOpenOverlay}>
          <AddBoxIcon style={{ marginRight: '8px' }} /> 
          Add Contact
        </button>
        {isOverlayVisible && <Form onClose={handleCloseOverlay} />}
      </div>
      
     <div className="starred">
     <button>
     <StarIcon style={{ marginRight: '8px' }} /> 
     Starred</button>
     </div>

     </>
  );
}

export default TaskPanel