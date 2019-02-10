# Firebase Template
## State Management
- Normal React, no other state management

## CSS Styling
- Inline and css files

## Setting Up Google Firebase                                   DONE
- Go to Firebase Console
- Add Project with a Name

## Database : Firebase from Google (Including LocalStorage)     DONE
- Once in Google Firebase, go to Project Overview
- Click on the Code Icon
- Copy that config data into base.js
- Go to Database / Realtime Database
- Start in Test Mode, then later, we'll do Locked Mode

## Login : Firebase from Google                                 DONE
- Instructions and Ideas go here
- Will start with a basic Facebook, Twitter, Github, and Email Auth
- https://courses.wesbos.com/account/access/5bf96967256ae9346111e169/view/257761785
- Twitter: https://developer.twitter.com/en/apps/create
- Github: https://github.com/settings/applications/new

## PWA Creation
- Edit Manifest.json


## Spinner Information
- http://www.codetunnel.io/how-to-create-versatile-loading-spinner-management-in-react/

## Build Steps for Netlify
- npm run build
- netlify deploy
    - Use the build folder when it asks
    - Check it over
- If it's good, then run netlify deploy --prod
- Update Google Firebase with the new URL (if needed)
- Done! 


# TODO
- Make CSS styling pretty, expecially for mobile
- Create actual layout that I want: This week's poomsae starting with today's. Gray out previous days and start on Monday. Display them vertically, and jump to today's. If today.day === Tuesday, jump to Tuesday then gray out monday. 





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
