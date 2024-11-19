import { useState } from 'react';
import './Form.css';
import profile_icon from '../../assets/profile_icon.png';
import close_icon from '../../assets/close_icon.png';
import { Container, Grid, TextField, Button } from "@mui/material";
import contactService from '../../api.js';

const refreshPageWithDelay = () => {
  setTimeout(() => {
      window.location.reload();
  }, 100); // 1000ms = 1 second
};

// eslint-disable-next-line react/prop-types
const FormOverlay = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstname.trim()) newErrors.firstname = "First Name is required";
    if (!formData.lastname.trim()) newErrors.lastname = "Last Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";

    setErrors(newErrors); 
    return Object.keys(newErrors).length === 0;
  };
  

  const handleFormSubmit = async (e) => {
    //onClose();
    e.preventDefault();

    if (!validateForm()) {
      console.log("Validation failed");
      return;
    }

    try {
      const contactData = {
        firstName: formData.firstname,
        lastName: formData.lastname,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        jobTitle: formData.jobTitle,
        notes: formData.notes,
      };

      const response = await contactService.createContact(contactData);
      console.log("Contact created successfully:", response);

      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        notes: '',
      });

      onClose();
      refreshPageWithDelay();
    } catch (error) {
      console.error("Error creating contact:", error);
      alert("contact already exists");
      refreshPageWithDelay()
    }
  };

  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="navBar">
          <img
            src={close_icon}
            alt="Close"
            onClick={onClose}
            className="close-icon"
          />
          <p className="navBar-title">Add New Contact</p>
          <Button onClick={handleFormSubmit} className="submit-button" variant="contained" color="primary">
            Save
          </Button>
        </div>

        <form onSubmit={handleFormSubmit} className="contact-form">
          <img src={profile_icon} alt="Profile" className="profile-img" />

          <div className="input-container">
            <Container maxWidth="sm">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleInputChange}
                    error={!!errors.firstname}
                    helperText={errors.firstname}
                    required
                    InputProps={{ style: { height: '45px' } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleInputChange}
                    error={!!errors.lastname}
                    helperText={errors.lastname}
                    required
                    InputProps={{ style: { height: '45px' } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                    InputProps={{ style: { height: '45px' } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    error={!!errors.phone}
                    helperText={errors.phone}
                    required
                    InputProps={{ style: { height: '45px' } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    InputProps={{ style: { height: '45px' } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Job Title"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    InputProps={{ style: { height: '45px' } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    multiline
                    rows={4}
                    InputProps={{ style: { height: '100px'} }}
                  />
                </Grid>
              </Grid>
            </Container>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormOverlay;
