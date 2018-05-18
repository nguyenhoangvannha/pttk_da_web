var app = angular.module('app.linhkienfit');
app.factory('svProduct',['$http', function ($http) {
    return{
        getProducts: function () {
            return $http.get('/api/products');
        },
    };
}]);