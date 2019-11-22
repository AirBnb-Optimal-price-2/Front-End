import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';
 
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function Onboarding (props){
  const classes = useStyles();
  
    return(
<div className="header">
<div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
      
          <Typography variant="h6" className={classes.title}>
          AirBnB Optimal Price
          </Typography>
          <Link href="www.google.com"  color="inherit">
          <Button color="inherit"> Home</Button></Link>
          <Button onClick={() => props.history.push("/dashBoard")} color="inherit">Dashboard</Button>
        </Toolbar>
      </AppBar>
    </div>
      </div>
    );
    
}