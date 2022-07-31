import * as React from 'react';
import { constants } from '../../../constants';
import './Loader.css';

interface LoaderProps {
  size?: string
}

export const Loader: React.FC<LoaderProps> = ({
  size = constants.sizing.fonts.button
}) => {
  return <div 
  style={style(size)} 
  className='loader'
  />
}

const style: (size: string) => React.CSSProperties = (size: string) => ({
  width: size,
  height: size
});