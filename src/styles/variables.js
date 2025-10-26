// src/styles/variables.js

// spacing scale (in px) for consistent paddings/margins
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

// color palette foundation
export const colors = {
  background: '#f9f9f9',
  surface: '#ffffff',
  textPrimary: '#222222',
  textSecondary: '#555555',
  border: '#e0e0e0',
  primaryMain: '#1976d2',   // matches MUI default primary
  primaryDark: '#115293',
  error: '#d32f2f',
};

// border radius tokens
export const radius = {
  sm: '4px',
  md: '8px',
  lg: '16px',
};

// box-shadow, zIndex, etc.
export const elevation = {
  card: '0 2px 8px rgba(0,0,0,0.06)',
  popover: '0 8px 24px rgba(0,0,0,0.12)',
};

// breakpoints for responsive logic (same idea as MUI breakpoints)
export const breakpoints = {
  mobile: 0,
  tablet: 600,
  desktop: 900,
  wide: 1200,
};
