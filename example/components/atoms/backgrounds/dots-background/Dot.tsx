import * as React from "react";
import { constants } from "../../../../constants";
import "./Dots.css";

interface DotProps {
  size: number,
  color?: string
}

export const Dot: React.FC<DotProps> = ({
  size,
  color = constants.colors.gray
}) => {
  return <div className="bg-dot-container" style={containerStyle(size)}>
    <div
      className="bg-dot"
      style={dotStyle(size, color)}
    />
  </div>
}

const containerStyle: (size: number) => React.CSSProperties = (
  size
  ) => ({
    float: "left",
    width: "10px",
    height: "10px",
    padding: `${5 - size / 2}px`
});

const dotStyle: (size: number, color: string) => React.CSSProperties = (
  size,
  color
) => ({
  backgroundColor: color,
  width: `${size}px`,
  height: `${size}px`,
  borderRadius: "50%"
});