import * as React from 'react';
import { constants } from '../../constants';
import { FieldError } from '../atoms/fields/FieldError';
import { FieldLabel } from '../atoms/fields/FieldLabel';
import { TextField } from '../atoms/fields/TextField';

interface TextInputGroupProps {
  isRequired: boolean;
  error?: string;
  label: string;
  value?: string;
  onValueChange: (newValue: string) => void;
  secureTextEntry: boolean;
  isError: boolean;
}

export const TextInputGroup: React.FC<TextInputGroupProps> = ({
  error,
  label,
  value,
  onValueChange,
  secureTextEntry,
  isError,
  isRequired,
}) => {
  return (
    <div style={style}>
      <FieldLabel isError={isError} label={label} isRequired={isRequired}>
        <TextField
          value={value}
          onValueChange={onValueChange}
          isError={isError}
          secureTextEntry={secureTextEntry}
        />
      </FieldLabel>
      {isError && <FieldError error={error!} />}
    </div>
  );
};

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: constants.sizing.margin.medium,
};
