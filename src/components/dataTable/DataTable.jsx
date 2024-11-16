import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import contactService from '../../api.js'; // Adjust the path as needed

const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 0,
          fontSize: '0.875rem',
          '& .MuiDataGrid-cell': {
            fontSize: '0.875rem',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#f5f5f5',
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 'bold',
          },
        },
      },
    },
  },
});

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First Name', width: 130 },
  { field: 'lastName', headerName: 'Last Name', width: 130 },
  { field: 'email', headerName: 'Email', width: 180 },
  { field: 'phone', headerName: 'Phone Number', width: 180 },
  { field: 'company', headerName: 'Company', width: 160 },
  { field: 'jobTitle', headerName: 'Job Title', width: 160 },
];

export default function DataTable() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true); // For loading state

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await contactService.getContacts();
        const formattedData = data
          .map((contact, index) => ({
            id: data.length - index, // Reverse order ID
            firstName: contact.firstName,
            lastName: contact.lastName,
            email: contact.email,
            phone: contact.phone, // Ensure correct property
            company: contact.company,
            jobTitle: contact.jobTitle,
          }))
          .reverse(); // Reverse the order of the rows
        setRows(formattedData);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const paginationModel = { page: 0, pageSize: 10 };

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ height: 622, width: '100%', p: 2 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading} // Show loader while fetching data
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{
            border: 0,
          }}
        />
      </Paper>
    </ThemeProvider>
  );
}
