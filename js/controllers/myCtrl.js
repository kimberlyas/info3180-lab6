// JavaScript File to manage the app's data

app.controller('myCtrl', ['$scope', function($scope) { 
  // List of products
  $scope.products = ["Almond Milk", "Ezekiel Bread", "Cashew Cheese"]; 
  // Adds item to products array
  $scope.addItem = function () {
       // Initialize container for error messages
       $scope.errortext = "";
       // Prevent the addition of empty items
        if (!$scope.addMe) {return;}
        // Check if item doesn't exist already in list
        if ($scope.products.indexOf($scope.addMe) == -1) {
            // Add item
            $scope.products.push($scope.addMe);
        } else {
            // Store error message
            $scope.errortext = "This item is already in your shopping list.";
        }
  };
  // Removes items from products array
  $scope.removeItem = function (x) {
        $scope.errortext = "";
        $scope.products.splice(x, 1);
  };
  
}]);