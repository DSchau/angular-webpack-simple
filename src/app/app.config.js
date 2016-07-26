export function appConfig($urlRouterProvider, $stateProvider) {
  'ngInject';
  $urlRouterProvider.otherwise('/hello');

  $stateProvider.state('angularWebpack', {
    abstract: true,
    url: '',
    template: '<ui-view />'
  });
}
