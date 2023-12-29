import * as React from 'react';

export const Column: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div style={style}>{children}</div>;
};

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};
