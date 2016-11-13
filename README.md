# Technology Library (UI Layer)

**Technology Library** is an application to manage free technology assets to learn software development online. The assets range from books to videos and are categorized by technology segment, language, paradigm, etc.

The purpose of this layer is to create and present a user interface to interact directly with the Technology Library. This layer uses Angular as its presentational and model management framework. It connects with **Library API** to store, control, update and create assets.

## Project Set-Up

Please execute the following command:

```
npm start
```

This command assumes that you are using `yarn` as your Node Package Manager. I recommend `yarn` due to its fast installation nature.

[Installing Yarn](https://yarnpkg.com/en/docs/install)

If you are using `npm`, execute the following:

`npm install && bower install && gulp`

### Task Builder

Gulp is the task builder of choice. 

There following Gulp tasks are available to execute:

`gulp sass` : compile and distribute .scss stylesheets.

`gulp lint` : run a style and syntax checker on Javascript files. Powered by ESLint.

`gulp transpile` : transpile ES5 code to ES6 under the es2015 and stage-0 presets.

`gulp inject` : dynamically inject bower components (JS/CSS), project stylesheets and project Javascript files into the core view (index.html). Special attention has been given to inject Angular Javascript files in their appropriate logical order to avoid undefined errors and behavior.


*Note: Browser refreshing is done through BrowserSync*


`serve` : sets the `app` folder as the base directory. Watches for changes over .js, .scss and .html files. Anytime a change is detected in any of these files, the appropriate task is triggered. It is necessary to run additional tasks upon every change as there are workflows that need to be completed before refreshing the view (such as transpilation or distribution). 

`js-watch` : this watcher runs the linter, the transpiler and the injector before refreshing the browser automatically when any change in a .js file is detected.

`html-watch` : this watcher runs the injector before refreshing the browser automatically when any change in a .html file is detected.

`default` : default tasks run when executing the `gulp` command. Pipelines `sass`, `lint`, `transpile`, `inject` and `serve`. This should be the command that is executed first when starting the project. Any changes made to the file will be managed by the `gulp` tasks.

