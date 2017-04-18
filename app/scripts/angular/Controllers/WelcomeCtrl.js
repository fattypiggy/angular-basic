app.controller('WelcomeCtrl',function($scope, $state, $stateParams, $cookies){
    if($cookies.getObject("user") !== undefined){
        $scope.username = $cookies.getObject("user").data.name;
    }else{
         $state.go('login');
    }
});