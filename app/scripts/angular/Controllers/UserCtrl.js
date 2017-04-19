app.controller('UserCtrl', function ($scope, $http, $timeout, $state, $location, $cookies) {
    $scope.init = function () {
        $scope.currentPage = 1;
        $scope.itemsPerPage = 5;
        $scope.users = [];
        var getAllURL = 'http://localhost:8181/user/getAll';
        $http.get(getAllURL).then(function (result) {
            $scope.users = result.data;
            $scope.setPagingData($scope.currentPage);
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

    $scope.setPagingData = function (page) {
        var pagedData = $scope.users.slice(
            (page - 1) * $scope.itemsPerPage,
            page * $scope.itemsPerPage
        );
        $scope.filteredUser = pagedData;
    }
});