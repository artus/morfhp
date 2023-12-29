import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { UserForm } from './components/organisms/forms/UserForm';
import { Column } from './components/atoms/flex/Column';
import { Row } from './components/atoms/flex/Row';
import { CHECKBOX, NUMBER, SELECT, USER_FORM } from './code-examples';
import { CodeBlock } from './components/atoms/code-block/CodeBlock';
import { LoginForm } from './components/organisms/forms/LoginForm';
import { Title } from './components/atoms/text/Title';
import { CityForm } from './components/organisms/forms/CityForm';
import { ConversionForm } from './components/organisms/forms/ConversionForm';

const App = () => {
  return (
    <Column>
      <Row>
        <Title>Text inputs and submit button</Title>
      </Row>
      <Row>
        <UserForm />
        <CodeBlock code={USER_FORM} />
      </Row>
      <Row>
        <Title>Checkbox input</Title>
      </Row>

      <Row>
        <CodeBlock code={CHECKBOX} />
        <LoginForm />
      </Row>

      <Row>
        <Title>Select input</Title>
      </Row>

      <Row>
        <CityForm />
        <CodeBlock code={SELECT} />
      </Row>

      <Row>
        <Title>Number input</Title>
      </Row>

      <Row>
        <CodeBlock code={NUMBER} />
        <ConversionForm />
      </Row>
    </Column>
  );
};

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root')!);

//const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
