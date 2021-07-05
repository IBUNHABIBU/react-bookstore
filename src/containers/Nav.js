import React from 'react';
import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';
import myStyle from '../stylesheet/style';

const Nav = () => {
  const classes = myStyle();

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>

        <Typography variant="h2" className={classes.title} color="primary">
          BookStore CMS
        </Typography>
        <Typography variant="subtitle1" className={classes.title} color="primary">
          BookStore CMS
        </Typography>
        <Typography variant="subtitle2" className={classes.title} color="primary">
          BookStore CMS
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
