app.controller('SignupCtrl', function ($scope, $http, $timeout, $state, $location, $cookies) {

    $scope.signup = function (isValid, signupInfo) {
        $scope.submitted = true;
        if (isValid && $scope.checked) {
            console.log(signupInfo);

            signupInfo.password = md5(md5(signupInfo.account + signupInfo.password) + signupInfo.password);

            var url = 'http://localhost:7788/signup';
            $http.post(url, signupInfo).then(function (data) {
                console.log(data);
                if (data.data.msg === "success") {
                    var account = $scope.signupInfo.account;
                    $scope.init();

                    $state.go('login', {
                        args: {
                            account: account
                        }
                    });
                } else {
                    $scope.init();
                }
            })
        }
    };

    $scope.init = function () {
        $scope.isValidAccount = true;
        $scope.submitted = false;
        $scope.checked = false;
        $scope.signupInfo = {};
    };

    $scope.validate = function (account) {
        $timeout.cancel($scope.time);
        $scope.isValidAccount = true;
        $scope.checked = false;
        if ($scope.signupInfo.account !== undefined) {
            $scope.time = $timeout(function () {
                var url = 'http://localhost:7788/';
                $http.get(url + account + '/verification').then(function (data) {
                    if (data.data.msg === "valid") {
                        $scope.isValidAccount = true;
                        console.log(data.data.msg);
                        $scope.checked = true;
                    } else {
                        $scope.isValidAccount = false;
                        console.log(data.data.msg);
                        $scope.checked = false;
                    }
                });
            }, 3000);
        }
    };
});