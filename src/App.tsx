import * as React from 'react';
import './App.css'
import {
    fetchQuery,
    graphql,
    useLazyLoadQuery,
    usePreloadedQuery,
    useQueryLoader,
    UseQueryLoaderLoadQueryOptions
} from "react-relay";
import FacebookLogin, {ReactFacebookFailureResponse, ReactFacebookLoginInfo} from "react-facebook-login";
import {AppCurrentUserQuery, AppCurrentUserQuery$variables} from "./__generated__/AppCurrentUserQuery.graphql";
import {Component, useCallback, useState} from "react";
import {PreloadedQuery} from "react-relay/relay-hooks/EntryPointTypes";
import {DisposeFn} from "relay-runtime";

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
    }
`;


export default function App() {

    const [selfQueryRef, loadSelfQuery] = useQueryLoader<AppCurrentUserQuery>(CURRENT_USER_QUERY, null);

    const refresh = useCallback(() => {
        loadSelfQuery({}, {fetchPolicy: "network-only"});
    }, []);

    const responseFacebook = async (response: ReactFacebookLoginInfo | ReactFacebookFailureResponse) => {
        console.log(response);

        if (response && response.hasOwnProperty("accessToken")) {
            const infoResponse = response as ReactFacebookLoginInfo;
            let result = await fetch('http://localhost:3000/v1/token.json', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    facebook_token: infoResponse['accessToken'],
                })
            });

            let json = await result.json();
            refresh();
        }
    }

    if (selfQueryRef === undefined || selfQueryRef === null) { return <FacebookLogin appId="1168782378316790"
                                                                                                        autoLoad={true}
                                                                                                        callback={responseFacebook}
                                                                                                        textButton="Login with Facebook"/>;;}

    const data = usePreloadedQuery<AppCurrentUserQuery>(CURRENT_USER_QUERY, selfQueryRef);

    if (data !== null) {
        return <p>{data?.me?.name} - {data?.me?.id}</p>;
    }


}
