import { useState } from 'react';
import './Taskbar.css';
import DataTable from '../../components/dataTable/DataTable';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import contactService from '../../api.js';
import more_icon from '../../assets/more_icon.png';
import Form from '../../components/form/Form.jsx';

// eslint-disable-next-line react/prop-types
const Taskbar = ({ className }) => {
  const [selectedContact, setSelectedContact] = useState(null); // Track selected contact
  const [openDialog, setOpenDialog] = useState(false); // Track dialog state
  const [isOverlayVisible, setOverlayVisible] = useState(false); // Track form overlay state

  const handleSelectContact = (contact) => {
    setSelectedContact(contact); // Update selected contact when a row is clicked
  };

  // Open delete confirmation dialog
  const handleClickOpenDialog = () => {
    if (selectedContact) {
      setOpenDialog(true);
    }
  };

  // Close delete confirmation dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Refresh the page
  const handleRefresh = () => {
    window.location.reload();
  };

  // Handle delete operation
  const handleDelete = async () => {
    try {
      await contactService.deleteContact(selectedContact.idx); // Delete the contact
      console.log(`Contact with ID ${selectedContact.idx} deleted successfully.`);
      setSelectedContact(null); // Clear the selected contact
    } catch (error) {
      console.error('Error deleting contact:', error);
      alert('Failed to delete contact. Please try again.');
    } finally {
      setOpenDialog(false); // Close the dialog
      handleRefresh();
    }
  };

  // Open form overlay
  const handleOpenOverlay = () => {
    setOverlayVisible(true);
    console.log(selectedContact.idx);
  };

  // Close form overlay
  const handleCloseOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <div className={className}>
      <div className="navBar">
        <div className="title">
          <p className="titlebar">Contacts Management</p>
        </div>
        {/* Action Buttons */}
        <div className="share">
          <div className={`update ${selectedContact ? 'show' : ''}`}>
            {/* Delete Button */}
            <div className="delete">
              <DeleteOutlinedIcon
                style={{ fontSize: 30, color: 'black' }}
                onClick={handleClickOpenDialog} // Opens delete dialog
              />
            </div>
            {/* Edit Button */}
            <div className="edit">
              <EditNoteOutlinedIcon
                style={{ fontSize: 32, color: 'black' }}
                onClick={handleOpenOverlay} // Opens the form
              />
            </div>
          </div>
          {/* Share and More Options */}
          <div className="sharelink">
            <button>Share</button>
          </div>
          <div className="more">
            <img src={more_icon} alt="More Options" />
          </div>
        </div>
      </div>
      {/* Data Table */}
      <div className="data-table">
        <DataTable onSelectContact={handleSelectContact} />
      </div>
      {/* Delete Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this contact? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      {/* Form Overlay */}
      {isOverlayVisible && <Form onClose={handleCloseOverlay} />}
    </div>
  );
};

export default Taskbar;
