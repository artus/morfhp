import * as React from 'react';
import { constants } from '../../../constants';

interface CodeBlockProps {
  code: string
};

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code
}) => {
  return <pre style={style}>
    {code}
  </pre>
}

const style: React.CSSProperties = {
  padding: constants.sizing.padding.large,
  color: constants.colors.code,
  backgroundColor: constants.colors.darkgray,
  borderRadius: "15px",
  fontSize: constants.sizing.fonts.code,
  fontFamily: "monospace"
}