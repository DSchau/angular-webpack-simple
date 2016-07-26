export function appConfig($urlRouterProvider, $stateProvider) {
  'ngInject';
  $urlRouterProvider.otherwise('/hello');

  $stateProvider.state('angularWebpackDemo', {
    abstract: true,
    url: '',
    template: '<ui-view />'
  });
}
