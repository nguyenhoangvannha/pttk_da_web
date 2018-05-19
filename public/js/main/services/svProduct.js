var app = angular.module('app.linhkienfit');
app.factory('svProduct',['$http', function ($http) {
    return{
        getProducts: function () {
            return $http.get('/api/products');
        },
        getCompanies: function () {
            return $http.get('/api/companies');
        }
    };
}]);