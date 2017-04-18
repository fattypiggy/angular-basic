app.controller('WelcomeCtrl',function($scope, $state, $stateParams){
    $scope.username = $stateParams.args.name;
});