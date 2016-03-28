// Plain Jane way JS only

// var myInput = document.getElementById('myInput');
// myInput.addEventListener('keyup', function(){
// 	// console.log('user hit a key!');
// 	var userText = myInput.value;
// 	document.getElementById('inputText').innerHTML = userText;
// });

// jQuery Way ---slimmer and sexier
// $('#myInput').keyup(function(){
// 	$('#inputText').html($('#myInput').val());
// })

var myApp = angular.module('myApp', []);
// console.log(myApp);
myApp.controller('myController', function($scope){
	// $scope.first = 'Bogdan';
	// $scope.last = 'Sikhovski';
	$scope.cities = [
		{
			name: 'Atlanta',
			population: 500000
		},
		{
			name: "Houston",
			population: 2200000
		},
		{
			name: 'Portland',
			population: 610000
		}
	];

	$scope.dcClass = [

		'tristan',
		'josh',
		'bogdan',
		'laz',
		'keith',
		'will',
		'curtis',
		'joe',
		'koshan',
		'patrick',
		'jonathan',
		'jeremy'
	];

	$scope.addStudent = function(){
		$scope.dcClass.push($scope.newStudent);
		$scope.newStudent = '';
	}

	$scope.removeStudent = function(i){
		$scope.dcClass.splice(i,1);
		console.log(i);
	}

});
