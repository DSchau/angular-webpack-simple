export function appConfig($compileProvider, $urlRouterProvider, $stateProvider) {
  'ngInject';
  if ( process.env.NODE_ENV === 'production' ) {
    $compileProvider.debugInfoEnabled(false);
  }

  $urlRouterProvider.otherwise('/hello');

  $stateProvider.state('angularWebpack', {
    abstract: true,
    url: '',
    template: '<ui-view />'
  });
}
