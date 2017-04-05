angular.module('filterApp').service('mainService', function ($http) {
	let serverUrl = 'http://localhost:3033'
	this.getData = function () {
		return $http({
			method: 'GET',
			url : serverUrl + '/api/getdata'
		})
    }
})


