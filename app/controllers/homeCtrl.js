angular.module('passwordStrength')
.controller('HomeCtrl', ['$scope', '$state', function($scope, $state) {

	var strongPwExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
	var mediumPwExp = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

	$scope.checkStrength = {
		"width": "100%",
		"height": "100%"
	};

	$scope.user = {};

	$scope.savePassword = function(value){
		$scope.user.password = value;
		console.log($scope.user.password);
	};

	$scope.validationInputPwdText = function(value) {
		if (strongPwExp.test(value) && value.length > 8) {
		  $scope.checkStrength["border-color"] = "green";
		  $scope.checkStrength["background-color"] = "rgba(0, 128, 0, 0.5)";
		  $scope.strength = 'strong';
		} else if (mediumPwExp.test(value) && value.length > 3) {
		  $scope.checkStrength["border-color"] = "orange";
		  $scope.checkStrength["background-color"] = "rgba(255, 165, 0, 0.05)";
		   $scope.strength = 'medium';
		} else {
		  $scope.checkStrength["border-color"] = "red";
		  $scope.checkStrength["background-color"] = "rgba(255, 0, 0, 0.05)";
		  $scope.strength = 'weak';
		}
	};
}]);