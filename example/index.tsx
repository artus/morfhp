import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { UserForm } from './components/organisms/forms/UserForm';
import { Column } from './components/atoms/flex/Column';
import { Row } from './components/atoms/flex/Row';
import { CHECKBOX, NUMBER, SELECT, USER_FORM } from './code-examples';
import { DotsBackground } from './components/atoms/backgrounds/dots-background/DotsBackground';
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
        <DotsBackground width={1000} height={800} paddingRight={200}>
          <UserForm />
          <CodeBlock code={USER_FORM} />
        </DotsBackground>
      </Row>
      <Row>
        <Title>Checkbox input</Title>
      </Row>

      <Row>
        <DotsBackground
          reverse={true}
          width={1000}
          height={500}
          paddingLeft={200}
        >
          <CodeBlock code={CHECKBOX} />
          <LoginForm />
        </DotsBackground>
      </Row>

      <Row>
        <Title>Select input</Title>
      </Row>

      <Row>
        <DotsBackground width={1000} height={500} paddingRight={200}>
          <CityForm />
          <CodeBlock code={SELECT} />
        </DotsBackground>
      </Row>

      <Row>
        <Title>Number input</Title>
      </Row>

      <Row>
        <DotsBackground width={1000} height={500} paddingRight={200}>
          <CodeBlock code={NUMBER} />
          <ConversionForm />
        </DotsBackground>
      </Row>
    </Column>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
