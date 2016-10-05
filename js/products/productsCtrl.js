angular.module('miniRouting').controller('productsCtrl', function ($scope, $stateParams, productService) {
    if ($stateParams.id === 'shoes') {
        $scope.productData = productService.shoeData;
    }
    else if ($stateParams.id === 'socks') {
        $scope.productData = productService.sockData;
    }
});

//$stateParams allows you to look at that specific URL.

//productService is connecting this controller to that service. 
