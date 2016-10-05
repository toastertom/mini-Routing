angular.module('miniRouting', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    templateUrl: 'js/home/homeTmpl.html',
    controller: 'homeCtrl',//This is refrencing the name in the controller not the file. (eg homeCtrl.js)

    url: '/'
  })
  .state('settings', {
    templateUrl: 'js/settings/settingsTmpl.html',
    controller: 'settingsCtrl', //This is refrencing the name in the controller not the file.
    url: '/settings'
  })
  .state('products', {
    templateUrl: 'js/products/productTmpl.html',
    controller: 'productsCtrl',
    url: '/products/:id'
  });

// This directs all other routs to default.
$urlRouterProvider

.otherwise('/');

});
