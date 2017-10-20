**generator-react-awesome**
=======================

***A generator for a complete react app. Include (React, Redux, React-Router, i18next, Jest, Eslint, Flow, Webpack, ES6+ (Babel)...)***

**Installation**
----------------

 - Install yeoman

    `npm install -g yo`

 - Install react-awesome

   `yo react-awesome`

 - Install dependences (Don't forget to have a NODE_ENV set in development or [refer](https://stackoverflow.com/questions/34700610/npm-install-wont-install-devdependencies))

	 `npm install`

**How it works**
----------------

React Awesome try to use the best package to start a React App.

> **React Awesome include :**

 - [Webpack](https://webpack.github.io/docs/)
 - [Babel](https://babeljs.io/)
 - [React-Router](https://reacttraining.com/react-router/)
 - [Redux](http://redux.js.org/)
 - [I18next](https://www.i18next.com/) *Translation package*

**Dev tools**

 - [BrowserSync](https://www.browsersync.io/docs)
 - [Jest](http://facebook.github.io/jest/)
 - [Flow](https://flow.org/)
 - [Eslint](https://eslint.org/)
 - [Husky](https://github.com/typicode/husky)

> **Commands**

 - Launch a development server

    `npm run dev`

 - Build a production bundle

    `npm run build`

 - Launch a production server

    `npm start`

 - Launch test with flow, jest and lint !

    `npm test`

 - Launch jest

    `npm run jest`

- Launch jest with watch parameters (useful to update snapshot)

    `npm run jest:watch`

 - Launch jest

    `npm run flow`

 - Launch lint

    `npm run lint`

**Get started**
----------------

To start, edit the file in src/containers/App.js

    const App = () => (
	  <Provider store={store}>
	    <I18nextProvider i18n={i18n}>
	      <Router>
	        <Switch>
	          <Route
	            path="/"
	            render={() => <h1>{i18n.t("global:hello-world")}</h1>}
	          />
	        </Switch>
	      </Router>
	    </I18nextProvider>
	  </Provider>
	);

You can also start to edit files in translations folder.

**You should know**
----------------

Server (in development and production), render the folder public in a static path /assets, you can load file with 2 way

**Best way:**

        <img
          alt="kitten"
          src={require("../public/images/kitten.jpg")}
        />

**Other way:**

        <img
          alt="kitten"
          src="/assets/images/kitten.jpg"
        />

**Advice**
----------------

 - Keep the window-state in the redux-store could be useful.
 - Keep the AppPromise, without it promise the app could be loaded before translation. Don't forget that Google use the first rendering for referencing. If you don't need i18next, you could update app.js

	    AppPromise().then(() => {
		    ReactDOM.render(<App />, document.getElementById("app"));
	    });

To

    ReactDOM.render(<App />, document.getElementById("app"));

 - Husky is a great package to writte some hooks in package.json. I recommend to keep it.

## Contributors

* [Bastorx](https://github.com/Bastorx)

Use [Github issues](https://github.com/Bastorx/generator-react-awesome/issues) for requests

`generator-react-awesome` is a community project and wouldn't be what it is without contributions! We encourage and support contributions. The `generator-react-awesome` source code is released under the MIT License.

Feel free to fork and improve/enhance `generator-react-awesome` any way you want. If you feel that `generator-react-awesome` will benefit from your changes, please open a pull request.



*PS: Sorry if my english isn't perfect :p You can propose a merge request to correct some faults*
