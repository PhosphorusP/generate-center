import React from 'react';
import ReactDOM from 'react-dom/client';
import MyApp from './App.tsx';
import { App, ConfigProvider } from 'antd';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider>
      <App>
        <MyApp />
      </App>
    </ConfigProvider>
  </React.StrictMode>
);
