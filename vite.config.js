import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [
        vue(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
            manifest: {
                name: 'i love non',
                short_name: 'Lovenon',
                description: 'An app made to descripe my love to non',
                theme_color: '#ffffff', // Set theme color to white
                background_color: '#ffffff',
                display: 'standalone',
                scope: '/',
                start_url: '/',
                icons: [{
                        src: '/192x192.jpg',
                        sizes: '192x192',
                        type: 'image/jpg',
                    },
                    {
                        src: '/512x512.jpg',
                        sizes: '512x512',
                        type: 'image/jpg',
                    },
                ],
            },
        }),
    ],
});