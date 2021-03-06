(function(module) {
    mifosX.controllers = _.extend(module, {
        EditCodeController: function(scope, routeParams , resourceFactory, location,PermissionService, route ) {
            scope.codevalues = [];
            scope.newcodevalues = [];
            scope.newEle = undefined;
            scope.PermissionService = PermissionService;

            resourceFactory.codeResources.get({codeId: routeParams.id} , function(data) {
                scope.code = data;
                scope.codeId = data.id;
            });
            
            resourceFactory.codeValueResource.getAllCodeValues({codeId: routeParams.id} , function(data) {
                scope.codevalues = data;
            });

            scope.addCv = function(){
                if(scope.newEle != undefined && scope.newEle.hasOwnProperty('name')) {
                    resourceFactory.codeValueResource.save({codeId: routeParams.id},this.newEle,function(data){
                        scope.stat=false;
                        location.path('/viewcode/'+routeParams.id);
                    });
                }

            };

            scope.deleteCv = function(id){
                      resourceFactory.codeValueResource.remove({codeId: routeParams.id,codevalueId: id},{},function(data){
                          scope.stat=false;
                          location.path('/viewcode/'+routeParams.id);                                   
                      });                         
            };               
        }
   
    });
    mifosX.ng.application.controller('EditCodeController', [
	'$scope', 
	'$routeParams',
	'ResourceFactory',
	'$location',
	'PermissionService', 
	'$route', 
	mifosX.controllers.EditCodeController
	]).run(function($log) {  
		$log.info("EditCodeController initialized");
    });
}(mifosX.controllers || {}));
