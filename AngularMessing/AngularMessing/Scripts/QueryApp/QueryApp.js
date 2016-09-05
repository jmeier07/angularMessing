var myApp = angular.module('myApp',[]);

myApp.controller('GreetingController', ['$scope', function($scope) {
    $scope.greeting = 'Hola!';
    $scope.queryCriteria = ["firstName","lastName"];
    $scope.results = [
    { "firstName": "John", "lastName": "Doe" },
    { "firstName": "Anna", "lastName": "Smith" },
    { "firstName": "Peter", "lastName": "Jones" }
    ];
}]);