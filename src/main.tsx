import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppWrapper } from './AppWrapper.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
