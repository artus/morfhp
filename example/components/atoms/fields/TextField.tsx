import * as React from "react";
import { constants } from "../../../constants";

interface TextFieldProps {
  value?: string,
  onValueChange: (newValue: string) => void,
  isError: boolean,
  secureTextEntry: boolean
}

export const TextField: React.FC<TextFieldProps> = ({
  value,
  onValueChange,
  isError,
  secureTextEntry
}) => {
  return <input
    style={style(isError)}
    type={secureTextEntry ? "password" : "text"}
    value={value}
    onChange={(e) => onValueChange(e.target.value)}
  />
}

const style: (isError: boolean) => React.CSSProperties = (isError: boolean) => ({
  width: "100%",
  border: 0,
  borderBottom: "1px solid black",
  outlineWidth: 0,
  outline: "none",
  borderBottomColor: constants.colors[isError ? "red" : "darkgray"],
  padding: constants.sizing.padding.small,
  marginBottom: constants.sizing.margin.small
});