// src/theme/ThemeProviderWrapper.jsx
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import muiTheme from './muiTheme';

export default function ThemeProviderWrapper({ children }) {
  return (
    <ThemeProvider theme={muiTheme}>
      {/* CssBaseline gives us sane defaults for typography, body bg, etc. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
