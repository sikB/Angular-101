function StudentInfo(name, former){
	this.name = name;
	this.former = former;
}
items = [];
	items.push(new StudentInfo('Tristan', 'Stock guy'));
	items.push(new StudentInfo('Josh', 'former iOS'));
	items.push(new StudentInfo('Bogdan', 'Car guy'));
	items.push(new StudentInfo('Laz', 'KGB guy'));
	items.push(new StudentInfo('Keith', 'Geologist guy'));
	items.push(new StudentInfo('Will', 'Skiing guy'));
	items.push(new StudentInfo('Curtis', 'IT guy'));
	items.push(new StudentInfo('Joe', 'Controller guy'));
	items.push(new StudentInfo('Koshan', 'WF guy'));
	items.push(new StudentInfo('Patrick', 'Outlaw guy'));
	items.push(new StudentInfo('Jonathan', 'CSS guy'));
	items.push(new StudentInfo('Jeremy', 'Private Eye guy'));
console.log(items);
var angularStyle = angular.module('angularStyle', []);
angularStyle.controller('styleController', function($scope){

	$scope.items = items;
	$scope.understand = function(){
		$scope.understandYes = 1;
	}

});
