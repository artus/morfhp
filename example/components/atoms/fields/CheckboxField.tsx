import * as React from "react";

interface CheckboxFieldProps {
  value?: boolean,
  onValueChange: (newValue: boolean) => void
}

export const CheckboxField :React.FC<CheckboxFieldProps> = ({
  value,
  onValueChange
}) => {

  return <input
    type={"checkbox"}
    checked={value}
    onChange={(e) => onValueChange(e.target.checked)}
  />
}