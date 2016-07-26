export function helloConfig($stateProvider) {
  'ngInject';
  $stateProvider.state('angularWebpackDemo.hello', {
    url: '/hello',
    template: '<hello></hello>'
  });
}
