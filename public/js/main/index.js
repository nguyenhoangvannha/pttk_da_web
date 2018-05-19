var app = angular.module('app.linhkienfit',[]);
app.controller('indexController', ['$scope', 'svProduct', function ($scope, svProduct) {
    $scope.products = [];
    svProduct.getProducts().then(function (result) {
        $scope.products = result.data;
    }, function (err) {
        console.log(err);
    });
    $scope.companies = [];
    svProduct.getCompanies().then(function (result) {
        result.data.forEach(element => {
            if(element.NHASANXUAT != 'undefined'){
                $scope.companies.push(element);
            }
        });
    });
}]);