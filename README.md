### CS-Typeahead

Typeahead style clone - search for Github users.

[Preview](https://test283498w74982374.herokuapp.com/)<br />

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

#### Directory Structure (`/src`):
`components/*` Contains all react components  
`utils/*` Contains utility functions  
`style/*` Shared styles  
`hooks/*` Custom hooks  
`config/*` Config files  

#### Styling:
Uses [CSS Modules](https://github.com/css-modules/css-modules).

#### Testing:
[`jest`](https://github.com/facebook/jest)  
[`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro)

#### Additional dependencies:
[`@testing-library/react-hooks`](https://github.com/testing-library/react-hooks-testing-library) For testing custom hooks  
[`node-fetch`](https://github.com/node-fetch/node-fetch) Only used for mocking response headers
[`classnames`](https://github.com/JedWatson/classnames) Simple utility function for combining classnames

#### State Management:
There is not enough state to justify using any library, or even React API's like context. The state of the user search is managed with a simple react hook.

#### Usage:
Without an API key Github will provide the browser with about 10 API calls before it starts rate limiting (Check `X-RateLimit-Remaining` response header from the Github API). When this limit is reached then wait a few seconds for the limit to be lifted. Adding the header `Authorization: token <token>` is the more permanent solution. 

#### Nice to have / thoughts:
- Would be great to have an input box for the Github API Key
- Could be useful to extract the GithubSearch functionality as an agnostic/generic component for future use
