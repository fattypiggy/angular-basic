app.controller('WelcomeCtrl',['$scope','$rootScope','$state','$stateParams','$cookies', function($scope, $rootScope, $state, $stateParams, $cookies){
    $scope.init = function(){
        $rootScope.username = null;

        if($cookies.getObject("user") !== undefined){
            $rootScope.username = $cookies.getObject("user").data.name;
        }else{
            $state.go('login');
        }
    }

    $scope.logout = function(){
        $cookies.remove("user");
        $rootScope.username = null;
        $scope.init();
    }
}]);