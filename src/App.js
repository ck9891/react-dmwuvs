import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SuperCard from './components/SuperCard';
import TDAccordion from './components/TDAccordion';
import TDTable from './components/TDTable';

export default function App() {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ margin: '0 auto', background: 'blue', padding: '7.5vw'}} >
      <Typography
        variant="h1"
        component="div"
        gutterBottom
        sx={{ marginBottom: '3rem' }}
      >
        MUI Test/Stackblitz offline test
      </Typography>
      <SuperCard />
      <TDAccordion sx={{ marginBottom: '3rem' }} />
      <TDTable />
      </Box>
    </Box>
  );
}
