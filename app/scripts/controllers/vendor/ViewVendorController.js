(function(module) {
  mifosX.controllers = _.extend(module, {
	  ViewVendorController: function(scope, routeParams , resourceFactory ,location,$modal,PermissionService,API_VERSION,$rootScope,route) {
		  
        scope.vendorData = [];
        scope.vendorotherData = [];
        scope.PermissionService = PermissionService;
        scope.vendorRouteParamId = routeParams.id;
        
        resourceFactory.vendorManagementResource.getTemplateDetails({vendorId: routeParams.id} , function(data) {
        	scope.vendorData = data;
        });
        
        resourceFactory.vendorOtherDetailsResource.getTemplateDetails({vendorId: routeParams.id} , function(data) {
        	scope.vendorotherData = data;
        });
        
        scope.routeTo = function(vendorId){
            location.path('/viewvendoragreement/'+ vendorId);
        };
        
        scope.routeTobankdetails = function(id){
            location.path('/viewvendorbankdetails/'+ id);
        };
        
        scope.routeTootherdetails = function(id){
            location.path('/viewvendorotherdetails/'+ id);
        };
        
         scope.deleteVendor = function (id){
         	scope.vendorId=id;
          	 $modal.open({
  	                templateUrl: 'deletePopupForVendor.html',
  	                controller: approve,
  	                resolve:{}
  	        });
         };
         
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
  mifosX.ng.application.controller('ViewVendorController', ['$scope', '$routeParams','ResourceFactory', '$location','$modal','PermissionService','API_VERSION','$rootScope','$route',mifosX.controllers.ViewVendorController]).run(function($log) {
    $log.info("ViewVendorController initialized");
  });
}(mifosX.controllers || {}));
