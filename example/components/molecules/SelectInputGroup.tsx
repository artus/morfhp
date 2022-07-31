import * as React from "react";
import { SelectInputItem } from '../../../.';
import { constants } from "../../constants";
import { FieldError } from "../atoms/fields/FieldError";
import { FieldLabel } from '../atoms/fields/FieldLabel';
import { SelectField } from "../atoms/fields/SelectField";

interface SelectInputGroupProps {
  isRequired: boolean,
  error?: string,
  label: string,
  onValueChange: (newValue: SelectInputItem<string>) => void,
  isError: boolean,
  items: SelectInputItem<string>[],
  value: SelectInputItem<string>
}

export const SelectInputGroup: React.FC<SelectInputGroupProps> = ({
  isRequired,
  error,
  label,
  value,
  onValueChange,
  isError,
  items
}) => {

  return <div style={style}>
    <FieldLabel
      isRequired={isRequired}
      label={label}
      isError={isError}
    >
      <SelectField
        items={items}
        value={value}
        onValueChange={onValueChange}
      />
    </FieldLabel>
    {isError && <FieldError error={error!} />}
  </div>
}

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  marginBottom: constants.sizing.margin.medium
};