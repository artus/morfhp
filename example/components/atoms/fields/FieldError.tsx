import * as React from 'react';
import { constants } from '../../../constants';

interface FieldErrorProps {
  error: string;
  inline?: boolean;
}

export const FieldError: React.FC<FieldErrorProps> = ({
  error,
  inline = false,
}) => {
  return <div style={style(inline)}>{error}</div>;
};

const style: (inline: boolean) => React.CSSProperties = inline => ({
  color: constants.colors.red,
  fontSize: constants.sizing.fonts.error,
  marginTop: inline ? constants.sizing.margin.small : 0,
});
