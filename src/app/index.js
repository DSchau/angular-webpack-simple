import angular from 'angular';

import './app.css';

import { appConfig } from './app.config';
import { appComponent } from './app.component';

export default angular.module('angularWebpackDemo.app', [

])
  .config(appConfig)
  .component('app', appComponent);
