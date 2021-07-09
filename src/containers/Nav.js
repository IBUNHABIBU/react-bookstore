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
      <AppBar position="static" color="transparent">
        <Toolbar>
          {/* <div> */}
          <Typography variant="h2" className={classes.logo} color="primary">
            BookStore CMS
          </Typography>
          <Typography variant="h3" className={classes.title} color="primary">
            BOOKS
          </Typography>
          <CategoryFilter handleFilter={handleCategoryChange} />
          {/* </div> */}
          <AccountCircleIcon style={{ color: '#0290ff' }} />
          {/* <AccountCircle /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
