import * as React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import {StrictMode} from "react";
import {RelayEnvironmentProvider} from "react-relay";
import {createEnvironment} from "./RelayEnvironment";

const environment = createEnvironment();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RelayEnvironmentProvider environment={environment}>
        <App />
      </RelayEnvironmentProvider>
  </StrictMode>,
)
