var app = angular.module('app.linhkienfit',[]);
app.controller('indexController', ['$scope', 'svProduct', function ($scope, svProduct) {
    $scope.products = [];
    svProduct.getProducts().then(function (result) {
        $scope.products = result.data;
    }, function (err) {
        console.log(err);
    });
}]);