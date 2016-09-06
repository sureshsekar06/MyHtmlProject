var app = angular.module('MyApp', ['ngRoute']);

	app.config(function($routeProvider) {
		
		console.log("inside show");
		
	$routeProvider
		.when('/:uName', {
			
			templateUrl: 'templates/show_user_Final.html',
			controller: 'ContactController'
		})
		
		.when('/', {
			
			templateUrl: 'indexp.html',
			controller: 'ContactController'
		})
		
});

	
        
    app.controller('ContactController',function($scope,$routeParams) {
    var uid = 1;
    $scope.contacts = [];
	$scope.user_name = $routeParams.uName;
	
	console.log("I m here");
   
    $scope.saveContact = function() {
        
        if($scope.newcontact.id == null) {
             $scope.newcontact.id = uid++;
             $scope.contacts.push($scope.newcontact);
        } else {
            
             for(i in $scope.contacts) {
                    if($scope.contacts[i].id == $scope.newcontact.id) {
                        $scope.contacts[i] = $scope.newcontact;
                    }
             }                
        }
        $scope.newcontact = {};
    }

    
    $scope.delete = function(id) {
        
        for(i in $scope.contacts) {
            if($scope.contacts[i].id == id) {
                $scope.contacts.splice(i,1);
                $scope.newcontact = {};
            }
        }
        
    }
    
    
    $scope.edit = function(id) {
        for(i in $scope.contacts) {
            if($scope.contacts[i].id == id) {
                $scope.newcontact = angular.copy($scope.contacts[i]);
            }
        }
    }
    }
);


