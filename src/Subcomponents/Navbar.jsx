import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
import './style.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#000',
    },
    neutral: {
      main: '#64748B',
    },
  },
});


const Navbar = () => {
    
  return (
    <div>
        <ThemeProvider theme={theme}>
        <AppBar position='static' component="nav" color='primary'>
            <Toolbar>
              <Typography>Ulpian Barbershop</Typography>
            </Toolbar>
      </AppBar>
        </ThemeProvider>
    </div>
  )
}

export default Navbar

