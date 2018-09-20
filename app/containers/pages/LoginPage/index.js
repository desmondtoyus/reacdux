/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React, { Component } from 'react';



class LoginPage extends Component{
    // componentDidMount(){
    //     if (localStorage.getItem('jwtToken')) {
    //       let token =  localStorage.getItem('jwtToken')
    //     const tokenParts = token.split(' ');
    //     const encodedPayload =  tokenParts[1];
    //    let user={
    //      token:encodedPayload
    //    }
    //     this.props.verifyUsers(user);
          
    //     } else {
    //       console.log('NOT LOGGED IN');
    //     }
        
    //   }

    render(){
        return(
        <div>
         <Helmet>
          <title>Dashboard Page</title>
          <meta name="description" content="Authoried user page" />
        </Helmet>
        <h1> YOU ARE SUCCESSFULLY LOGGED IN</h1>
       </div>
        )
    }
}

export default LoginPage;
