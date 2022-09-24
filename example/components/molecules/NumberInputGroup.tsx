import * as React from 'react';
import { constants } from '../../constants';
import { FieldError } from '../atoms/fields/FieldError';
import { FieldLabel } from '../atoms/fields/FieldLabel';
import { NumberField } from '../atoms/fields/NumberField';

interface NumberInputGroupProps {
  isRequired: boolean;
  error?: string;
  label: string;
  value?: number;
  onValueChange: (newValue: number) => void;
  isError: boolean;
}

export const NumberInputGroup: React.FC<NumberInputGroupProps> = ({
  error,
  label,
  value,
  onValueChange,
  isError,
  isRequired,
}) => {
  return (
    <div style={style}>
      <FieldLabel isError={isError} label={label} isRequired={isRequired}>
        <NumberField
          value={value}
          onValueChange={onValueChange}
          isError={isError}
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
