app.controller('SignupCtrl', function ($scope, $http) {
    $scope.signupInfo = {};

    $scope.signup = function (signupInfo) {
        console.log(signupInfo);
        var url = 'http://localhost:8181/user/saving';
        $http.post(url, signupInfo).then(function (data) {
            console.log(data);
            if (data.data.msg === "success") {
                //TODO
                alert("Signup Succeed");
            } else {
                alert("Signup Failed");
            }
        })
    }
});