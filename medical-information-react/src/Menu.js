import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Medical Information
        </Typography>
        <Button component={Link} to="/" color="inherit">
          Blog
        </Button>
        <Button component={Link} to="/doctor" color="inherit">
          Doctor
        </Button>
        <Button component={Link} to="/hospital" color="inherit">
          Hospital
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;