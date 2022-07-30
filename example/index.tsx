import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { UserForm } from './components/organisms/UserForm';

const App = () => {
  return (
    <div>
      <UserForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
