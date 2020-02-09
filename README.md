This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run the project

### `npm/yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm/yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm/yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## General Information

#### Directory Structure:
`components/*` Contains all react components  
`components/baseComponents` Re-useable base components (no styling)  
`components/organisms` Application components   

#### Styling:
Uses [CSS Modules](https://github.com/css-modules/css-modules).

#### Testing:
[`jest`](https://github.com/facebook/jest)  
[`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro)

#### Additional dependencies:
[`@testing-library/react-hooks`](https://github.com/testing-library/react-hooks-testing-library) For testing custom hooks  
[`node-fetch`](https://github.com/node-fetch/node-fetch) Only used for mocking response headers
