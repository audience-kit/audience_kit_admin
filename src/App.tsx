import * as React from 'react';
import './App.css'
import { graphql } from 'babel-plugin-relay/macro';
import { RelayEnvironmentProvider, useLazyLoadQuery} from "react-relay";
import {useState} from "react";
import {AppCurrentUserQuery} from "./__generated__/AppCurrentUserQuery.graphql";
import FacebookLogin, {ReactFacebookFailureResponse, ReactFacebookLoginInfo} from "react-facebook-login";


const CURRENT_USER_QUERY = graphql`
    query AppCurrentUserQuery {
        me {
            id
            name
            audiences(isAdmin: true) {
                id
                name
                domains {
                    dnsName
                }
            }
        }
    }`;

function App() {

    const [count, setCount] = useState(0);

    let currentUserQuery=useLazyLoadQuery<AppCurrentUserQuery>(
        CURRENT_USER_QUERY,
        {}
    );


    const responseFacebook = (response: ReactFacebookLoginInfo | ReactFacebookFailureResponse) => {
        console.log(response);
        // Handle the response, e.g., store user data or redirect
    }

    const fallback = (
       <>
           <FacebookLogin             appId="842337999153841" // Replace with your actual App ID
                                      autoLoad={true}
                                      fields="name,email,picture"

                                      callback={responseFacebook}
                                      textButton="Login with Facebook" />
       </>);

    const result = currentUserQuery.me !== null ?
        <p>{currentUserQuery.me?.name}</p> :
        fallback;

  return result;
}

export default App
