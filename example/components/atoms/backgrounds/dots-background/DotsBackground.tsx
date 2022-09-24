import * as React from 'react';
import { Row } from '../../flex/Row';
import { Dot } from './Dot';
import './Dots.css';

interface DotsBackgroundProps {
  width: number;
  height: number;
  paddingTop?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingBottom?: number;
  reverse?: boolean;
  children: React.ReactNode;
}

export const DotsBackground: React.FC<DotsBackgroundProps> = ({
  width,
  height,
  paddingBottom = 0,
  paddingTop = 0,
  paddingLeft = 0,
  paddingRight = 0,
  reverse = false,
  children,
}) => {
  const dotsFieldWidth = width - paddingLeft - paddingRight;
  const dotsFieldHeight = height - paddingTop - paddingBottom;

  const maxDotSize = 6;
  const x = Math.floor(dotsFieldWidth / 10);
  const y = Math.floor(dotsFieldHeight / 10);

  const dots = React.useMemo(() => {
    const innerDots: JSX.Element[][] = [];

    for (let j = 1; j <= y; j++) {
      innerDots.push([]);
      for (let i = 1; i <= x; i++) {
        const xPercentage = i / x;
        const yPercentage = j / y;
        const avgPercentage = (xPercentage + yPercentage) / 2;
        const size = reverse
          ? maxDotSize - maxDotSize * avgPercentage
          : maxDotSize * avgPercentage;
        innerDots[j - 1].push(<Dot key={`${i}-${j}`} size={size} />);
      }
    }

    return innerDots;
  }, []);

  return (
    <div className="bg-dots" style={containerStyle(width, height)}>
      <div
        style={backgroundStyle(
          dotsFieldWidth,
          dotsFieldHeight,
          paddingTop,
          paddingBottom,
          paddingLeft,
          paddingRight
        )}
      >
        {dots.map((row, index) => {
          return <Row key={index}>{row.map(dotElement => dotElement)}</Row>;
        })}
      </div>
      {children}
    </div>
  );
};

const containerStyle: (width: number, height: number) => React.CSSProperties = (
  width,
  height
) => ({
  position: 'relative',
  width: `${width}px`,
  height: `${height}px`,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
});

const backgroundStyle: (
  width: number,
  height: number,
  paddingTop: number,
  paddingBottom: number,
  paddingLeft: number,
  paddingRight: number
) => React.CSSProperties = (
  width,
  height,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight
) => ({
  position: 'absolute',
  width: `${width}px`,
  height: `${height}px`,
  zIndex: 1,
  top: `${paddingTop}px`,
  bottom: `${paddingBottom}px`,
  left: `${paddingLeft}px`,
  right: `${paddingRight}px`,
});
