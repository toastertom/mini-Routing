angular.module('miniRouting', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider                                  .state('home', {
    templateUrl: 'homeTmpl.html',
    controller: 'homeCtrl',
    url: '/'
  })
  .state('settings', {
    templateUrl: 'settingsTmpl.html',
    controller: 'settingsCtrl.js',
    url: '/settings'
  })
  .state('products', {
    templateUrl: 'productTmpl.html',
    controller: 'productsCtrl.js',
    url: '/products/:id'
  });

// This directs all other routs to default.
$urlRouterProvider.otherwise('/');

});
