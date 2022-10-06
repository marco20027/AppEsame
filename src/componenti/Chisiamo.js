import React from "react";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  const theme = createTheme();
  
  function Chisiamo() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Consulenza CRM
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Consulenza CRM
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
                <Button variant="contained" href="http://localhost:3001/consulenza">Prenota la tua consulenza</Button>
              </Stack>
            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
                <Grid  xs={12} sm={6} md={4}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        // 16:9
                        pt: '56.25%',
                      }}
                      image="https://play-lh.googleusercontent.com/E1vbfVVAv5VRjK7g1KZ6s4HCdbUrCg-dzgWs-T-lgw_M6U3tXqswRYRyWi8Px89nfj5P"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        ZOHO CRM
                      </Typography>
                      <Typography>
                      Zoho CRM offre il meglio delle soluzioni polivalenti e verticali in un'unica posizione. 
                      Con Canvas, ti offriamo la possibilità di riprogettare l'interfaccia utente del CRM e creare un caso personalizzato che soddisfi le tue preferenze e i tuoi requisiti specifici. 
                      Puoi eseguire questa operazione senza scrivere una sola riga di codice
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" href="https://www.zoho.com/it/crm/">Per saperne di più</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid  xs={12} sm={6} md={4}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        // 16:9
                        pt: '56.25%',
                      }}
                      image="https://pbs.twimg.com/profile_images/1478372459086680064/4UEGm3zX_400x400.jpg"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        ZOHO CLIQ
                      </Typography>
                      <Typography>
                      Zoho Cliq semplifica la comunicazione del tuo team con conversazioni organizzate e informazioni facili da trovare, e ti collega agli strumenti che ami.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" href="https://www.zoho.com/it/cliq/">Per saperne di più</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid  xs={12} sm={6} md={4}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        // 16:9
                        pt: '56.25%',
                      }}
                      image="https://d3cfmt5dlbf1me.cloudfront.net/app_ecosystem/apps/logos/000/000/209/original/zohodesk-icon_vch3l3.png?1648034365"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        ZOHO DESK
                      </Typography>
                      <Typography>
                      Zoho Desk aiuta a migliorare la produttività degli agenti, accrescere la soddisfazione dei clienti e costruire fidelizzazione. 
                      Trasforma l'assistenza clienti con il primo help desk basato sul contesto del settore.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" href="https://www.zoho.com/it/desk/">Per saperne di più</Button>
                    </CardActions>
                  </Card>
                </Grid>
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
          <Copyright />
        </Box>
        {/* End footer */}
      </ThemeProvider>
    );
  }
export default Chisiamo