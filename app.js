var sampleApp = angular.module('sampleApp', []);

sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/ShowOrder/:orderId', {
	template: '<h2>Order #{{order_id}}</h2>Here are the details for order <b>#{{order_id}}</b>.',
	controller: 'ShowOrderController'
      });
}]);


sampleApp.controller('ShowOrderController', function($scope, $routeParams) {

	
	$scope.order_id = $routeParams.orderId;

});
