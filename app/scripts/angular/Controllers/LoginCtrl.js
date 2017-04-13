app.controller('LoginCtrl', function ($scope, $http) {

    $scope.login = function (loginInfo) {
        console.log(loginInfo);
        var url = 'http://localhost:8181/user/verification';
        loginInfo.password = md5(loginInfo.password);
        $http.post(url, loginInfo).then(function (data) {
            console.log(data);
            if (data.data.msg === "success") {
                //TODO
                alert("Login Succeed");
                $scope.init();
            } else {
                alert("Login Failed");
                $scope.init();
            }
        })
    }

    $scope.init= function(){
        $scope.loginInfo = {};
    }
});