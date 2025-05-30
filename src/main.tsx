import { createRoot } from 'react-dom/client';
import AppThemeProvider from '@/app/providers';
import { App } from './app/App.tsx';
import '@/app/styles/index.scss';

createRoot(document.getElementById('root')!).render(
  <AppThemeProvider>
    <App />
  </AppThemeProvider>,
);
