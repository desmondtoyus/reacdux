import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {signInModal, signUpModal, closeUserModal} from "../../redux/actions/modal.action";
import{ logOut, verifyUsers} from "../../redux/actions/user.action"
import green from '@material-ui/core/colors/green';
// import createHistory from 'history/createBrowserHistory'
 
// const history = createHistory()


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 0,
    margin: '10px'
  },
  flexA: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

  paperModal: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    textAlign:"center",
    margin:"auto"
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin:"auto",
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class Header extends React.Component {

  //HOLD USER LOGIN DATA EVEN WHEN PAGE IS REFRESHED
componentDidMount(){
  if (localStorage.getItem('jwtToken')) {
    let token =  localStorage.getItem('jwtToken')
  const tokenParts = token.split(' ');
  const encodedPayload =  tokenParts[1];
 let user={
   token:encodedPayload
 }
  this.props.verifyUsers(user);
    
  } else {
    console.log('NOT LOGGED IN');
  }
  
}

componentWillReceiveProps(nextProps){
if (this.props.loginSuccess !== nextProps.loginSuccess){
  if (localStorage.getItem('jwtToken')) {
    let token =  localStorage.getItem('jwtToken')
  const tokenParts = token.split(' ');
  const encodedPayload =  tokenParts[1];
 let user={
   token:encodedPayload
 }
  this.props.verifyUsers(user);
    
  } else {
    console.log('NOT LOGGED IN');
  }
}
}

  handleOpen = (e) => {
    e.preventDefault();
    this.props.signInModal(); 
  };

  handleLogOut = (e) => {
    e.preventDefault();
    this.props.logOut(); 
  };

  

  handleClose = (e) => {
    e.preventDefault();
    this.props.closeUserModal();
  };

  handleSignUp = (e)=>{
    e.preventDefault();
    this.props.signUpModal(); 
  }


  render() {
    const { classes } = this.props;
    const{email, password, loader} = this.props;
    return (
      <div>
      <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              <Link to='/' style={{color:'white'}}>Home </Link>
            </Typography>
            <Typography variant="title" color="inherit" className={classes.flexA}>
              <Link to='about' style={{color:'white'}}>About </Link>
            </Typography>
            <Button color="inherit" onClick={this.handleOpen}>Login</Button>
            <Button color="inherit" onClick={this.handleLogOut}>Log Out</Button>
          </Toolbar>
        </AppBar>

      </div>
    );
  }
}



const mapStateToProps = state => {
  const {   user, 
    tabIndex,
    isSignUp,
    modalOpen,
    email,
    password,
    name,
    loader} = state.users

  return { user, 
    tabIndex,
    isSignUp,
    modalOpen,
    email,
    password,
    name,
    loader };
};



export default compose(
  withStyles(styles),
  connect(mapStateToProps, {  signInModal, signUpModal, logOut, closeUserModal, verifyUsers})
)(Header);