app.controller('UserCtrl', function ($scope, $http, $timeout, $state, $location, $cookies) {
    $scope.init = function () {
        $scope.users = [];
        var getAllURL = 'http://localhost:8181/user/getAll';
        $http.get(getAllURL).then(function (result) {
            $scope.users = result.data;
        })
    }

    $scope.removeUser = function (user) {
        var removeURL = 'http://localhost:8181/user/delete';
        console.log(user);
        $http.post(removeURL,user).then(function(result){
            console.log(result);
            $scope.init();
        })
    }
});