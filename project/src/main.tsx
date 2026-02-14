import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import 'flag-icons/css/flag-icons.min.css';
import App from './App.tsx';
import './index.css';
import i18n, { initPromise } from './i18n';

// Wait for i18n to initialize before rendering
initPromise.then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<div style={{background: '#000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00D084', fontSize: '24px'}}>Loading...</div>}>
          <App />
        </Suspense>
      </I18nextProvider>
    </StrictMode>
  );
});