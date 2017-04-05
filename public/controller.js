angular.module('filterApp').controller('mainCtrl', function ($scope, mainService) {
    mainService.getData().then(response => {
        $scope.people = response.data;
    })

})