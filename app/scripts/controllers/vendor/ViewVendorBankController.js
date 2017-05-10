(function(module) {
  mifosX.controllers = _.extend(module, {
	  ViewVendorBankController: function(scope, routeParams , resourceFactory ,location,$modal,PermissionService,API_VERSION,$rootScope,route) {
		  
        scope.vendorData = [];
        scope.PermissionService = PermissionService;
        scope.vendorRouteParamId = routeParams.id;
        
        resourceFactory.vendorManagementResource.getTemplateDetails({vendorId: routeParams.id} , function(data) {
        	scope.vendorData = data;
        });
        
         scope.deleteVendor = function (id){
         	scope.vendorId=id;
          	 $modal.open({
  	                templateUrl: 'deletePopupForVendor.html',
  	                controller: approve,
  	                resolve:{}
  	        });
         };
        
    }
  });
  mifosX.ng.application.controller('ViewVendorBankController', ['$scope', '$routeParams','ResourceFactory', '$location','$modal','PermissionService','API_VERSION','$rootScope','$route',mifosX.controllers.ViewVendorBankController]).run(function($log) {
    $log.info("ViewVendorBankController initialized");
  });
}(mifosX.controllers || {}));
