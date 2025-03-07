# Custom ESLint Plugins Project

This project demonstrates how to create and use custom ESLint plugins to enforce specific code quality rules in your React application. It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Custom ESLint Plugins

This project includes examples of custom ESLint plugins located in the `eslint-plugin-local` directory:

- `no-variable-strings`: A rule that prevents the use of variable strings in specific contexts
- Additional custom rules can be added following the same pattern

### How to Create a Custom ESLint Plugin

1. Create a directory for your plugin (e.g., `eslint-plugin-local`)
2. Create an `index.js` file to export your rules
3. Create individual rule directories with their implementation and documentation
4. Configure ESLint to use your custom plugin

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run lint`

Runs ESLint to check your code against both standard and custom rules.

## Adding Your Own Custom Rules

To add a new custom ESLint rule:

1. Create a new directory in `eslint-plugin-local` with your rule name
2. Create an `index.js` file with your rule implementation
3. Create a `doc.md` file with documentation for your rule
4. Export your rule in the main `eslint-plugin-local/index.js` file
5. Update your ESLint configuration to use the new rule

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

For more information about creating ESLint plugins, see the [ESLint Developer Guide](https://eslint.org/docs/developer-guide/working-with-plugins).
