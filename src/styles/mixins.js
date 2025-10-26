// src/styles/mixins.js

export const flexCenter = () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const cardBase = (radiusValue, shadowValue) => ({
  borderRadius: radiusValue,
  boxShadow: shadowValue,
  backgroundColor: '#fff',
  border: '1px solid rgba(0,0,0,0.05)',
  padding: 16,
});
