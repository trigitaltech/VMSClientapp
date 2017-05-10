(function(module) {
  mifosX.controllers = _.extend(module, {
	  VendorController: function(scope, resourceFactory,PermissionService,location,route,$modal,webStorage) {
    	
		  
    	scope.PermissionService = PermissionService;
    	
    	
        resourceFactory.vendorManagementResource.get(function(data) {
            scope.vendorDatas = data;
        });
        
        /*resourceFactory.vendorOtherDetailsResource.get(function(data) {
            scope.vendorotherDatas = data;
        });*/
        
        
        scope.routeTo=function(id){
        	location.path('/viewvendormanagement/' +id);
        };
        
        /*scope.routeTobankdetails = function(id){
            location.path('/viewvendorbankdetails/'+ id);
        };
        
        scope.routeTootherdetails = function(id){
            location.path('/viewvendorotherdetails/'+ id);
        };*/
        
        /**
       	 * Delete Vendor
       	 * */
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
                    route.reload();
              	});
              	$modalInstance.dismiss('delete');
      		};
            $scope.cancel = function () {
                  $modalInstance.dismiss('cancel');
            };
        }
        
    }
  });
  mifosX.ng.application.controller('VendorController', [
    '$scope', 
    'ResourceFactory',
    'PermissionService',
    '$location',
    '$route','$modal',
    mifosX.controllers.VendorController
    ]).run(function($log) {
    $log.info("VendorController initialized");
  });
}(mifosX.controllers || {}));
