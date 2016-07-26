import { HELLO_WORLD } from './hello.message';

export class HelloController {
  constructor() {
    'ngInject';
  }

  get message() {
    return HELLO_WORLD;
  }
}
