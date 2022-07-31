import * as React from "react";
import { constants } from "../../../constants";

interface FormProps {
  children: React.ReactNode,
  minWidth?: number
}

export const Form: React.FC<FormProps> = ({
  children,
  minWidth = 300
}) => {
  return <form
    style={style(minWidth)}
  >
    {children}
  </form>
}

const style: (minWidth: number) => React.CSSProperties = (minWidth) => ({
  backgroundColor: constants.colors.white,
  margin: constants.sizing.margin.medium,
  padding: constants.sizing.padding.large,
  width: "250px",
  boxShadow: '1px 2px 9px gray',
  borderRadius: "15px",
  minWidth: `${minWidth}px`
});