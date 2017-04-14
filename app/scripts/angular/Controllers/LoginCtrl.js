app.controller('LoginCtrl', function ($scope, $http, $location) {

    $scope.login = function (isValid,loginInfo) {
        $scope.submitted = true;
        if(isValid){
            console.log(loginInfo);
            var url = 'http://localhost:8181/user/verification';
            loginInfo.password = md5(md5(loginInfo.password) + loginInfo.account);
            $http.post(url, loginInfo).then(function (data) {
                console.log(data);
                if (data.data.msg === "success") {
                    //TODO
                    alert("Login Succeed");
                    $scope.init();
                    $location.path("/");
                } else {
                    alert("Login Failed");
                    $scope.init();
                }
            })
        }  
    }

    $scope.init= function(){
        $scope.loginInfo = {};
    }
});