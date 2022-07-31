import * as React from "react";
import { constants } from "../../../constants"

export const Title: React.FC = ({
  children
}) => {
  return <h1 style={{ marginTop: constants.sizing.margin.huge}}>
    {children}
  </h1>
}