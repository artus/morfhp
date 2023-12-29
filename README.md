# Morfhp

`My Own React Form Hooks Package`

An opinionated package for easy form handling in react.

```js
const usernameInput = useTextInput({
  isRequired: true,
  label: 'username',
  validator: (username: string) => {
    if (username === "some-swear-word") {
      throw new Error("You can not use that username");
    }
    return username;
  }
  Component: TextInputGroup
});

const passwordInput = useTextInput({
  secureTextEntry: true,
  isRequired: true,
  label: 'password',
  validator: (password: string) => {
    if (password.length < 6) {
      throw new Error("Your password must be at least 6 characters long.");
    }
    return password;
  },
  Component: TextInputGroup
});

const form = useForm({
  inputs: [usernameInput, passwordInput, rememberInput, tcInput],
  onSubmit: () => {
    username = usernameInput.formValue.value!;
    password = passwordInput.formValue.value!;
    await register(username, password);
  }
})

return <Form onSubmit={form.onSubmit}>
      {form.error && <p className="error">{form.error.message}</p>}
      {usernameInput.jsx}
      {passwordInput.jsx}
      <SubmitButton canSubmit={form.canSubmit} isLoading={form.isLoading} />
    </Form>
  );
```

## Usage

Create reactive form elements using the provided hooks. Link them together using the `useForm` hook.
This package does not supply the actual elements, but provided hooks that you can use to manage your forms.

### Text input

Allows you to use a reactive text input field.

```js
const usernameInput = useTextInput({
  isRequired: true,
  label: 'username',
  validator: (username: string) => return username,
  Component: TextInputGroup,
});
```

### Password input

Use a text input field, but with `secureTextEntry` set to `true`.

```js
const passwordInput = useTextInput({
  isRequired: true,
  label: 'username',
  validator: (username: string) => return username,
  secureTextEntry: true,
  Component: TextInputGroup,
});
```

## Checkbox input

Support for checkboxes:

```js
const termsAndConditionsInput = useBooleanInput({
  isRequired: true,
  label: 'I agree to the terms and conditions',
  validator: (agree: boolean) => {
    if (!agree) {
      throw new Error(
        'You have to accept the terms and conditions to continue'
      );
    }
    return agree;
  },
  emptyValueMessage: 'You have to accept the terms and conditions to continue',
  defaultValue: false,
  Component: CheckboxInputGroup,
});
```

## Number input

Support for number input:

```js
const priceValue = useNumberInput({
  defaultValue: 1,
  isRequired: true,
  label: 'Price in EUR',
  validator: priceValidator,
  Component: NumberInputGroup,
});
```

## Dropdown input

```js
const cities = [
  // (key, value)
  new SelectInputItem() < string > ('New York', 'New York'),
  new SelectInputItem() < string > ('London', 'London'),
  new SelectInputItem() < string > ('Tokyo', 'Tokyo'),
  new SelectInputItem() < string > ('New Delhi', 'New Delhi'),
  new SelectInputItem() < string > ('Brussels', 'Brussels'),
];

const cityInput = useSelectInput({
  isRequired: true,
  label: 'City',
  Component: SelectInputGroup,
  defaultValue: cities[0],
  items: cities,
  validator: (selectedInput: SelectInputItem<string>) => {
    if (selectedInput.name === 'Brussels') {
      throw new Error('Brussels can not be selected.');
    }
    return selectedInput;
  },
});
```

### Custom Input

If none of the above hooks support your usecase, you can use a custom input:

```js
const customInput = useCustomInput({
  isRequired: true,
  label: 'custom',
  validator: (value: number) => value,
  Component: MyCustomInputGroup,
  placeholder: 12,
  defaultValue: 12,
  validateInitially: true,
});
```

### Form handling

```js
const form = useForm({
  inputs: [usernameInput, passwordInput, rememberInput, tcInput],
  onSubmit,
  onError,
});

function onError(error: Error) {
  alert(error.message);
}

function onSubmit(): Promise<void> {
  if (rememberInput.formValue.value) {
    alert(`Will remembering ${usernameInput.formValue.value!} after login`);
  } else {
    alert(`Will not remember ${usernameInput.formValue.value!} after login`);
  }
  const username = usernameInput.formValue.value!;
  const password = passwordInput.formValue.value!;
  const remember = rememberInput.formValue.value!;
  const tcInput  = tcInput.formValue.value!;
  await doSomething(username, password, remember, tcInput);
}
```

# TSDX Configuration

## Commands

TSDX scaffolds this library inside `/src`, and also sets up a [Parcel-based](https://parceljs.org) playground for it inside `/example`.

The recommended workflow is to run TSDX in one terminal:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run the example inside another:

```bash
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

The default example imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure TSDX is running in watch mode like we recommend above. **No symlinking required**, we use [Parcel's aliasing](https://parceljs.org/module_resolution.html#aliases).

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

## Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `npm run size` and visulize it with `npm run analyze`.

#### Setup Files

This is the folder structure we set up for you:

```txt
/example
  index.html
  index.tsx       # test the component here in a demo app
  package.json
  tsconfig.json
/src
  index.tsx       # Exports all hooks
.gitignore
package.json
README.md         # EDIT THIS
tsconfig.json
```

### Rollup

**Morfph** (TSDX) uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Continuous Integration

### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [`size-limit`](https://github.com/ai/size-limit)

## Optimizations

Please see the main `tsdx` [optimizations docs](https://github.com/palmerhq/tsdx#optimizations). In particular, know that you can take advantage of development-only optimizations:

```js
// ./types/index.d.ts
declare var __DEV__: boolean;

// inside your code...
if (__DEV__) {
  console.log('foo');
}
```

You can also choose to install and use [invariant](https://github.com/palmerhq/tsdx#invariant) and [warning](https://github.com/palmerhq/tsdx#warning) functions.

## Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.

## Deploying the Example Playground

The Playground is just a simple [Parcel](https://parceljs.org) app, you can deploy it anywhere you would normally deploy that. Here are some guidelines for **manually** deploying with the Netlify CLI (`npm i -g netlify-cli`):

```bash
cd example # if not already in the example folder
npm run build # builds to dist
netlify deploy # deploy the dist folder
```

Alternatively, if you already have a git repo connected, you can set up continuous deployment with Netlify:

```bash
netlify init
# build command: yarn build && cd example && yarn && yarn build
# directory to deploy: example/dist
# pick yes for netlify.toml
```

## Named Exports

Per Palmer Group guidelines, [always use named exports.](https://github.com/palmerhq/typescript#exports) Code split inside your React app instead of your React library.

## Publishing to NPM

We recommend using [np](https://github.com/sindresorhus/np).
