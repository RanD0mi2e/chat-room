import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import './app.module.css'
import { ThemeProvider } from './Contexts/ThemeContext';

const root = createRoot(document.getElementById('app'));
root.render(<React.StrictMode>
    {/* 主题色context */}
    <ThemeProvider>
        <RouterProvider router={router} />
    </ThemeProvider>
</React.StrictMode>);