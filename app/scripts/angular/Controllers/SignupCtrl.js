app.controller('SignupCtrl', function ($scope, $http) {

    $scope.signup = function (signupInfo) {
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

    $scope.init = function () {
        $scope.signupInfo = {};
    }
});