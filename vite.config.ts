import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import relay from 'vite-plugin-relay';
import tsconfigPaths from "vite-tsconfig-paths"
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        relay,
        basicSsl({
            name: 'admin.dev.audiencekit.com',
            domains: ['*.admin.dev.audiencekit.com'],
        }),
        react({
            babel: { plugins: ['babel-plugin-macros'] },
        }),
        tsconfigPaths()
    ],
    build: {
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
    server: {
        port: 4000,
    }
})
