app.controller('SignupCtrl', function ($scope, $http, $timeout, $location) {

    $scope.signup = function (isValid, signupInfo) {
        $scope.submitted = true;
        if (isValid) {
            console.log(signupInfo);
            signupInfo.password = md5(md5(signupInfo.password) + signupInfo.account);

            var url = 'http://localhost:8181/user/saving';
            $http.post(url, signupInfo).then(function (data) {
                console.log(data);
                if (data.data.msg === "success") {
                    //TODO
                    $scope.init();
                    $location.path("/login");
                } else {
                    $scope.init();
                }
            })
        }

    };

    $scope.init = function () {
        //$scope.isValidAccount = true;
        $scope.submitted = false;
        $scope.signupInfo = {};
    };

    $scope.validate = function (account) {
        $timeout.cancel($scope.time);
        if ($scope.signupInfo.account !== undefined) {
            $scope.time = $timeout(function () {
                var url = 'http://localhost:8181/user/';
                $http.get(url + account + '/verification').then(function (data) {
                    if (data.data.msg === "valid") {
                        $scope.isValidAccount = true;
                        console.log(data.data.msg);
                    } else {
                        $scope.isValidAccount = false;
                        console.log(data.data.msg);
                    }
                });
            }, 3000);
        }
    };
});