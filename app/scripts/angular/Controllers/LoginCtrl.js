app.controller('LoginCtrl', function ($scope, $http, $location) {

    $scope.init= function(){
        $scope.loginInfo = {};
        $scope.submitted = false;
        $scope.loginError = false;
    }
    $scope.login = function (isValid,loginInfo) {
        $scope.submitted = true;
        if(isValid){
            console.log(loginInfo);
            var url = 'http://localhost:8181/user/verification';
            loginInfo.password = md5(md5(loginInfo.password) + loginInfo.account);
            $http.post(url, loginInfo).then(function (data) {
                console.log(data);
                if (data.data.msg === "success") {
                    $scope.init();
                    $location.path("/");
                } else {
                    $scope.loginError = true;
                }
            })
        }  
    }

    $scope.oauth = function(oauthLoginInfo){
        console.log(oauthLoginInfo);
        var url = 'http://localhost:7788/oauth2/qq/login_page';
        $http.get(url).then(function(data){
            if(data.result === "true"){
                var redirectURL = data.url;
                
            }else{
                console.log(data.detail);
            }
        })
    }
});