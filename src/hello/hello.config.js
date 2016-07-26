export function helloConfig($stateProvider) {
  'ngInject';
  $stateProvider.state('angularWebpack.hello', {
    url: '/hello',
    template: '<hello></hello>'
  });
}
