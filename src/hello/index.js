import angular from 'angular';

import './hello.css';

import { helloConfig } from './hello.config';
import { helloComponent } from './hello.component';

export default angular.module('angularWebpackDemo.hello', [

])
  .config(helloConfig)
  .component('hello', helloComponent);
