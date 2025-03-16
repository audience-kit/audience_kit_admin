import * as React from 'react';
import './App.css'
import { graphql } from 'babel-plugin-relay/macro';
import { loadQuery, RelayEnvironmentProvider} from "react-relay";
import {RelayEnvironment} from "./RelayEnvironment";
import {useState} from "react";


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
  const environment = RelayEnvironment;
    const [count, setCount] = useState(0);

    const currentUserQuery = loadQuery(
        environment,
        CURRENT_USER_QUERY,
        {}
    );

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
            <>Username: {currentUserQuery.name}</>
        </React.Suspense>
    </RelayEnvironmentProvider>
  )
}

export default App
