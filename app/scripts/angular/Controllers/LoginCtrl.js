app.controller('LoginCtrl', function ($scope, $http) {
    $scope.loginInfo = {};

    $scope.login = function (loginInfo) {
        console.log(loginInfo);
        var url = 'http://localhost:8181/user/verification';
        $http.post(url, loginInfo).then(function (data) {
            console.log(data);
            if (data.data.msg === "success") {
                //TODO
                alert("Login Succeed");
            } else {
                alert("Login Failed");
            }
        })
    }
});