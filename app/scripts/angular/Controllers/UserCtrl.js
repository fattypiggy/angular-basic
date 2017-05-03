app.controller('UserCtrl',['$scope','$http','$timeout','$state','$location','$cookies', function ($scope, $http, $timeout, $state, $location, $cookies) {
    $scope.init = function () {
        $scope.currentPage = 1;
        $scope.itemsPerPage = 5;
        $scope.users = [];
        $scope.setPagingData(1);
    }

    $scope.removeUser = function (user) {
        var removeURL = 'http://localhost:8181/user/delete';
        console.log(user);
        $http.post(removeURL, user).then(function (result) {
            console.log(result);
            $scope.init();
        })
    }

    $scope.setPagingData = function (page) {
        var getAllURL = 'http://localhost:8181/user/getAll?page=' + (page - 1) + "&size=5";
        $http.get(getAllURL).then(function (result) {
            $scope.users = result.data.data;
            $scope.totalItems = Number(result.headers('X-Pagination-Total-Items'));
        })
    }
}]);