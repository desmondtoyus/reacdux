import React, {Component} from "react";
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import CircularProgress from '@material-ui/core/CircularProgress';
import { signInModal, signUpModal, closeUserModal,  changeInput} from "../../redux/actions/modal.action";
import{signIn, signUp} from "../../redux/actions/user.action"
import green from '@material-ui/core/colors/green';
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
    layout: {
      width: "auto",
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: "auto",
        marginRight: "auto"
      }
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

class Login extends Component{
    handleOpen = (e) => {
        e.preventDefault();
        this.props.signInModal(); 
      };
    

      handleClose = (e) => {
        e.preventDefault();
        this.props.closeUserModal();
      };
    

      handleSignUp = (e)=>{
        e.preventDefault();
        this.props.signUpModal(); 
      }

      handleChange = (event) => {
        console.log(event.currentTarget.name, '=' , event.currentTarget.value)
        this.props.changeInput({ prop: event.currentTarget.name, value: event.currentTarget.value });
      }

      handleSubmit = (e)=>{
        e.preventDefault();
        const { email, password, showSignUpModal} = this.props
        if (!showSignUpModal) {
        e.preventDefault();
        this.props.changeInput({ prop: 'loader', value: true });
        this.props.signIn({email, password})
        } else {
          e.preventDefault();
          let payload ={
            email,
            password,
            role:1
          }
          this.props.signUp(payload); 
        }
        
      }


    render(){
        const{email, password, loader, showLoginModal, classes } = this.props;
        return(
<Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.showLoginModal}
          onClose={this.handleClose}
          disableEnforceFocus={true}
        >
          <div className={classes.paper}>
                <Paper className={classes.paperModal}>
                <span style={{marginLeft:'100%', marginRight:"auto", marginTop:0, cursor:'pointer'}} onClick={this.handleClose}>X</span>
                  <Avatar className={classes.avatar}>
                    <LockIcon />
                  </Avatar>
                  <Typography variant="headline">{!this.props.showSignUpModal ? 'Sign in' : 'Sign up'}</Typography>
                  <form className={classes.form}>
                  {this.props.showSignUpModal ? <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="email">Full Name</InputLabel>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        autoFocus
                        onChange={this.handleChange}
                      /> </FormControl>:null}

                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="email">Email Address</InputLabel>
                      <Input
                        id="email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={this.handleChange}
                      />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <Input
                        name="password"
                        value ={password}
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={this.handleChange}
                      />
                    </FormControl>
                     {!this.props.showSignUpModal ? <Button
                      type="submit"
                      fullWidth
                      variant="raised"
                      color="primary"
                      className={classes.submit}
                      onClick={this.handleSubmit}
                    >
                      {loader && <CircularProgress  className={classes.fabProgress} />}

                      Sign in
                    </Button>:null}
                    <Button
                      type="submit"
                      fullWidth
                      variant="raised"
                      color="default"
                      className={classes.submit}
                      onClick={(this.props.showSignUpModal)?(this.handleSubmit):(this.handleSignUp)}
                    >
                      Sign Up
                    </Button>
                  </form>
                </Paper>
           
          </div>
        </Modal>
        )
    }
}
const mapStateToProps = state => {
    const {
      showSignUpModal,
      email,
      password,
      name,
      showLoginModal
      } = state.modals
      const {loader, loginSuccess  } = state.users
    return { 
      showSignUpModal,
      email,
      password,
      name,
      showLoginModal,
      loader, loginSuccess };
  };


export default compose(
    withStyles(styles),
    connect(mapStateToProps, { changeInput, signInModal, signUpModal, closeUserModal, signUp, signIn })
  )(Login);