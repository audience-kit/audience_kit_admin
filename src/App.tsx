import * as React from 'react';
import './App.css'
import { graphql, RelayEnvironmentProvider, useLazyLoadQuery } from "react-relay";
import type { IEnvironment } from "relay-runtime";
import { RelayEnvironment } from "./RelayEnvironment";
import { useState } from "react";
import type { AppCurrentUserQuery } from "./__generated__/AppCurrentUserQuery.graphql";


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

function CurrentUser() {
    const data = useLazyLoadQuery<AppCurrentUserQuery>(CURRENT_USER_QUERY, {});

    return <>Username: {data.me?.name}</>;
}

interface Props {
    environment?: IEnvironment
}

function App({ environment = RelayEnvironment }: Props) {
    const [count, setCount] = useState(0);

    const fallback = (
       <>
           <div>
        <a href="https://vite.dev" target="_blank">
            <img src="/assets/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
            <img src="/assets/react.svg" className="logo react" alt="React logo" />
        </a>
    </div>
    <h1>Vite + React</h1>
    <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
        <p>
            Edit <code>src/App.tsx</code> and save to test HMR
        </p>
    </div>
    <p className="read-the-docs">
        Click on the Vite and React logos to learn more
    </p></>);

  return (
    <RelayEnvironmentProvider environment={environment}>
        <React.Suspense fallback={fallback}>
            <CurrentUser />
        </React.Suspense>
    </RelayEnvironmentProvider>
  )
}

export default App
