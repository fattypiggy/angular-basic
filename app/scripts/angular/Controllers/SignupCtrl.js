app.controller('SignupCtrl', function ($scope, $http, $timeout) {

    $scope.signup = function (isValid, signupInfo) {
        $scope.submitted = true;
        if(isValid){
            console.log(signupInfo);
            signupInfo.password = md5(signupInfo.password);

            var url = 'http://localhost:8181/user/saving';
            $http.post(url, signupInfo).then(function (data) {
                console.log(data);
                if (data.data.msg === "success") {
                    //TODO
                    $scope.init();
                    alert("Signup Succeed");
                } else {
                    $scope.init();
                    alert("Signup Failed");
                }
            })
        }
        
    }

    $scope.init = function () {
        $scope.signupInfo = {};
    }

    $scope.validate = function () {
        $timeout.cancel($scope.time);

        $scope.time = $timeout(function () {
            var url = 'http://localhost:8181/user/';
            $http.get(url + $scope.signupInfo.account + '/verification').then(function (data) {
                if (data.data.msg === "valid") {
                    console.log(data.data.msg);
                } else {
                    console.log(data.data.msg);
                }
            });
        }, 3000);
    }
});