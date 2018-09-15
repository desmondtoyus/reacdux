import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Paper from "@material-ui/core/Paper";
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from "@material-ui/core/Avatar";

import Modal from "@material-ui/core/Modal";

<Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.modalOpen}
          onClose={this.handleClose}
          disableEnforceFocus={true}
        >
          <div className={classes.paper}>
          
          
                <Paper className={classes.paperModal}>
                <span style={{marginLeft:'100%', marginRight:"auto", marginTop:0, cursor:'pointer'}} onClick={this.handleClose}>X</span>
                  <Avatar className={classes.avatar}>
                    <LockIcon />
                  </Avatar>
                  <Typography variant="headline">{!this.props.isSignUp ? 'Sign in' : 'Sign up'}</Typography>
                  <form className={classes.form}>
                  {this.props.isSignUp ? <FormControl margin="normal" required fullWidth>
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
                                      {!this.props.isSignUp ? <Button
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
                      onClick={this.handleSignUp}
                    >
                      Sign Up
                    </Button>
                  </form>
                </Paper>
           
          </div>
        </Modal>
        