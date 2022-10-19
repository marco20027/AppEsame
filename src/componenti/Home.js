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

function Home() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
        try {

            const response = await fetch("http://localhost:3001/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            })
            const data = await response.json();
            if (data.token) {
                localStorage.setItem('token', data.token)
                console.log(data.token)
                navigate('/principale')
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
                    <Button color="inherit" onClick={handleOpen}>Login</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                LOGIN
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <TextField id="outlined-basic" label="Outlined" variant="email" onChange={takeEmail(event)} /><br></br>
                            <TextField id="outlined-basic" label="Outlined" variant="password" onChanhe={takePassword(event)} /><br></br>
                            <Button variant='outlined' onClick={login} >Login</Button>
                            </Typography>
                        </Box>
                    </Modal>
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