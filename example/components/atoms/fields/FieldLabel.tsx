import * as React from 'react';
import { constants } from '../../../constants';

interface FieldLabelProps {
  label: string;
  isError: boolean;
  isRequired: boolean;
  children: React.ReactNode;
  inline?: boolean;
}

export const FieldLabel: React.FC<FieldLabelProps> = ({
  label,
  isError,
  isRequired,
  children,
  inline = false,
}) => {
  return (
    <label style={style(isError, inline)}>
      {inline && <span style={inlineChildrenStyle}>{children}</span>}
      {isRequired ? (
        <span>
          {label}
          <span style={isRequiredStyle}>*</span>
        </span>
      ) : (
        label
      )}
      {!inline && children}
    </label>
  );
};

const style: (isError: boolean, inline: boolean) => React.CSSProperties = (
  isError,
  inline
) => ({
  color: constants.colors[isError ? 'red' : 'darkgray'],
  display: 'flex',
  flexDirection: inline ? 'row' : 'column',
  alignItems: inline ? 'center' : 'flex-start',
  fontSize: constants.sizing.fonts.label,
});

const isRequiredStyle: React.CSSProperties = {
  color: constants.colors.red,
  marginLeft: constants.sizing.padding.extraSmall,
};

const inlineChildrenStyle: React.CSSProperties = {
  marginRight: constants.sizing.margin.extraSmall,
};
