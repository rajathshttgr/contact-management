import axios from 'axios';

// Base URL of the deployed API
const API_URL = "https://contacts-api-beta.vercel.app/api/contacts";

const contactService = {
  // Fetch all contacts
  getContacts: async () => {
    try {
      const response = await axios.get(`${API_URL}/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching contacts:", error);
      throw error;
    }
  },

  // Fetch a single contact by ID
  getContact: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching contact:", error);
      throw error;
    }
  },

  // Create a new contact
  createContact: async (contactData) => {
    try {
      const response = await axios.post(`${API_URL}/`, contactData);
      return response.data;
    } catch (error) {
      console.error("Error creating contact:", error);
      throw error;
    }
  },

  // Update an existing contact
  updateContact: async (id, contactData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, contactData);
      return response.data;
    } catch (error) {
      console.error("Error updating contact:", error);
      throw error;
    }
  },

  // Delete a contact
  deleteContact: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting contact:", error);
      throw error;
    }
  },
};

export default contactService;
