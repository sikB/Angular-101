var myApp = angular.module('myApp', []);
myApp.controller('myController', function($scope){
	$scope.countries = [
	{
		name: 'America',
		population: 318900000,
		president: 'Obama',
		src: 'amerflag.png'
	},
	{
		name: 'Canada',
		population: 35160000,
		president: 'Trudeau',
		src: 'canadia.png'
	},
	{
		name: 'Brazil',
		population: 200400000,
		president: 'Rousseff',
		src: 'brazil.png'
	},
	{
		name: 'Japan',
		population: 127300000,
		president: 'Abe',
		src: 'jap.png'
	},
		{
		name: 'China',
		population: 1357300000,
		president: 'Jinping',
		src: 'china.png'
	},
		{
		name: 'Korea',
		population: 50220000,
		president: 'Geun-hye',
		src: 'korea.png'
	},
		{
		name: 'Russia',
		population: 143500000,
		president: 'Putin',
		src: 'ruski.png'
	},
		{
		name: 'Australia',
		population: 23130000,
		president: 'Abbott',
		src: 'australia.png'
	},
		{
		name: 'Ireland',
		population: 4595000,
		president: 'Higgins',
		src: 'irish.png'
	},
		{
		name: 'Germany',
		population: 80620000,
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
			src: ''
		});
		$scope.newCountry = '';
		$scope.newPopulation = '';
		$scope.newPresident = '';
		$scope.newFlag = '';
	}
});