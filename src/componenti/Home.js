import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import {useState} from 'react'
import  {useNavigate}  from 'react-router-dom';

function Home() {

   
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const takeEmail = (event) => {
        setEmail(event.target.value)
    }
    const takePassword = (event) => {
        setPassword(event.target.value)
    }
    const navigate = useNavigate();
    const login = async () => {
        if(email == null){
            alert('inserire email')
            return
        }else if(password == null){
            alert('inserire password')
            return
        }
        try {

            const response = await fetch("http://localhost:3001/login", {
                 method: 'POST',
                 headers: {
                     "Content-Type": "application/json"
                 },
                 body: JSON.stringify({ email, password })
             })
             console.log(response)
             const data = await response.json();
             console.log(data)
             if (data.token) {
                 localStorage.setItem('token',data.token)
                 console.log(data.token)
                 navigate('/Consulenza')
             } else {
                 window.alert("Email o password errata");
             }

         } catch (err) {

        }
        
        
    }

    return (
        <><Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Button color='inherit' href='/Consulenza'>Vuoi una consulenza ?</Button>
                    <Button color='inherit' href='/Chisiamo'>Chi siamo ?</Button>
                    <Button color='inherit' href='/Dovesiamo'>Dove siamo?</Button>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
               
                </Toolbar>
            </AppBar>
        </Box><Box
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
                    <img  src='https://cdn.dribbble.com/users/1266491/screenshots/3671609/media/9eac6f4eb377d901d3c63b945eab92d1.png?compress=1&resize=400x300&vertical=top'/>

                    <Typography>
                        
                        <h2>Effettua il login per accedere alle tue prenotazioni</h2>
                    </Typography><br></br>
                    <Box
                      sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      minHeight: '100vh',
                      }}
                      >
                       
                    <TextField id="outlined-basic" type ='email' label="Email" variant="outlined" onChange={(event)=>takeEmail(event)} /><br></br>
                    <TextField id="outlined-basic" type ='password' label="Password" variant="outlined" onChange={(event)=>takePassword(event)} /><br></br>
                    <Button variant='contained' href='/Consulenza' onClick={login}>Login</Button><br></br>
                    


                    <Typography variant="body1"></Typography>
                    <div className='App'>
                        <img src='https://www.weclapp.it/wp-content/uploads/sites/1/2021/02/sistema-crm.png' />
                    </div></Box>


                   
                    




                </Container><br></br>
                <Box
                    component="footer"
                    sx={{
                        py: 3,
                        px: 2,
                        mt: 'auto',
                        backgroundColor: (theme) => theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[800],
                    }}
                >

                    <Container maxWidth="sm">
                        <Typography variant="body2" color="text.secondary">
                            {'Copyright © '}
                            <Link color="inherit" href="http://localhost:3000/Home">
                                CRM
                            </Link>{' '}
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography>

                    </Container>
                </Box>
            </Box></>


    )
}
export default Home