import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import {verifyUsers } from "../../../redux/actions/user.action";


class LoginPage extends Component{
  async componentWillMount(){
        if (localStorage.getItem('jwtToken')) {
          let token =  localStorage.getItem('jwtToken')
        const tokenParts = token.split(' ');
        const encodedPayload =  tokenParts[1];
       let user={
         token:encodedPayload
       }
       console.log('GOT HERE')
       let success = await this.props.verifyUsers(user);      
       if (!success) {
        this.props.history.push('/');
       }
        } else {
          this.props.history.push('/');
        }
    }
    


    render(){
        return(
        <div>
         <Helmet>
          <title>Rating.Ng::Dashboard Page</title>
          <meta name="description" content="Authoried user page" />
        </Helmet>
        <h1> YOU ARE SUCCESSFULLY LOGGED IN</h1>
       </div>
        )
    }
}
const mapStateToProps = state => {
    const {   user, loginSuccess } = state.users
  
    return { user, loginSuccess };
  };
export default connect(mapStateToProps, { verifyUsers })(LoginPage);