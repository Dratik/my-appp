import React from 'react';
import { AppBar, Toolbar, Button, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './appmenu.css';


const AppMenu = () => {
    const classes = useStyles();

    const handleLogin = (e) => {
        e.preventDefault();
        
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" className={classes.title}>
                        Title
                    </Typography>
                    <Button color="inherit" onClick={handleLogin}>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default AppMenu;