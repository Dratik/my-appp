import React, { useState } from 'react'
import { Button, TextField, FormControlLabel, Checkbox, Container, CssBaseline, Typography } from '@material-ui/core'
import useStyles from './login.css';
import Register from '../register/Register';

function Login() {
    const classes = useStyles();
    const [data, setData] = useState('');
    const [switchLogin, setSwitchLogin] = useState(true);

    const handleLogin = (e) => {
        console.log(setData({ email: e.target.name }))
        setData({ email: e.target.name })

    }
    return (
        // <Container component="main" maxWidth="xs">
        //     <CssBaseline />
        <div>
            {switchLogin ? (
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">Login</Typography>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            onChange={(e) => setData(e.target.value)}
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me" />
                    </form>
                    <Button variant="contained" color="primary" onClick={handleLogin}>LOGIN</Button>
                    <Button variant="contained" color="primary" onClick={() => setSwitchLogin(false) }>Signup</Button>

                </div>)
        : (
            <Register />
          )}

      </div>
        // </Container>
    )
}

export default Login
