import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';

function Consulenza(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target.value);
    console.log({
      email: data.get('email'),
      consulenza: data.get('consulenza'),
      telefono: data.get('telefono')
    });

  };
  const [email, setEmail] = useState(null)
  const [consulenza, setConsulenza] = useState(null)
  const [telefono, setTelefono] = useState(null)
  const [listaConsulenza, setListaConsulenza] = useState([])

  useEffect(()=>{
    getConsulenza()
  },[])

  const getConsulenza = async () =>{
    const token = localStorage.getItem("token")
    const response = await fetch('http://localhost:3001/consulenza',
    {
      method: 'GET',
      headers : {
        "Content-Type": "application/json",
         "Authorization": "Bearer " + token
      }
    })
    const data = await response.json()
    console.log("risultati", data);
    setListaConsulenza(data)
  }
  const creazioneConsulenza = async () => {
    const token = localStorage.getItem("token")
    if(email && consulenza && telefono){
      const response = await fetch('http://localhost:3001/consulenza',
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
      },
      body: JSON.stringify({email: email, consulenza: consulenza, telefono: telefono})
      })
      const data = await response.json()
      console.log(data);
      getConsulenza()
      setEmail('')
      setConsulenza('')
      setTelefono('')
    }
    else
     {
      window.alert("Tutti i campi sono obbligatori");
     }
  }
  const deleteConsulenza = async (id) => {
    const token = localStorage.getItem("token")
    const response = await fetch("http://localhost:3001/consulenza/"+id,
        {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token 
            },
        })
    
    const data = await response.json();
    console.log(data);
const nuovaConsulenza = listaConsulenza.filter((consulenza) => consulenza.id != id);

setListaConsulenza(nuovaConsulenza);
console.log(nuovaConsulenza)

  }

    const theme = createTheme();
  return (
    <><ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Prenota una consulenza
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email "
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(event)=> setEmail(event.target.value)} />
              <TextField
                margin="normal"
                required
                fullWidth
                name="prenotazione"
                label="Descrizione"
                type="text"
                id="Pre"
                autoComplete="current-password" 
                onChange={(event)=> setConsulenza(event.target.value)}/>
                <TextField
                margin='normal'
                required
                fullWidth
                name='telefono'
                label='Telefono'
                type="text"
                id='cell'
                autoComplete='current-number' 
                onChange={(event)=> setTelefono(event.target.value)}/>
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={creazioneConsulenza}
              >
                Invia Prenotazione
              </Button>
            </Box>
          </Box>
          <div className='App'>
      <Table   aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell><b>Le tue prenotazioni</b></TableCell>
            <TableCell align="right"><b>Email</b></TableCell>
            <TableCell align="right"><b>Consulenza</b></TableCell>
            <TableCell align="right"><b>Telefono</b></TableCell>
          </TableRow>
        </TableHead>
       
          {listaConsulenza.map((item, index) => (
            
            <TableRow  
            key={index.id}           
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Prenotazioni
              </TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.consulenza}</TableCell>
              <TableCell align="right">{item.telefono}</TableCell>
              <TableCell align="right"><Button variant="contained" color="error" onClick={() => deleteConsulenza(item.id)}>Cancella</Button></TableCell>
             
            </TableRow>
          ))} 
        
      </Table>
      </div>
  
          <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" path='/Home'>
        CRM consulenza
      </Link>{'/Home '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
        </Container>
      </ThemeProvider></>
  );
}
export default Consulenza