import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core';

import './styles.css';
import { borderColor } from '@mui/system';


function Copyright(props) {
  return (
    <Typography variant="body2" color="#a9a9a9" align="center" {...props}>
      {'Copyright © '}
      <Link color="#a9a9a9" href="./">
        CryptoX
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
      // Default transform is "translate(14px, 20px) scale(1)""
      // This lines up the label with the initial cursor position in the input
      // after changing its padding-left.
      transform: "translate(34px, 20px) scale(1);"
    }
  },
  inputRoot: {
    color: "white !important",
    // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      // Default left padding is 6px
      paddingLeft: 26
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(61, 79, 124, var(--tw-border-opacity)) !important"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#94a2c7 !important"
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#1976d2 !important"
    }
  }
}));




const theme = createTheme();










export default function SignInSide() {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme} >
      <Grid container component="main" sx={{ height: '100vh' }} className={`gradient-bg-welcome`}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://kriptokoin.com/wp-content/uploads/2020/06/blockchain-ren-kriptokoin-com-.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{color:'white !important'}}>
              ورود
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }} className={classes}>
              <TextField
              className={classes}
                margin="normal"
                required
                fullWidth
                id="email"
                label="آدرس ایمیل"
                name="email"
                autoComplete="email"
                InputProps={{
                 
                  classes: {
                    root: classes.inputRoot,
               
              }}}
                autoFocus
              />
              <TextField
              
                margin="normal"
                required
                fullWidth
                name="password"
                label="پسوورد"
                type="password"
                id="password"
                autoComplete="current-password"
                InputProps={{
                 
                  classes: {
                    root: classes.inputRoot,
               
              }}}
              />
              <FormControlLabel
                className={classes.inputRoot}
                control={<Checkbox value="remember" color="primary" className={classes.inputRoot} />}
                label="من را به خاطر بسپار"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, fontWeight: 800, fontSize:'larger' }}
              >
               ورود
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    پسوردم را فراموش کرده ام
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="./signup" variant="body2">
                    {"حساب کاربری ندارید ؟ همین الان ثبت نام کنید"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}