import angular, { bootstrap } from 'angular';
import uiRouter from 'angular-ui-router';

import appModule from './app/';
import helloModule from './hello/';

const app = angular.module('angularWebpackDemo', [
  uiRouter,
  appModule.name,
  helloModule.name
]);

bootstrap(document.documentElement, [app.name], {
  strictDi: true
});
