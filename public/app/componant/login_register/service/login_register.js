easySocial.factory('loginRegisterService',function($http,$q){
    return{
        registerUser:registerUser
    }
    function registerUser(data){
        var apiUrl = 'http://localhost:8080/api/register';
            var request = $http({
                method: "POST",
                url: apiUrl,
                data:data
            });
            return(request
                    .then(registerUserSuccess)
                    .catch(registerUserError));

            //landingInstitute error function
            function registerUserError(response) {
                if (!angular.isObject(response.data) || !response.data.message) {
                    return($q.reject(response.data));
                }
                // Otherwise, use expected error message.
                return($q.reject(response.data.message));
            }

            //landingInstitute success function
            function registerUserSuccess(response, status, headers, config) {
                return(response);
            }
    }
})