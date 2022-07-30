import * as React from "react";
import { constants } from "../../constants";

interface FieldLabelProps {
  label: string,
  isError: boolean,
  children: React.ReactNode
}

export const FieldLabel: React.FC<FieldLabelProps> = ({
  label,
  isError,
  children
}) => {
  return <label
    style={style(isError)}
  >
    {label}
    {children}
  </label>
}

const style: (isError: boolean) => React.CSSProperties = (isError: boolean) => ({
  color: constants.colors[isError ? "red" : "darkgray"],
  display: "flex",
  flexDirection: "column",
  fontSize: constants.sizing.fonts.label
});