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

function Home () {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return(
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
                    <Button color='inherit' href=''>Dove siamo?</Button>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <Button color="inherit">Login</Button>
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
                    <h2>Vuoi prenotare una consulenza ?</h2><br></br>
                    <div className='App'>
                        <img src='https://www.insidemarketing.it/wp-content/uploads/2019/02/Customer-relationship-management-620x401.jpg' /><br></br>
                    </div>
                    <Button className='App' variant='contained' href='/Consulenza'>Vuoi prenotare una consulenza ?</Button>



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
            </Box></>
  

    )
}
export default Home