import './App.css';
import { Routes, Route } from "react-router-dom";
import Consulenza from './componenti/Consulenza';
import Chisiamo from './componenti/Chisiamo'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Button } from '@mui/material';

function App() {
  return (
    <><div>
        <Routes>
          <Route path="/consulenza" element={<Consulenza />}  />
          <Route path="/Chisiamo" element={<Chisiamo />}  />
        </Routes>
        <div>
        


    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Consulenza CRM
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {"Che cos'è il CRM ?"}
          {" Customer Relationship Management (in sigla CRM) è il processo con cui un'azienda o un'altra organizzazione amministra le sue interazioni con i clienti, in genere utilizzando l'analisi dei dati per studiare grandi quantità di informazioni."}
        </Typography><br></br>
        <Typography variant="body1"></Typography>
        <div className='App'>
          <img src='https://www.weclapp.it/wp-content/uploads/sites/1/2021/02/sistema-crm.png' />
        </div>
      </Container><br></br>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >

        <Container maxWidth="sm">
          <Typography variant="body1">
            <img src=''></img>
          </Typography>
          <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>

        </Container>
      </Box>
    </Box>
        </div>

      </div></>
  );
}

export default App;
