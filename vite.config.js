import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src', // Указать, что root директория — src
    build: {
        outDir: '../dist', // Папка для сборки
        rollupOptions: {
            input: {
                main: 'src/index.html', // Главная страница
                products: 'src/pages/products.html', // страница products
                about: 'src/pages/about.html', // страница about
                contacts: 'src/pages/contacts.html', // страница contacts
            },
        },
    },
    server: {

        open: '/index.html', // Указать путь для открытия в браузере
    },
        publicDir: 'public'  // Указываем папку для статических ресурсов
});
