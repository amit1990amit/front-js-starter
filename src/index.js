// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import store from './store/store';

// global styles for app shell (reset, base typography, utilities)
import './styles/global.css';

import ThemeProviderWrapper from './theme/ThemeProviderWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();

root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ThemeProviderWrapper>
        <App />
      </ThemeProviderWrapper>
    </QueryClientProvider>
  </Provider>
);
