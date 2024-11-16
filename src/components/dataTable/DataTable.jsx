//import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
  { field: 'phoneNo', headerName: 'Phone Number', width: 150 },
  { field: 'company', headerName: 'Company', width: 160 },
  { field: 'jobTitle', headerName: 'Job Title', width: 160 },
];

const rows = [
  { id: 1, firstName: 'Rajath', lastName: 'Gupta', email: 'rajath@gmail.com', phoneNo: '7204954945', company: 'TechCorp', jobTitle: 'Software Engineer' },
  { id: 2, firstName: 'Cersei', lastName: 'Lannister', email: 'cersei@castlerock.com', phoneNo: '1234567890', company: 'Castlerock Inc', jobTitle: 'CEO' },
  { id: 3, firstName: 'Jaime', lastName: 'Lannister', email: 'jaime@knightscorp.com', phoneNo: '2345678901', company: 'Knight\'s Corp', jobTitle: 'CFO' },
  { id: 4, firstName: 'Arya', lastName: 'Stark', email: 'arya@starkind.com', phoneNo: '3456789012', company: 'Stark Industries', jobTitle: 'Assassin' },
  { id: 5, firstName: 'Daenerys', lastName: 'Targaryen', email: 'dany@dragonstone.com', phoneNo: '4567890123', company: 'Dragonstone', jobTitle: 'Queen' },
  { id: 6, firstName: 'Melisandre', lastName: 'Shadow', email: 'melisandre@firelord.com', phoneNo: '5678901234', company: 'Fire Lord Co.', jobTitle: 'Priestess' },
  { id: 7, firstName: 'Ferrara', lastName: 'Clifford', email: 'ferrara@bigred.com', phoneNo: '6789012345', company: 'Big Red', jobTitle: 'Engineer' },
  { id: 8, firstName: 'Rossini', lastName: 'Frances', email: 'rossini@artistic.com', phoneNo: '7890123456', company: 'Artistic Inc', jobTitle: 'Artist' },
  { id: 9, firstName: 'Harvey', lastName: 'Roxie', email: 'harvey@littlerock.com', phoneNo: '8901234567', company: 'Little Rock', jobTitle: 'Manager' },
];

const paginationModel = { page: 0, pageSize: 10 };

export default function DataTable() {
  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ height: 622, width: '100%', p: 2 }}>
        <DataGrid
          rows={rows}
          columns={columns}
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
