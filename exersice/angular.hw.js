var myApp = angular.module('myApp', []);
myApp.controller('myController', function($scope, $http){
	// console.log($scope);
// can get local files to link to with few exceptions. 
	// 	$scope.countries = dataWeGotBack;
	// });

	$scope.countries = [
	{
		name: 'America',
		population: '318,900,000',
		president: 'Obama',
		src: 'amerflag.png'
	},
	{
		name: 'Canada',
		population: '35,160,000',
		president: 'Trudeau',
		src: 'canadia.png'
	},
	{
		name: 'Brazil',
		population: '200,400,000',
		president: 'Rousseff',
		src: 'brazil.png'
	},
	{
		name: 'Japan',
		population: '127,300,000',
		president: 'Abe',
		src: 'jap.png'
	},
		{
		name: 'China',
		population: '1,357,300,000',
		president: 'Jinping',
		src: 'china.png'
	},
		{
		name: 'Korea',
		population: '50,220,000',
		president: 'Geun-hye',
		src: 'korea.png'
	},
		{
		name: 'Russia',
		population: '143,500,000',
		president: 'Putin',
		src: 'ruski.png'
	},
		{
		name: 'Australia',
		population: '23,130,000',
		president: 'Abbott',
		src: 'australia.png'
	},
		{
		name: 'Ireland',
		population: '4,595,000',
		president: 'Higgins',
		src: 'irish.png'
	},
		{
		name: 'Germany',
		population: '80,620,000',
		president: 'Gauck',
		src: 'german.png'
	}
	]
	$scope.addCountry = function(){
		$scope.countries.push(
			{
			name: $scope.newCountry, 
			population: $scope.newPopulation, 
			president: $scope.newPresident, 
			src: $scope.newFlag
		});
		$scope.newCountry = '';
		$scope.newPopulation = '';
		$scope.newPresident = '';
		$scope.newFlag = '';
	}
	$scope.removeCountry = function(i){
		$scope.message = $scope.countries[i].name + ' was removed';
		$scope.countries.splice(i,1);
	}
});