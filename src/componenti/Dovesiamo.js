import React from "react"
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {  ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar } from "@mui/material";



function Dovesiamo () {
    const theme = createTheme();
    const milano = {
        indirizzo : 'Via torino 1',
        CAP : '20121',
        Piva : '03660670963'
    }
    const roma = {
        indirizzo : 'Via Milano 7',
        CAP : '00153',
        Piva: '03660670963'
    }
    const napoli = {
        indirizzo: 'via roma 3',
        CAP: '80132',
        Piva: '03660670963'
    }

    return(
         <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Dove Siamo 
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
            <Button color="inherit" href='http://localhost:3000/Home'>Home</Button>

          </Toolbar>
        </AppBar>
        
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    CRM
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    CONSULENZA: CRM è analisi del business. Soluzioni digitali per i tuoi processi.
                    Organizzazione omnicanale in funzione della relazione con i tuoi clienti
                </Typography>
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button variant="contained" href="http://localhost:3000/consulenza">Prenota la tua consulenza</Button>
                </Stack>
            </Container>
        <Container sx={{ py: 8 }} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    <Grid xs={12} sm={6} md={4}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                                component="img"
                                sx={{
                                    // 16:9
                                    pt: '56.25%',
                                }}
                                image ='https://leonardo.it/wp-content/uploads/2022/07/SH_panoramica_milano-1024x683.jpg'
                                alt="random" />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    SEDE MILANO
                                </Typography>
                                <Typography>
                                 <p> Indirizzo : {milano.indirizzo}</p><br></br>
                                 <p>CAP : {milano.CAP}</p><br></br>
                                 <p>P. Iva : {milano.Piva}</p>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href="http://localhost:3000/Chisiamo">Contattaci</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid xs={12} sm={6} md={4}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                                component="img"
                                sx={{
                                    // 16:9
                                    pt: '56.25%',
                                }}
                                image="https://media.istockphoto.com/photos/colosseum-in-rome-at-dusk-italy-picture-id632216514"
                                alt="random" />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    SEDE ROMA
                                </Typography>
                                <Typography>
                                    <p>Indirizzo : {roma.indirizzo}</p><br></br>
                                    <p>CAP : {roma.CAP}</p><br></br>
                                    <p>P. Iva : {roma.Piva}</p>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href="http://localhost/Chisiamo">Contattaci</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid xs={12} sm={6} md={4}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                                component="img"
                                sx={{
                                    // 16:9
                                    pt: '56.25%',
                                }}
                                image="https://ilfotografo.it/wp-content/uploads/2021/11/golfo_di_napoli_2210092353-1024x683.jpg"
                                alt="random" />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    SEDE NAPOLI
                                </Typography>
                                <Typography>
                                    <p>Indirizzo : {napoli.indirizzo}</p><br></br>
                                    <p>CAP : {napoli.CAP}</p><br></br>
                                    <p>P. Iva : {napoli.Piva}</p>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href="http://localhost/Chisiamo">Contattaci</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    
                </Grid>
            </Container>
            </ThemeProvider>

    )
}
export default Dovesiamo