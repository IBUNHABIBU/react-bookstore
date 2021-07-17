import React from 'react';
import { useDispatch } from 'react-redux';
import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import myStyle from '../stylesheet/style';
import CategoryFilter from '../components/CategoryFilter';
import { changeFilter } from '../actions/index';

const Nav = () => {
  const classes = myStyle();
  const dispatch = useDispatch();
  const handleCategoryChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" className={classes.toolbar}>
        <Toolbar>
          <Typography variant="h2" className={classes.logo}>
            BookStore CMS
          </Typography>
          <Typography edge="start" variant="h3" className={classes.title}>
            BOOKS
          </Typography>
          <CategoryFilter handleFilter={handleCategoryChange} className={classes.cat} />
          <AccountCircleIcon fontSize="large" className={classes.account} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
