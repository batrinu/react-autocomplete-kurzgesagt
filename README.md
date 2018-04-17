# react-autocomplete-kurzgesagt
Simple base app with react, react-router v4, hot-reload &amp; sass.



## How to install
You can use both npm or yarn, the version I used to create this project are:

```
$ node -v ; npm -v ; yarn -v
v8.8.1
5.4.2
1.2.1
```
If you just freshly installed yarn/npm you are good to go, else you might need to upgrade, for npm I use `n`

```
npm install -g n
```
to install it and after that select at least the stable version (what I used).

```
n stable
```

and now you have the latest stable version of node&npm.

`npm i` or `yarn` to install the dependencies.


`yarn start` or `npm start` to start dev server with hot reload, it's live on `localhost:3000`.


`yarn run build` or `npm run build` to build production bundle, it includes both treeshaking and uglify to optimize the code as much as possible.



## Project structure


```
*root*
|
├── */src/*
│   ├── */assets/* where images and stuff are stored
│   ├── */containers/* react-router jsx pages
│   ├── *App.jsx* main layout
│   ├── *Routes.jsx* front-end routes
│   ├── *index.html* entry point
│   ├── *index.jsx* javascript entry point
│   ├── *style.scss* styling
│   └── */tests/* contains test environment (Jest + Enzyme)
│       ├── */__mock__/* contains setup to provide a valid path for imports
│       ├── */_tests__/* the actual tests
│       └── *setup.js* setup for enzyme for react 16
├── *package.json* dependencies 
├── *.eslintrc* eslint config
├── *.babelrc* babel config (polyfills)
├── *webpack.config.js* webpack config, it has a dev and prod environment
└── *README.md* this file
```


## Tests

The testing environment is written in Jest and Enzyme.
The included tests are very basic and only check the proper render of base components + routes, there are no snapshot tests.


## Eslint

This project uses AirBnB Javascript specs so you can write error-free react and javasctipt code, if you use Visual Studio Code, you can install eslint from the extension tab to activate this function.
