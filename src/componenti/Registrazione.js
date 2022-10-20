import React from 'react'
import Box from '@mui/material/Box'
import  TextField  from '@mui/material/TextField'
import  Button  from '@mui/material/Button'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {useState} from 'react'
import  {useNavigate}  from 'react-router-dom';


function Registrazione () {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confermaPassword, setConfermaPassword] = useState(null)
    const takeEmail = (event) => {
        setEmail(event.target.value)
    }
    const takePassword = (event) => {
        setPassword(event.target.value)
    }
    const takeConfermaPassword = (event) => {
        setConfermaPassword(event.target.value)
    }
     const navigate = useNavigate();
    const registrazione = async () => {
        const token = localStorage.getItem("token")
        if(email && password && confermaPassword){}
        try {

            const response = await fetch("http://localhost:3001/registrazione", {
                 method: 'POST',
                 headers: {
                     "Content-Type": "application/json",
                     "Authorization": "Bearer " + token
                 },
                 body: JSON.stringify({ email, password, confermaPassword })
             })
             const data = await response.json()
             setEmail('')
             setPassword('')
             setConfermaPassword('')
             console.log(response)
            
         } catch (err) {

        
    }
     //navigate('/Consulenza')
        
        
    }
    return (
        <>
         <Box
                      sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      minHeight: '100vh',
                      }}
                      >
                        <h1>Registrati !</h1>
                       
                    <TextField id="outlined-basic" type ='email' label="Email" variant="outlined" onChange={(event)=>setEmail(event)} /><br></br>
                    <TextField id="outlined-basic" type ='password' label="Password" variant="outlined" onChange={(event)=>setPassword(event)} /><br></br>
                    <TextField id="outlined-basic" type ='password' label="Conferma Password" variant="outlined" onChange={(event)=>setConfermaPassword(event)} /><br></br>
                    <Button variant='contained'  onClick={registrazione}>Login</Button><br></br></Box>
                    <Alert severity="success">utente registrato con successo </Alert>

        </>

    )
}
export default Registrazione