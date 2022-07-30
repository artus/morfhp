import * as React from "react";
import { constants } from "../../constants";
import { FieldError } from "../atoms/FieldError";
import { FieldLabel } from "../atoms/FieldLabel";
import { TextField } from "../atoms/TextField";

interface TextInputGroupProps {
  error?: string,
  label: string,
  value?: string,
  onValueChange: (newValue: string) => void,
  secureTextEntry: boolean
}

export const TextInputGroup: React.FC<TextInputGroupProps> = ({
  error,
  label,
  value,
  onValueChange,
  secureTextEntry,
}) => {

  return <div style={style}>
    <FieldLabel
      isError={!!error}
      label={label}
    >
      <TextField
        value={value}
        onValueChange={onValueChange}
        isError={!!error}
        secureTextEntry={secureTextEntry}
      />
    </FieldLabel>
    {!!error && <FieldError error={error} />}
  </div>
}

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  marginBottom: constants.sizing.margin.medium
}