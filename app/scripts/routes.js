
(function(mifosX) {
  var defineRoutes = function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/start.html'
      })
      .when('/login', {
        templateUrl: 'views/login.html'
      })
      .when('/home', {
        templateUrl: 'views/home.html'
      })
      .when('/dashboard', {
    	  templateUrl: 'views/private/dashboard.html'
      })

      .when('/definations', {
    	  templateUrl: 'views/private/definations.html'
      })
      
      .when('/templates', {
        templateUrl: 'views/templates/templates.html'
      })
      
      .when('/vendormanagement', {
        templateUrl: 'views/vendormanagement/vendormanagement.html'
      })
      
      .when('/createvendormanagement', {
        templateUrl: 'views/vendormanagement/createvendormanagement.html'
      })
      .when('/createothervendordetails/:id', {
        templateUrl: 'views/vendormanagement/createothervendordetails.html'
      })
      .when('/editvendormanagement/:id', {
        templateUrl: 'views/vendormanagement/editvendormanagement.html'
      })
      
      .when('/viewvendormanagement/:id', {
        templateUrl: 'views/vendormanagement/viewvendormanagement.html'
      })
      
      .when('/viewvendorbankdetails/:id', {
        templateUrl: 'views/vendormanagement/viewvendorbankdetails.html'
      })
      
      .when('/viewvendorotherdetails/:id', {
        templateUrl: 'views/vendormanagement/viewvendorotherdetails.html'
      })
      
      .when('/vendoragreement', {
        templateUrl: 'views/vendormanagement/vendoragreement.html'
      })
      
      .when('/createvendoragreement/:vendorId', {
        templateUrl: 'views/vendormanagement/createvendoragreement.html'
      })
      
      .when('/editvendoragreement/:id/:vendorId', {
        templateUrl: 'views/vendormanagement/editvendoragreement.html'
      })
      
      .when('/viewvendoragreement/:vendorId/:agreementId', {
        templateUrl: 'views/vendormanagement/viewvendoragreement.html'
      })
      
      .when('/createtemplate', {
        templateUrl: 'views/templates/createtemplate.html'
      })
      .when('/viewtemplate/:id', {
        templateUrl: 'views/templates/viewtemplate.html'
      })
      .when('/edittemplate/:id', {
        templateUrl: 'views/templates/edittemplate.html'
      })
      .when('/admin/viewrole/:id', {
        templateUrl: 'views/administration/viewrole.html'
      })
      .when('/admin/roles', {
        templateUrl: 'views/administration/roles.html'
      })
      .when('/admin/role/:id/edit', {
        templateUrl: 'views/administration/editpermissions.html'
      })
      .when('/admin/addrole', {
        templateUrl: 'views/administration/addrole.html'
      })
      .when('/admin/viewmctasks', {
        templateUrl: 'views/administration/makerchecker.html'
      })
      .when('/admin/users', {
        templateUrl: 'views/administration/users.html'
      })
      
       .when('/profile',{
        templateUrl: 'views/profile.html'
      })
       .when('/messanger',{
        templateUrl: 'views/messanger.html'
      })
       .when('/addnewmesage',{
        templateUrl: 'views/addmessage.html'
      })
      
      .when('/organization', {
        templateUrl: 'views/administration/organization.html'  
      })
      .when('/system', {
        templateUrl: 'views/administration/system.html'  
      })
      .when('/mappingconfig', {
          templateUrl: 'views/system/mappingconfiguration.html'  
        })
      .when('/charges', {
        templateUrl: 'views/products/charges.html'
      })
      .when('/viewcharge/:id', {
        templateUrl: 'views/products/viewcharge.html'
      })
     
      .when('/tasks', {
        templateUrl: 'views/tasks.html'
      })
      .when('/currconfig', {
        templateUrl: 'views/organization/currencyconfig.html'
      })
      .when('/createenum', {
        templateUrl: 'views/system/createenum.html'
      })
      .when('/search/:query', {
        templateUrl: 'views/search/glresults.html'
      })  
      .when('/usersetting', {
        templateUrl: 'views/administration/usersettings.html'
      })
      .when('/users/', {
        templateUrl: 'views/administration/userslist.html'
      })
      .when('/createuser/', {
        templateUrl: 'views/administration/createuser.html'
      })
      .when('/viewuser/:id', {
        templateUrl: 'views/administration/viewuser.html'
      })
      .when('/edituser/:id', {
        templateUrl: 'views/administration/edituser.html'
      })
     
      .when('/managefunds/', {
        templateUrl: 'views/organization/managefunds.html'
      })
      .when('/nav/offices', {
        templateUrl: 'views/navigation/offices.html'
      })
     
      .when('/createglaccount', {
        templateUrl: 'views/accounting/createglaccounting.html'
      })
      .when('/viewglaccount/:id', {
        templateUrl: 'views/accounting/viewglaccounting.html'
      })
      .when('/editglaccount/:id', {
        templateUrl: 'views/accounting/editglaccounting.html'
      })
    
      .when('/viewcode/:id', {
          templateUrl: 'views/system/viewcode.html'
      })
      .when('/datatables', {
          templateUrl: 'views/system/datatables.html'
      })
      .when('/viewdatatable/:tableName', {
        templateUrl: 'views/system/viewdatatable.html'
      })
      .when('/createdatatable', {
          templateUrl: 'views/system/createdatatable.html'
      })
      .when('/editdatatable/:tableName', {
          templateUrl: 'views/system/editdatatable.html'
      })
      .when('/makedatatableentry/:tableName/:entityId', {
          templateUrl: 'views/system/makedatatableentry.html'
      })
      .when('/viewdatatableentry/:tableName/:entityId/:resourceId', {
          templateUrl: 'views/system/viewdatatableentry.html'
      })
       .when('/viewsingledatatableentry/:tableName/:entityId', {
                templateUrl: 'views/system/viewdatatableentry.html'
       })
      .when('/addcode', {
          templateUrl: 'views/system/addcode.html'
      })
      
      .when('/codes', {
          templateUrl: 'views/system/codes.html'
      })
      .when('/editcode/:id', {
          templateUrl: 'views/system/editcode.html'
      })
      .when('/reports', {
          templateUrl: 'views/system/reports.html'
      })
      .when('/system/viewreport/:id', {
          templateUrl: 'views/system/viewreport.html'
      })
      .when('/createreport', {
          templateUrl: 'views/system/createreport.html'
      })
      .when('/editreport/:id', {
          templateUrl: 'views/system/editreport.html'
      })
      .when('/holidays', {
          templateUrl: 'views/organization/holidays.html'
      })
      .when('/createholiday', {
          templateUrl: 'views/organization/createholiday.html'
      })
      .when('/viewholiday/:id', {
          templateUrl: 'views/organization/viewholiday.html'
      })
     
      .when('/attachmeeting/:id/:entityType', {
        templateUrl: 'views/groups/attachmeeting.html'
      })
     
      .when('/accounttransfers/:accountType/:accountId', {
        templateUrl: 'views/accounttransfers/make_accounttransfer.html'
      })
      .when('/viewsavingtrxn/:accountId/trxnId/:id', {
        templateUrl: 'views/savings/view_saving_transaction.html'
      })
      .when('/viewgroup/:id', {
        templateUrl: 'views/groups/viewgroup.html'
      })
      .when('/editgroup/:id', {
        templateUrl: 'views/groups/editgroup.html'
      })
      .when('/addmember', {
        templateUrl: 'views/groups/addmember.html'
      })
      .when('/groupattendance', {
        templateUrl: 'views/groups/groupattendance.html'
      })
      .when('/closegroup/:id', {
        templateUrl: 'views/groups/closegroup.html'
      })
      .when('/addrole/:id', {
        templateUrl: 'views/groups/addrole.html'
      })
      .when('/membermanage/:id', {
        templateUrl: 'views/groups/membermanage.html'
      })
      .when('/transferclients/:id', {
        templateUrl: 'views/groups/transferclients.html'
      })
    
      .when('/centerattendance', {
        templateUrl: 'views/centers/centerattendance.html'
      })
      .when('/createcharge', {
          templateUrl: 'views/products/createcharge.html'
      })
      .when('/editcharge/:id', {
        templateUrl: 'views/products/editcharge.html'
      })
      .when('/entercollectionsheet', {
        templateUrl: 'views/collection/entercollectionsheet.html'
      })
      .when('/assignstaff/:id/:entityType', {
        templateUrl: 'views/groups/assignstaff.html'
      })
      .when('/global', {
        templateUrl: 'views/administration/global.html'
      })
     
      .when('/bulkloan', {
        templateUrl: 'views/organization/bulkloan.html'
      })
      .when('/audit', {
        templateUrl: 'views/system/audit.html'
      })
      .when('/viewaudit/:id', {
        templateUrl: 'views/system/viewaudit.html'
      })
      .when('/createclosure', {
        templateUrl: 'views/accounting/createclosure.html'
      })
      
      .when('/about', {
        templateUrl: 'views/system/aboutobs.html'
      })
    
      
       .when('/clientinvoice/:id', {
        templateUrl : 'views/clients/clientinvoice.html'
      })
      
        .when('/billingorder/:id', {
        templateUrl: 'views/clients/viewclient.html'  
      })
      .when('/billmaster/:id', {
        templateUrl: 'views/clients/viewclient.html'  
      })
      
      .when('/hardwareswap/:id/:clientId/:orderId', {
        templateUrl: 'views/clients/hardwareSwap.html'
      })
     .when('/prices/:id', {
         templateUrl: 'views/organization/prices.html'
      })
      .when('/createprice/:id', {
          templateUrl: 'views/organization/createprice.html'
      })
      .when('/viewprice/:id/:planId', {
          templateUrl: 'views/organization/viewprice.html'
      })
      .when('/editprice/:id', {
          templateUrl: 'views/organization/editprice.html'
      })
      
      .when('/viewimportfile/:id', {
        templateUrl: 'views/import/viewimport.html'
      })
      .when('/vieworder/:id/:clientId', {
        templateUrl: 'views/clients/vieworder.html'
      })
      .when('/disconnectOrder/:id', {
        templateUrl: 'views/clients/disconnectrorder.html'
      })
      .when('/renewalOrder/:id/:clientId', {
        templateUrl: 'views/clients/renewalorder.html'
      })
      .when('/provision/:orderId/:clientId/:serviceId', {
        templateUrl: 'views/clients/createprovisioning.html'
      })
      
     
      .when('/currencydetails', {
        templateUrl: 'views/organization/currencydetails.html'
      })
      .when('/createcurrencydetails', {
        templateUrl: 'views/organization/createcurrencydetails.html'
      })
      .when('/viewcurrencydetails/:id', {
        templateUrl: 'views/organization/viewcurrencydetails.html'
      })
      .when('/editcurrencydetails/:id', {
        templateUrl: 'views/organization/editcurrencydetails.html'
      })
      /*.when('/adjustments/:id', {
        templateUrl: 'views/clients/adjustments.html'
      })*/
      .when('/payments/:id', {
        templateUrl: 'views/clients/payments.html'
      })
      
       
      .when('/addPrice/:id', {
        templateUrl: 'views/organization/addPrice.html'
      })
      .when('/viewPrice/:id', {
        templateUrl: 'views/organization/viewPrice.html'
      })
       .when('/viewEventPrices/:id', {
        templateUrl: 'views/organization/viewEventPrices.html'
      })
      .when('/editEventPrice/:id', {
        templateUrl: 'views/organization/editEventPrice.html'
      })
      
      .when('/viewitemdetails/:id', {
        templateUrl: 'views/logistics/inventory/viewitemdetails.html'
      })
     
      .when('/viewitem/:id/:showtype/:totalItem',{
    	  templateUrl: 'views/logistics/inventory/item/viewitem.html'
      })
      
      .when('/viewgrn/:id',{
    	  templateUrl: 'views/logistics/inventory/grn/viewgrn.html'
      })
      
      .when('/viewmovedmrn/:id',{
    	  templateUrl: 'views/logistics/inventory/mrn/viewmovedmrn.html'
      })
     
       .when('/viewfinancialtran/:transactionId/:clientId', {
        templateUrl: 'views/clients/viewfinancialtransaction.html'  
      })
      
       .when('/addonetimesale/:id/:officeId', {
        templateUrl: 'views/clients/addonetimesale.html'
      })
      .when('/devicerental/:id', {
          templateUrl: 'views/clients/devicerental.html'
        })
      .when('/viewonetimesale/:id/:clientId', {
        templateUrl: 'views/clients/viewonetimesale.html'
      })
      .when('/allocatehardwareonetimesale/:itemcode/:quantity/:clientId/:saleId', {
        templateUrl: 'views/clients/allocatehardwareonetimesale.html'
      })
      .when('/event', {
        templateUrl: 'views/organization/event.html'
      })
      
       .when('/createEvent', {
        templateUrl: 'views/organization/createEvent.html'
      })   
       .when('/viewEvent/:id', {
        templateUrl: 'views/organization/viewEvent.html'
      })
      .when('/editEvent/:id', {
        templateUrl: 'views/organization/editEvent.html'
      })
      .when('/addEventPrice/:id', {
        templateUrl: 'views/organization/addEventPrice.html'
      })
      .when('/viewPrice/:id', {
        templateUrl: 'views/organization/viewPrice.html'
      })
       .when('/viewEventPrice/:id', {
        templateUrl: 'views/organization/viewEventPrice.html'
      })
      .when('/editEventPrice/:id', {
        templateUrl: 'views/organization/editEventPrice.html'
      })
       
         .when('/osdMessage/:id', {
          templateUrl : 'views/clients/osdMessage.html'
        })
         .when('/createhardwareplanmapping', {
        templateUrl: 'views/system/createhardwareplanmapping.html'
      })
      .when('/viewhardwareplanmapping/:id', {
          templateUrl : 'views/system/viewhardwareplanmapping.html'
        })
      .when('/edithardwareplanmapping/:id', {
          templateUrl : 'views/system/edithardwareplanmapping.html'
        })
        .when('/association/:id/:orderId', {
          templateUrl : 'views/clients/association.html'
        })
         .when('/viewAssociation/:clientId/:id', {
          templateUrl : 'views/clients/viewAssociation.html'
        })
         .when('/editAssociation/:clientId/:id', {
          templateUrl : 'views/clients/editAssociation.html'
        })
         .when('/viewhardwareplanmapping/:id', {
          templateUrl : 'views/system/viewhardwareplanmapping.html'
        })
        .when('/createServiceMapping', {
        templateUrl: 'views/system/createServiceMapping.html'
        })
        .when('/viewServiceMapping/:id', {
        templateUrl: 'views/system/viewServiceMapping.html'
        })
         .when('/createCurrencyMapping', {
        templateUrl: 'views/system/currencyconfig.html'
        })
          .when('/createclientnewwizard', {
        templateUrl: 'views/clients/createclientnewwizard.html'  
      })
     
        .when('/editServiceMapping/:id', {
            templateUrl: 'views/system/editServiceMapping.html'
         })
         .when('/createProvisioningmapping', {
             templateUrl: 'views/system/createProvisioningmapping.html'
         })  
          .when('/createsimpleActivation', {
        templateUrl: 'views/clients/createactivation.html'  
      })
         .when('/viewprovisioningmapping/:id', {
             templateUrl: 'views/system/viewprovisioningmapping.html'
         })  
        .when('/editProvisioningMapping/:id', {
             templateUrl: 'views/system/editProvisioningMapping.html'
         })
         

	    .when('/createeventactionmapping', {
        templateUrl: 'views/system/createeventactionmapping.html'
    	})
    	.when('/vieweventactionmapping/:id', {
        templateUrl: 'views/system/vieweventactionmapping.html'
    	})
    	.when('/editeventactionmapping/:id', {
        templateUrl: 'views/system/editeventactionmapping.html'
    	})
    	.when('/editPaymentGateway/:id', {
          templateUrl: 'views/paymentgateway/editPaymentGateway.html'
         })
      
      .when('/smartSearch', {
        templateUrl: 'views/system/smartSearch.html'
      })
      .when('/help',{
        templateUrl: 'views/help.html'
      })
       .when('/addressmanage', {
        templateUrl: 'views/organization/addressManage.html'
      })
       .when('/addresstreeview', {
        templateUrl: 'views/organization/addressTreeview.html'
      }) 
     
      .when('/editProvison/:id', {
        templateUrl: 'views/clients/editProvisioning.html'
      })
       .when('/createsmtp/:id', {
        templateUrl: 'views/administration/createsmtp.html'
      })
      .when('/itemsale/:officeId',{
    	  templateUrl: 'views/organization/itemSale.html'
      })
      .when('/officeadjustments/:officeId',{
     templateUrl: 'views/organization/officeadjustments.html'
      })
      .when('/officepayments/:officeId',{
     templateUrl: 'views/organization/officepayments.html'
      })
      .when('/redemption',{
     templateUrl: 'views/organization/redemption.html'
      })
      .when('/editprovison/:orderId/:clientId/:serviceId', {
        templateUrl: 'views/clients/editProvisioning.html'
      })
     
      .when('/aboutobs', {
        templateUrl: 'views/system/about_obs.html'
      })
      .when('/addsecondsale/:id', {
        templateUrl: 'views/clients/addsecondsale.html'
      })
      .when('/createPlanMapping',{
       templateUrl: 'views/system/createPlanMapping.html'
      })      
      .when('/viewplanmapping/:id',{
       templateUrl: 'views/system/viewplanmapping.html'
      })
      .when('/editPlanMapping/:id',{
       templateUrl: 'views/system/editPlanMapping.html'
      })
      .when('/dalpaybtn', {
        templateUrl : 'views/system/daypaybutton.html'
      })
      .when('/daypaydetailsform', {
        templateUrl : 'views/system/daypaydetailsform.html'
      })
      .when('/dalpaysuccess', {
        templateUrl : 'views/system/dalpaySuccess.html'
      })
      .when('/createevenvalidation', {
        templateUrl: 'views/system/createevenvalidation.html'
      })
      .when('/ipchange/:clientId/:orderId/:serviceId',{
    	  templateUrl: 'views/clients/ipchange.html'
      })
      .when('/editsupplier/:id',{
    	  templateUrl: 'views/logistics/inventory/editsupplier.html'
      })
      .when('/provision',{
        templateUrl: 'views/system/provision.html'
      })
     
      .when('/viewcheckerinbox/:id', {
                templateUrl: 'views/system/viewcheckerinbox.html'
      })
       .when('/viewMakerCheckerTask/:commandId', {
                templateUrl: 'views/system/viewMakerCheckerTask.html'
      })
      .when('/checkeractionperformed', {
                templateUrl: 'views/system/checkerActionPerformed.html'
      })
      .when('/paymentgatewayconfig', {
        templateUrl: 'views/administration/paymentgatewayconfig.html'
      })
      .when('/eventaction', {
        templateUrl: 'views/administration/eventaction.html'
      })
      .when('/viewvouchers/:voucherId', {
        templateUrl: 'views/organization/viewvouchers.html'
      })
      .when('/orderaddons',{
    	  templateUrl : 'views/clients/orderaddons.html'
      })
      .when('/disbursements', {
        templateUrl: 'views/administration/disbursements.html'
      }) 
      .when('/editpartner/:partnerId', {
        templateUrl: 'views/organization/editpartner.html'
      })
      .when('/officepayments/:officeId/:partnerId',{
       templateUrl: 'views/organization/officepayments.html'
      })
      .when('/officeadjustments/:officeId/:partnerId',{
       templateUrl: 'views/organization/officeadjustments.html'
      })
      .when('/itemsale/:officeId/:partnerId',{
    	  templateUrl: 'views/organization/itemSale.html'
      })
      ;
     
    $locationProvider.html5Mode(false);
  };
  mifosX.ng.application.config(defineRoutes).run(function($log) {
    $log.info("Routes definition completed");
  });
}(mifosX || {}));
