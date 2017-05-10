(function(module) {
  mifosX.controllers = _.extend(module, {
	  ViewVendorOtherController: function(scope, routeParams , resourceFactory ,location,$modal,PermissionService,API_VERSION,$rootScope,route) {
		
        scope.vendorotherData = [];
        resourceFactory.vendorOtherDetailsResource.getTemplateDetails({vendorId: routeParams.id} , function(data) {
        	scope.vendorotherData = data;
        });
      	function  approve($scope, $modalInstance) {
      		$scope.approve = function () {
              	resourceFactory.vendorManagementResource.remove({vendorId: scope.vendorId} , {} , function(data) {
              		location.path('/vendormanagement');
              	});
              	$modalInstance.dismiss('delete');
      		};
            $scope.cancel = function () {
                  $modalInstance.dismiss('cancel');
            };
        }
        
    }
  });
  mifosX.ng.application.controller('ViewVendorOtherController', ['$scope', '$routeParams','ResourceFactory', '$location','$modal','PermissionService','API_VERSION','$rootScope','$route',mifosX.controllers.ViewVendorOtherController]).run(function($log) {
    $log.info("ViewVendorOtherController initialized");
  });
}(mifosX.controllers || {}));
