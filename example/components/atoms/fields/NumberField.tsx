import * as React from 'react';
import { constants } from '../../../constants';

interface NumberFieldProps {
  value?: number;
  onValueChange: (newValue: number) => void;
  isError: boolean;
}

export const NumberField: React.FC<NumberFieldProps> = ({
  value,
  onValueChange,
  isError,
}) => {
  return (
    <input
      style={style(isError)}
      value={value}
      type={'number'}
      onChange={e => onValueChange(e.target.valueAsNumber)}
    />
  );
};

const style: (isError: boolean) => React.CSSProperties = isError => ({
  width: '100%',
  border: 0,
  borderBottom: '1px solid black',
  outlineWidth: 0,
  outline: 'none',
  borderBottomColor: constants.colors[isError ? 'red' : 'darkgray'],
  padding: constants.sizing.padding.small,
  marginBottom: constants.sizing.margin.small,
});
