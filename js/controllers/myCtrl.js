// JavaScript File to manage the app's data

app.controller('myCtrl', ['$scope', function($scope) { 
  $scope.products = ["Almond Milk", "Ezekiel Bread", "Cashew Cheese"]; 
  $scope.addItem = function () {
        $scope.products.push($scope.addMe);
  };
  $scope.removeItem = function (x) {
        $scope.products.splice(x, 1);
  };
  
}]);