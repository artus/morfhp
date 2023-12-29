import * as React from 'react';

export const Row: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div style={style}>{children}</div>;
};

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};
