var viewsApp=angular.module('viewsApp', ['ngRoute', 'ngAnimate']);

viewsApp.config(function($routeProvider){
	$routeProvider.when('/0',{
		controller: "viewsController",
		templateUrl: 'template0.html'
		});
	$routeProvider.when('/1',{
		controller: "viewsController",
		templateUrl: 'template1.html'
		});
	$routeProvider.otherwise({
		redirectTo: '/'
	});
});

// after .when enter: ('/:template', {controller: 'viewsController', templateUrl: function($routeParams)
// {templateFileName="template" + $routeParams.template + '.html'});});
// this makes it do all the work for you. instead of doing it like the above way..i would have to copy paste for every single
// page that i want to make. this way it makes it with the function
viewsApp.controller('viewsController', function($scope, $location){
	$scope.nextId = function(id){
		$location.path("/" +id);
	}
});
