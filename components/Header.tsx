import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { AppBar, Container, Toolbar, IconButton, Typography, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';

const useStyles:any = makeStyles((theme:any) => ({
    root: {
      flexGrow: 0
    },
    menuButton: {
    },
    title: {
      flexGrow: 1
    }
})); 

class Navbar extends Component {
    render() {

    return (
        <div>
        <AppBar>
        <Container>
            <Toolbar color="#026AA7">
              <IconButton id="btn-home" edge="start" color="inherit" aria-label="home" className={useStyles.menuButton}>
                <MenuIcon></MenuIcon>
              </IconButton>
              <Button id="my-boards" color="inherit" variant="contained">
                MyBoards
              </Button>
              <Button id="create-board" color="inherit" variant="contained">
                Create Board
              </Button>
              <Typography className={useStyles.title}>Crello</Typography>
              <Button id="btn-login" color="inherit" variant="outlined">Login</Button>
            </Toolbar>
        </Container>
    </AppBar>
    </div>
    );
    }
}

export default Navbar