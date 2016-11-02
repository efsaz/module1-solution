(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.menulist = "";
  $scope.checkMessage = "Please enter data first";

  function sayMessage(sizeOfMenu) {
    if (sizeOfMenu==0) {
      return "Please enter data first"
    }else if (sizeOfMenu<=3) {
      return "Enjoy!"
    }else if (sizeOfMenu>3) {
      return "Too much!"
    }
  };

  $scope.checkMenuList = function () {
    var arrayOfMenu = $scope.menulist.split(",");
    var sizeOfMenu = arrayOfMenu.length
    if ($scope.menulist.length==0) {
      sizeOfMenu=0;
    }
    $scope.checkMessage=sayMessage(sizeOfMenu);

  };
}

})();
