app.controller('LoginCtrl', function ($scope, $http, $location, $state, $stateParams) {

    $scope.init= function(){
        $scope.loginInfo = {};
        $scope.submitted = false;
        $scope.loginError = false;
    };
    
    $scope.login = function (isValid,loginInfo) {
        $scope.submitted = true;
        if(isValid){
            console.log(loginInfo);
            var url = 'http://localhost:7788/verification';
            loginInfo.password = md5(md5(loginInfo.password) + loginInfo.account);
            $http.post(url, loginInfo).then(function (data) {
                console.log(data);
                if (data.data.result === true) {
                    var name = data.data.data.name;
                    $scope.init();

                    //$location.path("/");
                    $state.go('welcome',{
                        args:{
                            name:name
                        }
                    });
                } else {
                    $scope.loginError = true;
                }
            })
        }
    };

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
    };

});