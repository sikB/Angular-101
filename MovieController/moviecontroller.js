var movieApp = angular.module('movieApp', []);
movieApp.controller('movieController', function($scope, $http){

	var movieURL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=48bf4a3fe9092e9030ced03151c835c4';

	$scope.imagePath = 'https://image.tmdb.org/t/p/w300/';

	$http({
		method: 'GET',
		url: movieURL
		}).then(function(movieData){
		$scope.movieData = movieData.data.results;
	},function errorCallBack(movieData) {
		console.log('error');
	});

});
