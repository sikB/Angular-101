var viewsApp = angular.module('viewsApp', ['ngRoute']);

viewsApp.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'pages/front.html',
		controller: 'viewsController'
	});
	$routeProvider.when('/students',{
		templateUrl: 'pages/students.html',
		controller: 'viewsController'
	});
	$routeProvider.otherwise({
		redirectTo: '/',
		templateUrl: 'pages/front.html',
		controller: 'viewsController'
	});
});


viewsApp.controller('viewsController', function($scope){
	$scope.message = 'Wassuupp';


});