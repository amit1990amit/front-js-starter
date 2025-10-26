// src/theme/muiTheme.js
import { createTheme } from '@mui/material/styles';
import { colors } from '../styles/variables';

// we can extend this later with dark mode if needed
const muiTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.primaryMain,
      dark: colors.primaryDark,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
    background: {
      default: colors.background,
      paper: colors.surface,
    },
    error: {
      main: colors.error,
    },
  },
  shape: {
    borderRadius: 8, // aligns with radius.md
  },
  components: {
    // Centralized component overrides go here if needed
    // Example (not styling yet, just showing best practice):
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       textTransform: 'none',
    //       borderRadius: '8px',
    //     },
    //   },
    // },
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '0.95rem',
    },
  },
});

export default muiTheme;
