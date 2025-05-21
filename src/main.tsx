import { createRoot } from 'react-dom/client';
import ThemeProvider from '@/app/providers';
import '@/app/styles/index.scss';
import { App } from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
