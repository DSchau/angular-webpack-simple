import template from './hello.html';
import { HelloController } from './hello.controller';

export const helloComponent = {
  template,
  controller: HelloController,
  controllerAs: 'hello'
};
