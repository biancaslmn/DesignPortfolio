import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import SideBar from './sidebar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Background from './profileImage.jpg';


const styles = {
  root: {
    flexGrow: 1,
     backgroundColor: "transparent",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: "#AA744B",
  },
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
      
        <AppBar position="static" style={{ backgroundColor: "transparent" }}>
          <Toolbar style={{paddingLeft: "0px"}}>
          <SideBar />
            <IconButton className={classes.menuButton} color="#c3aead" aria-label="Menu" style={{ width: "20px!important" }}>
            </IconButton>
           <Typography variant="h6" color="#c3aead" className={classes.grow} style={{ color: "#c3aead" }}>
          
            </Typography>
            {auth && (
              <div>
              
             <h1 style={{ color: "#c3aead" }} style={{ fontSize: "1opx"}}>Bianca Salomon</h1>
                
              </div>
            )}
          </Toolbar>
        </AppBar>
      
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
