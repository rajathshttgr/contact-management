import { useState } from 'react';
import './Form.css';
import profile_icon from '../../assets/profile_icon.png';
import close_icon from '../../assets/close_icon.png';
import { Container, Grid, TextField, Button } from "@mui/material";

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

  // Update form data on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstname.trim()) newErrors.firstname = "First Name is required";
    if (!formData.lastname.trim()) newErrors.lastname = "Last Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // True if no errors
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) {
      console.log("Validation failed");
      return;
    }

    console.log('Form submitted', formData);
    onClose(); // Close the overlay
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
                {/* First Name Field */}
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

                {/* Last Name Field */}
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

                {/* Email Field */}
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

                {/* Phone Number Field */}
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

                {/* Company Field */}
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

                {/* Job Title Field */}
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

                {/* Notes Field */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    multiline
                    rows={4}
                    InputProps={{ style: { height: '100px' } }}
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
