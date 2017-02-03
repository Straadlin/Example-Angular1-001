angular.module("myMoviesSeriesApp").service("ApiService", ["$http", "settings", function($http, settings){

    this.consultApi = function(service){

        return $http.get("https://api.themoviedb.org/" + settings.apiVersion + "/" + service + "?api_key=" + settings.apiKey + "&language=es")
    };
    
}]);