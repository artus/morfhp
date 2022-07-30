import * as React from "react";
import { constants } from "../../constants";

interface FieldErrorProps {
  error: string
}

export const FieldError: React.FC<FieldErrorProps> = ({
  error
}) => {
  return <div style={style}>{error}</div>
}

const style: React.CSSProperties = {
  color: constants.colors.red,
  fontSize: constants.sizing.fonts.error
}