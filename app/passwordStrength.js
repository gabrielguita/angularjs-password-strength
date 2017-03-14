angular.module('passwordStrength', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('/home', {  
            templateUrl : 'views/home.html',
            controller : 'HomeCtrl',
            controllerAs: 'vm',
            url: '/home'
        })
        $urlRouterProvider.otherwise('/home');
    }])
	.config(['$httpProvider', function ($httpProvider) {
		$httpProvider.defaults.cache = true;
	}
]);