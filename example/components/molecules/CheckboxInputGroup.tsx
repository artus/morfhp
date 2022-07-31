import * as React from "react";
import { constants } from "../../constants";
import { CheckboxField } from "../atoms/fields/CheckboxField";
import { FieldError } from "../atoms/fields/FieldError";
import { FieldLabel } from "../atoms/fields/FieldLabel";

interface CheckboxInputGroupProps {
  isRequired: boolean,
  error?: string,
  label: string,
  value?: boolean,
  onValueChange: (newValue: boolean) => void,
  isError: boolean
}

export const CheckboxInputGroup: React.FC<CheckboxInputGroupProps> = ({
  isRequired,
  error,
  label,
  value,
  onValueChange,
  isError
}) => {
  return <div style={style}>
    <FieldLabel
      isError={isError}
      label={label}
      isRequired={isRequired}
      inline={true}
    >
      <CheckboxField
        value={value}
        onValueChange={onValueChange}
      />
    </FieldLabel>
    {isError && <FieldError inline={true} error={error!} />}
  </div>
}

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  marginBottom: constants.sizing.margin.medium
}