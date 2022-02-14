# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## How did you decide on the technical and architectural choices used as part of your solution?

I used create-react-app typescript template since it already come with all necessary tools for me to start a new React project quickly which is still inline with the coding challenge. In addition, I used react-router v6 to handle navigation. I don't use any other JS/CSS libraries, while keeping the app responsive to any screen size and keeping 16:9 ratio.

## Are there any improvements you could make to your submission?

I'd probably use Redux as the application grows, to be able to handle passing state between components more easily. As of now, I passed data between components using react-router navigation state, which is not ideal as the app grows more complex.

## What would you do differently if you were allocated more time?

I haven't finish implementing the Home page interaction to choose a program using `left`, `right` and `enter` keyboard keys. If I were to spend more time on it, I can implement this by storing the currently selected program and add event listener(should work the same way like on Program and Error page). I would also have to modify the carousel component as well.

In addition, I'd add more test using Jest and Enzyme. I would test 
- the state changes throughout the lifecycle component.
- Mock API fetch to see how the component render with mock data
- test user interaction with `left`, `right` and `enter` keyboard keys on `home` page and `backspace` keys on `program` and `error` page.
- Create UI testing on Carousel and Movie components

### Other Githup repo:
- https://github.com/AndreHermanto/sgc/tree/feature/agha-all-cohorts (using angular)
- https://github.com/AndreHermanto/web-report-finder (on early stages)
