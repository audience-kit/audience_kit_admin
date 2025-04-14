import * as React from 'react';
import './index.css'
import {RelayEnvironmentProvider} from "react-relay";
import {createEnvironment} from "./RelayEnvironment";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App";
import {ChakraProvider, defaultSystem} from "@chakra-ui/react";


const environment = createEnvironment();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider value={defaultSystem}>
            <RelayEnvironmentProvider environment={environment}>
                <App />
            </RelayEnvironmentProvider>
        </ChakraProvider>
    </StrictMode>,
)
