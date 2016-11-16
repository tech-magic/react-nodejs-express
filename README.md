# React-Nodejs-express and Flux Starter Kit

Here is a sample application on how you could integrate React with Nodejs, express and use flux architecture within react.

# Pre-requisites

1. Install nodejs and npm (nodejs v6.3.1)
2. sudo npm install -g gulp
3. sudo npm install -g nodemon
4. sudo npm install -g bower

# Running the Project

1. sudo npm -ddd install
2. bower install
3. gulp (Press Ctrl+C after completion)
4. npm start

# Running Project during Development

1. sudo npm -ddd install
2. bower install
3. Open a separate terminal, navigate to project root directory and type `gulp`
4. In another terminal navigate to project root directory and type `npm run watch`
5. In this way you could see the development changes without restarting the node app again and again. 

# Nodejs -> Express -> React Flow

Check the implementation in the following order. <br/>
1. In `server.js` the code block within `Router.match` takes `routes.default` as the default react router and renders ReactDOM into `views/index.html` file which is the base HTML template for the entire application. <br/>
2. `routes` in `server.js` refers to the root React routing component implemented at `app/routes.js` <br/>
3. `app/routes.js` embeds the 2 React components; App and Home into a single react application. <br/>
4. In `app/components/App.js`; the react component App embeds Footer which is another react component. The Footer component is used to demonstrate flux event flow. <br/>

# Flux Architecture (Uni-Directional Event Flow)

  `-> View -> Action -> Store ->`<br/>
  `<----------------------------`<br/><br/>
1. In `app/components/Footer.js`, the `componentDidMount()` method corresponds very much similar to document.onReady function in jQuery. This function fires `FooterActions.getTopCharacters()` on load and listens to `FooterStore`. <br/>
2. In `getTopCharacters()` method at `app/actions/FooterActions.js`; the method internally triggers either a success or failure event. <br/>
3. In `app/store/FooterStore.js`; the datastore updates its state upon receiving the corresponding event via method `onGetTopCharactersSuccess()`. <br/>
4. This change of state in FooterStore is acknowledged by the view Footer, since the view is configured to Listen to FooterStore at `componentDidMount()` in `app/components/Footer.js`. <br/>
5. `alt` is the nodejs based javascript implementation of the react-flux based architecture used in this example. Other alternative flux implementations include `redux` with `redux-thunks`. <br/>
6. Have fun! You will understand about react-flux architecture better when you read a related reference from now onwards. <br/>
