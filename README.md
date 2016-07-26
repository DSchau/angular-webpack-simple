# angular-simple-webpack-boilerplate

A simple angular (1.x) webpack boilerplate without a lot of the cruft of other boilerplates.

## Features

1. ES6 transpilation via `babel-loader`
1. ng-annotate via `babel-plugin-angularjs-annotate`
1. seperate production and development configs via `webpack-merge`
1. es6 tree-shaking via `webpack 2`
1. css loading via `css-loader` and `style-loader`
 - In production, these are extracted to a file via `webpack-extract-text-plugin`
 - Note: hot reloading _does_ work for CSS! (but not JS due to some issues in Angular 1.x source code. See [this issue][issue])
1. image loading via `url-loader` (and `file-loader` if over 10k)
1. a local fileserver for rapid development via `webpack-dev-server` (with hot-reloads for some things!)

## Usage

1. Clone this repo
1. `npm install`
1. `npm start` for local development
1. `npm run deploy` for a minified build output to `dist`

## License

MIT License

[issue]: https://github.com/angular/angular.js/issues/11904#issuecomment-173200161
