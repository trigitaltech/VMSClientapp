(function(module) {
  mifosX.services = _.extend(module, {
    ResourceFactoryProvider: function() {
      var baseUrl = "" , apiVer = "/obsplatform/api/v1";
      this.setBaseUrl = function(url) {baseUrl = url;};
      this.$get = ['$resource','$rootScope', function(resource,$rootScope) {
        var defineResource = function(url, paramDefaults, actions) {
        	var tempUrl =baseUrl;
        	$rootScope.hostUrl =tempUrl;
          return resource(baseUrl + url, paramDefaults, actions);
        };
        return {
          userResource: defineResource(apiVer + "/users/:userId", {}, {
            getAllUsers: {method: 'GET', params: {fields: "id,firstname,lastname,username,officeName"}, isArray: true}
          }),
          roleResource: defineResource(apiVer + "/roles/:roleId", {}, {
            getAllRoles: {method: 'GET', params: {}, isArray: true}
          }),
          rolePermissionResource: defineResource(apiVer + "/roles/:roleId/permissions", {roleId:'@roleId'}, {
            get: {method: 'GET', params: {}},
            update: {method: 'PUT'}
          }),
          permissionResource: defineResource(apiVer + "/permissions", {}, {
            get: {method: 'GET', params: {}, isArray: true},
            update: {method: 'PUT'}
          }),
          groupTemplateResource: defineResource(apiVer + "/groups/template", {}, {
              get: {method: 'GET', params: {}}
          }),
          clientAccountResource: defineResource(apiVer + "/clients/:clientId/accounts", {clientId:'@clientId'}, {
            getAllClients: {method: 'GET', params: {}}
          }),
          groupSummaryResource: defineResource(apiVer + "/runreports/:reportSource",{reportSource: '@reportSource'}, {
              getSummary: {method: 'GET', params: {}}
          }),
          //Dont remove this code
          runReportsResource: defineResource(apiVer + "/runreports/:reportSource", {reportSource : '@reportSource'}, {
            get: {method: 'GET', params: {}, isArray:true},
            getReport: {method: 'GET', params: {}}
          }),
          reportsResource: defineResource(apiVer + "/reports/:id/:resourceType", {id:'@id', resourceType:'@resourceType'}, {
            get: {method: 'GET', params: {id:'@id'}},
            getReport: {method: 'GET', params: {id:'@id'}},
            getReportDetails: {method: 'GET', params: {id:'@id'}},
            update: {method: 'PUT', params: {}}
          }),
          DataTablesResource: defineResource(apiVer + "/datatables/:datatablename/:entityId/:resourceId", {datatablename:'@datatablename',entityId:'@entityId', resourceId:'@resourceId'}, {
            getTableDetails: {method: 'GET', params: {}},
            update: {method: 'PUT'}
          }),
         
          chargeResource: defineResource(apiVer + "/charges/:chargeId", {chargeId:'@chargeId'}, {
            getAllCharges: {method: 'GET', params: {}, isArray:true},
            getCharge: {method: 'GET', params: {}},
            update: {method: 'PUT', params: {}}
          }),
          chargeTemplateResource: defineResource(apiVer + "/charges/template", {
            get: {method: 'GET', params: {}, isArray:true},
            getChargeTemplates: {method: 'GET', params: {}},
          }),
          userListResource: defineResource(apiVer + "/users/:userId", {userId:'@userId'}, {
            getAllUsers: {method: 'GET', params: {}, isArray: true},
            update: { method: 'PUT' }
          }),
          userTemplateResource: defineResource(apiVer + "/users/template", {}, {
            get: {method: 'GET', params: {}}
          }),
          globalSearch: defineResource(apiVer + "/search", {query:'@query'}, {
            search: { method: 'GET',
                      params: { query: '@query'} ,
                      isArray:true
                    }
          }),
          fundsResource: defineResource(apiVer + "/funds/:fundId", {fundId:'@fundId'}, {
            getAllFunds: {method: 'GET', params: {}, isArray: true}
          }),
          smartSearchResource: defineResource(apiVer + "/smartsearch", {}, {
              get: {method: 'GET', params: {transactionId:'@transactionId'}},
              reverse: {method: 'POST', params:{command:'reverse'}},
              search:{method: 'GET', params: {}}
            }),
            advanceSearchResource: defineResource(apiVer + "/advancesearch", {}, {
                search:{method: 'GET', params: {}}
              }),
          codeResources: defineResource(apiVer + "/codes/:codeId", {codeId:"@codeId"}, {
                getAllCodes: {method: 'GET', params: {}},
                getData: {method: 'GET', params: {}}
          }),
          codeValueResource: defineResource(apiVer + "/codes/:codeId/codevalues/:codevalueId", {codeId:'@codeId',codevalueId:'@codevalueId'}, {
            getAllCodeValues: {method: 'GET', params: {}, isArray:true},
            update: { method: 'PUT', params: {}, isArray:true }
          }),
        
          accountTransferResource: defineResource(apiVer + "/accounttransfers/:transferId", {transferId:'@transferId'}, {
              get: {method: 'GET', params: {transferId:'@transferId'}}
          }),
          accountTransfersTemplateResource: defineResource(apiVer + "/accounttransfers/template", {}, {
              get: {method: 'GET', params: {}}
          }),
          configurationResource:defineResource(apiVer + "/configurations/:configId",{configId : '@configId'}, {
            get: {method: 'GET', params: {}},
            update: {method: 'PUT', params: {}}
          }),
          configurationSMTPResource:defineResource(apiVer + "/configurations/smtp",{}, {
              get: {method: 'GET', params: {}}
            }),
          cacheResource:defineResource(apiVer + "/caches",{}, {
            get: {method: 'GET', params: {}, isArray:true},
            update: {method: 'PUT', params: {}}
          }),
          vendorManagementResource:defineResource(apiVer + "/vendormanagement/:vendorId",{vendorId: '@vendorId'}, {
              get: {method: 'GET', params: {}, isArray:true},
              getTemplateDetails: {method: 'GET', params: {}},
              update: {method: 'PUT', params: {}},
          }),
          vendorTemplateResource:defineResource(apiVer + "/vendormanagement/template",{}, {
             
              getTemplateDetails: {method: 'GET', params: {}},
              update: {method: 'PUT', params: {}},
          }),
          vendorOtherDetailsResource:defineResource(apiVer + "/vendorotherdetails/:vendorId",{vendorId: '@vendorId'}, {
              get: {method: 'GET', params: {}, isArray:true},
              getTemplateDetails: {method: 'GET', params: {}},
              update: {method: 'PUT', params: {}},
          }),
          VendorAgreementTemplateResource:defineResource(apiVer + "/vendoragreement/template",{vendorId: '@vendorId'}, {
              
              getTemplateDetails: {method: 'GET', params: {}},
              update: {method: 'PUT', params: {}},
          }),
          VendorAgreementResource:defineResource(apiVer + "/vendoragreement/:vendorAgreementId/:resourceType",{vendorAgreementId: '@vendorAgreementId', resourceType:'@resourceType'}, {
              get: {method: 'GET', params: {}, isArray:true},
              getTemplateDetails: {method: 'GET', params: {}},
              update: {method: 'PUT', params: {}},
          }),
          VendorAgreementDataResource:defineResource(apiVer + "/vendoragreement/:vendorId",{vendorId: '@vendorId'}, {
              get: {method: 'GET', params: {}, isArray:true},
              getTemplateDetails: {method: 'GET', params: {}},
              update: {method: 'PUT', params: {}},
          }),
       
          auditResource: defineResource(apiVer + "/audits/:templateResource", {templateResource:'@templateResource'}, {
            get: {method: 'GET', params: {}},
            search: {method: 'GET', params: {},isArray:true}
          }),  
          priceResource: defineResource(apiVer + "/prices/:planId", {planId:'@planId'}, {
                    getAllPrices: {method: 'GET', params: {}, isArray: true},
                    update: { method: 'PUT' }
           }),
           userChatResource: defineResource(apiVer + "/userchats", {}, {
               get: {method: 'GET', params: {}, isArray: false},
               update: { method: 'PUT' }
           }),
           
           updateUserChatResource: defineResource(apiVer + "/userchats/:messageId", {messageId:'@messageId'}, {
               get: {method: 'GET', params: {}, isArray: false},
               update: { method: 'PUT' }
           }),
           
           userSentMessageResource: defineResource(apiVer + "/userchats/sentmessages/", {}, {
               get: {method: 'GET', params: {}, isArray: false},
               update: { method: 'PUT' }
           }),
           deletePriceResource: defineResource(apiVer + "/prices/:priceId", {priceId:'@priceId'}, {
               update: { method: 'PUT' }
           }),
           getPriceResource: defineResource(apiVer + "/prices/pricedetails/:priceId", {priceId:'@priceId'}, {
               get: {method: 'GET', params: {}},
               update: { method: 'PUT' }
           }),
           updatePriceResource: defineResource(apiVer + "/prices/update/:priceId", {priceId:'@priceId'}, {
               update: { method: 'PUT' }
           }),
           
          priceTemplateResource: defineResource(apiVer + "/prices/template", {}, {
                      get: {method: 'GET', params: {planId:'@planId'}}
           }),
           inventoryTemplateResource: defineResource(apiVer + "/items/template", {}, {
               get: {method: 'GET', params: {}}
           }),
        changeOrderResource: defineResource(apiVer + "/orders/changePlan/:orderId", {orderId:'@orderId'}, {
            get: {method: 'GET', params: {}},
            update: { method: 'PUT' }
           
         }),
        
        getSingleOrderResource: defineResource(apiVer + "/orders/:orderId/orderprice", {orderId:'@orderId'}, {
     	  get: {method: 'GET', params: {}},
     	  update: { method: 'PUT' }
        }),
        
        OrderDisconnectResource: defineResource(apiVer + "/orders/disconnect", {}, {
       	  get: {method: 'GET', params: {}},
        }),
        
        OrderReactiveResource: defineResource(apiVer + "/orders/reactive/:orderId", {orderId:'@orderId'}, {
         	  get: {method: 'GET', params: {}},
         	 update: { method: 'PUT' }
          }),
          
        OrderreconnectResource: defineResource(apiVer + "/orders/reconnect/:orderId", {orderId:'@orderId'},{
           	update: { method: 'PUT' },
            get: {method: 'GET', params: {}},
        }),
        
        OrderTerminateResource: defineResource(apiVer + "/orders/terminate/:orderId", {orderId:'@orderId'},{
           	update: { method: 'PUT' },
        }),
        
        OrderSuspensionResource: defineResource(apiVer + "/orders/suspend/:orderId", {orderId:'@orderId'},{
           	update: { method: 'PUT' },
            get: {method: 'GET', params: {}},
        }),
        OrderrenewalResourceTemplate: defineResource(apiVer + "/orders/renewalorder", {},{
        	 get: {method: 'GET', params: {}},
        	update: { method: 'PUT' }
        }),
        
        LicenseResource: defineResource(apiVer + "/licensekey/:key1", {key:'@key'},{
       	 get: {method: 'GET', params: {}},
       	update: { method: 'PUT' }
       }),
       KeyInfoResource: defineResource(apiVer + "/keyinfo", {},{
         	 get: {method: 'GET', params: {}}
         }),
        OrderrenewalResource: defineResource(apiVer + "/orders/renewal/:orderId", {orderId:'@orderId'},{
       	update: { method: 'PUT' }
       }),
       
         voucherpinsByIdResource: defineResource(apiVer + "/vouchers/voucherslist/:voucherId", {voucherId:'@voucherId'}, {
           }),
          CancelvoucherpinResource: defineResource(apiVer + "/vouchers/cancel/:voucherId", {voucherId:'@voucherId'}, {
        	  update: { method: 'PUT' }
           }),
        
         discountResource: defineResource(apiVer + "/discount/:discountId", {discountId:'@discountId'}, {
             get: {method: 'GET', params: {}, isArray: true},
         	  update: { method: 'PUT' }
            }),
            
            cancelVoucherTemplateResource: defineResource(apiVer + "/vouchers/cancel/template", {}, {
                get: {method: 'GET', params: {}}
               }),
             
         prospectTemplateResource: defineResource(apiVer + "/prospects/template", {}, {
             	getTemplate: {method: 'GET', params: {}},
             	update: {method: 'PUT', params: {}}
             	}),
        
       currencyResource: defineResource(apiVer + "/countrycurrency/:id/:resourceType", {id:'@id', resourceType:'@resourceType'}, {
            update: {method: 'PUT', params: {}}
           }),
       currencyTemplateResource: defineResource(apiVer + "/countrycurrency/template", {}, {
           get: {method: 'GET', params: {}}
           }),
           
       
                clientInvoiceResource: defineResource(apiVer + "/billingorder/:clientId", {clientId:'@clientId'}, {
                    get: {method: 'GET', params: {}},
                    update: { method: 'PUT'}
                }),
                
                eventPriceTemplateResource: defineResource(apiVer + "/eventprice/template/:resourceType",{eventId:'@eventId', resourceType:'@resourceType'},  {
              	  get: {method: 'GET', params: {eventId:'@eventId'}, isArray:true},
              	  getpriceDetails: {method: 'GET', params: {eventId:'@eventId'}}
                }),
                eventpriceResource: defineResource(apiVer + "/eventprice/:eventId/:resourceType",{eventId:'@eventId', resourceType:'@resourceType'},  {
              	  getprice: {method: 'GET', params: {eventId:'@eventId'}, isArray:true}
                }),
                eventPriceEditResource: defineResource(apiVer + "/eventprice/singleeventprice/:id",{id:'@id'},  {
              	  geteventpricedetail: {method: 'GET', params: {id:'@id'}},
              	  update: {method: 'PUT', params: {}}
                }),
                eventPriceUpdateResource: defineResource(apiVer + "/eventprice/:id",{id:'@id'},  {
                	  update: {method: 'PUT', params: {}}
                }),
                
               singleItemDetailResource: defineResource(apiVer + "/itemdetails/singleitem/:itemId", {}, {
                   get: {method: 'GET', params: {}}	
               }),
                
                 grnUpdateResource: defineResource(apiVer + "/itemdetails/editgrn/:grnId", {grnId: '@grnId'}, {
                     get: {method: 'GET', params: {}},
                     update: {method: 'PUT', params: {}}
                 }),
                 grnIdResource: defineResource(apiVer + "/itemdetails/grn/template", {}, {
                     get: {method: 'GET', params: {},isArray: true}	
                 }),
                 
		        itemQualityResource: defineResource(apiVer + "/itemdetails/itemquality", {}, {
                     get: {method: 'GET', params: {}}	
                 }),	
                 
                financialResource: defineResource(apiVer + "/financialTransactions/:transactionId/invoice", {transactionId:'@transactionId'}, {
             	  getAllDetails: {method: 'GET', params: {}}
                }),
              
               oneTimeSaleAllocation: defineResource(apiVer + "/onetimesales/:orderId/allocation", {orderId:'@orderId'}, {
                get: {method: 'GET', params: {}}
                 }),
                 
             allocateHardwareResource: defineResource(apiVer + "/itemdetails/allocation", {}, {
                get: {method: 'GET', params: {}}
                }),
               
                eventEditResource: defineResource(apiVer + "/eventmaster/:eventId",{eventId:'@eventId'},  {
              	  get: {method: 'GET', params: {} },
              	  update: {method: 'PUT'}
                }),
                eventTemplateResource: defineResource(apiVer + "/eventmaster/template",{},  {
              	  get: {method: 'GET', params: {}}
                }),
              
                eventPriceTemplateResource: defineResource(apiVer + "/eventprice/template/:resourceType",{eventId:'@eventId', resourceType:'@resourceType'},  {
              	  get: {method: 'GET', params: {eventId:'@eventId'}, isArray:true},
              	  getpriceDetails: {method: 'GET', params: {eventId:'@eventId'}}
                }),
                eventpriceResource: defineResource(apiVer + "/eventprice/:eventId/:resourceType",{eventId:'@eventId', resourceType:'@resourceType'},  {
              	  getprice: {method: 'GET', params: {eventId:'@eventId'}, isArray:true}
                }),
               
            AddressTemplateResource: defineResource(apiVer + "/address/template/:city", {city:'@city'}, {
                get: {method: 'GET', params: {}}
              }),
              /*singleStatementResource: defineResource(apiVer + "/billmaster/:billId/billdetails", {billId:'@billId'}, {
                  get: {method: 'GET', params: {},isArray:true}
                }),*/
            addressEditResource: defineResource(apiVer + "/address/addressdetails/:clientId",{clientId:'@clientId'},  {
            	  get: {method: 'GET', params: {}},
            	  getAll: {method: 'GET', params: {clientId:'@clientId'}}
              }),
           addressResource: defineResource(apiVer + "/address/:clientId",{clientId:'@clientId'},  {
        	   getAllAddresses: {method: 'GET', params: {}},
            	update: {method: 'PUT', params: {}}        	 
          }),
          osdResource:  defineResource(apiVer + "/orders/retrackOsdmessage/:id/:orderId",{id:'@id',orderId:'@orderId'},  {
         	 getPost: {method: 'POST', params: {id:'@id',orderId:'@orderId'} }
          }),         
          
          deAssociationResource: defineResource(apiVer + "/associations/deassociation/:id", {id:'@id'}, {
        	  update: { method: 'PUT'}
          }),
          
          associationTemplate:  defineResource(apiVer + "/associations/template",{},  {
         	 get: {method: 'GET', params: {}}     	
          }),
          
          associationSaveResource:  defineResource(apiVer + "/associations/:clientId",{clientId:'@clientId'},  {
         	 get: {method: 'GET', params: {}}
          }),
          associationUpdateResource:  defineResource(apiVer + "/associations/:associationId",{associationId:'@associationId'},  {
          	 update: { method: 'PUT'}
           }),       
          mappingResource: defineResource(apiVer + "/servicemapping/:servicemapId", {servicemapId:'@servicemapId'}, {
              get: {method: 'GET', params: {}},
              update: { method: 'PUT'}
          }),
          hardwareMappingResource: defineResource(apiVer + "/hardwaremapping/:hardwaremapId", {hardwaremapId:'@hardwaremapId'}, {
              getDetails: {method: 'GET', params: {}},
              update: { method: 'PUT'}
          }) ,   
          
          hardwaretemplateMappingResource: defineResource(apiVer + "/hardwaremapping/template", {}, {
                getTemplateData: {method: 'GET', params: {}}
         }),
         hardwareSwapResource: defineResource(apiVer + "/hardwareswapping/:clientId",{clientId:'@clientId'},  {
       	  get: {method: 'GET', params: {clientId:'@clientId'}}
         }),
       
         serviceMappingResource: defineResource(apiVer + "/servicemapping/:serviceMappingId", {serviceMappingId: '@serviceMappingId'}, {
               update: { method: 'PUT' }
           }),
           serviceMappingtemplateResource: defineResource(apiVer + "/servicemapping/template", {}, {
           	  getAllserviceMapping: {method: 'GET', params: {}}
             }),
             
             provisioningMappingResource: defineResource(apiVer + "/provisioning/:provisioningId", {provisioningId: '@provisioningId'}, {
             	  getprovisiongData: {method: 'GET', params: {}, isArray: true},
                get: {method: 'GET', params: {}},
                update: { method: 'PUT' }
           }),
           
           provisioningResource: defineResource(apiVer + "/provisioning/:clientId", {clientId: '@clientId'}, {
          	  getprovisiongData: {method: 'GET', params: {}, isArray: true},
             get: {method: 'GET', params: {}},
             update: { method: 'PUT' }
        }),
        provisioningserviceResource: defineResource(apiVer + "/provisioning/serviceparams/:orderId", {orderId: '@orderId'}, {
      	  getprovisiongData: {method: 'GET', params: {}, isArray: true},
         get: {method: 'GET', params: {}},
         update: { method: 'PUT' }
    }),
    provisioningtemplateMappingResource: defineResource(apiVer + "/provisioning/template/:orderNo", {orderNo: '@orderNo'}, {
            	
           }),
           
           
         provisioningCreatetemplateDataResource: defineResource(apiVer + "/provisioning/provisiontemplate/:orderId", {orderId:'@orderId'}, {
        	   get: {method: 'GET', params: {}}
           }),
         processRequestResource: defineResource(apiVer + "/provisioning/processRequest/:id", {id: '@id'}, {
         	  get: {method: 'GET', params: {}}
          }),
      
           provisioningtemplateDataResource: defineResource(apiVer + "/provisioning/serviceparmas/:orderId", {orderId:'@orderId'}, {
          	  get: {method: 'GET', params: {}}
            }),
            provisioningIpChangeResource: defineResource(apiVer + "/provisioning/ipdetails/:orderId", {orderId:'@orderId'}, {
            	  get: {method: 'GET', params: {}},
            	  update: { method: 'PUT'}
              }),
            
	       EventActionMappingResource: defineResource(apiVer + "/eventactionmapping/:id", {id:'@id'}, {
               getDetails: {method: 'GET', params: {}},
               update: { method: 'PUT'}
           }),
       
           applyPromotionCodeResource: defineResource(apiVer + "/orders/applypromo/:orderId", {orderId:'@orderId'}, {
               get: {method: 'GET', params: {}, isArray: true},
               update: { method: 'PUT' }
           }),
           
           EventActionMappingTemplateResource: defineResource(apiVer + "/eventactionmapping/template", {}, {
         	  get: {method: 'GET', params: {}}
           })  ,
           
           downloadPaymentGatewayData: defineResource(apiVer+"/paymentgateways/download",{},{
        	   get: {method: 'GET', params: {}, isArray: true}
           }),
	       
          
	       
	       addCountryResource: defineResource(apiVer + "/address/country/new",{},  {
        	  get: {method: 'POST', params: {}}
	       }),
	       editCountryResource: defineResource(apiVer + "/address/country/:id",{id: '@id'},  {
        	 update: { method: 'PUT' }
         }),
         addStateResource: defineResource(apiVer + "/address/state/new",{},  {
       	  get: {method: 'POST', params: {}}
       	  
        }),
        editStateResource: defineResource(apiVer + "/address/state/:id",{id: '@id'},  {
        	update: { method: 'PUT' }
         	  
         }),
        addCityResource: defineResource(apiVer + "/address/city/new",{},  {
         	  get: {method: 'POST', params: {}}
         	  
          }),
          editCityResource: defineResource(apiVer + "/address/city/:id",{id: '@id'},  {
        	  update: { method: 'PUT' }
         	  
          }),
          
          orderExtensionResource: defineResource(apiVer + "/orders/extension/:orderId", {orderId:'@orderId'}, {
             get: {method: 'GET', params: {}},
             update: { method: 'PUT' }
          }),
         
            officePaymentsTemplateResource: defineResource(apiVer + "/officepayments/template", {}, {
                getPayments: {method: 'GET', params: {}}
            }),
            officePaymentsResource: defineResource(apiVer + "/officepayments/:officeId", {officeId:'@officeId'}, {
                postPayments: {method: 'POST', params: {officeId:'@officeId'}}
            }),
            officeAdjustmentsTemplateResource: defineResource(apiVer + "/officeadjustments/template", {}, {
                getAdjustments: {method: 'GET', params: {}}
            }),
            officeAdjustmentsResource: defineResource(apiVer + "/officeadjustments/:officeId", {officeId:'@officeId'}, {
                postAdjustments: {method: 'POST', params: {officeId:'@officeId'}}
            }),
          
            agentsResource: defineResource(apiVer + "/agents", {}, {
                postAgent: {method: 'POST', params: {}}
            }),
            
            ippoolingDetailsResource: defineResource(apiVer + "/ippooling/search", {query: '@query'}, {
        	  getIpAddress: {method: 'GET', params: {query: '@query'}}	
             }),
            
            provisioningUpdateResource: defineResource(apiVer + "/provisioning/serviceparams/:orderId", {orderId:'@orderId'}, {
                update: { method: 'PUT' }
            }),
            
            planMappingResource: defineResource(apiVer + "/planmapping/:planMappingId", {planMappingId:'@planMappingId'}, {
                get: {method: 'GET', params: {}, isArray: true},
                getPlanMapping: {method: 'GET', params: {planMappingId:'@planMappingId'}},
                update: { method: 'PUT'}
            }),  
            planMappingtemplateResource: defineResource(apiVer + "/planmapping/template", {}, {
             	  getAllPlanMapping: {method: 'GET', params: {}}
            }),
            
            EventValidationResource: defineResource(apiVer + "/eventvalidation/:id", {id:'@id'}, {
                get: {method: 'GET', params: {}, isArray: true},
                getDetails: {method: 'GET', params: {}},
                update: { method: 'PUT'}
            }),
            
            
            provisionactionsResource: defineResource(apiVer + "/provisioningactions/:id", {id:'@id'}, {
                get: {method: 'GET', params: {}, isArray: true},
                update: { method: 'PUT'}
            }),
            
            
      
            logoutResource: defineResource(apiVer + "/logout", {id:'@id'}, {
                getAll: {method: 'GET', params: {}}
            }),
            provisionResource: defineResource(apiVer + "/adapter", {}, {
                get: {method: 'GET', params: {}}
            }),
            provisionLogResource: defineResource(apiVer + "/adapter/logs", {}, {}),
            
           
            
            paymentGatewayConfigurationResource:defineResource(apiVer + "/paymentgatewayconfigs/:configId",{configId : '@configId'}, {
                get: {method: 'GET', params: {}},
                update: {method: 'PUT', params: {}}
              }),
              
            checkerInboxResource: defineResource(apiVer + "/makercheckers/:templateResource", {templateResource: '@templateResource'}, {
                get: {method: 'GET', params: {}},
                search: {method: 'GET', params: {}, isArray: true}
            }),

            
            itemMasterDetailTemplateResource: defineResource(apiVer + "/itemdetails/serialnum", {}, {}),
            clientConfigurationResource:defineResource(apiVer + "/configurations/config",{}, {
                update: {method: 'PUT', params: {}}
            }),
            
            
            orderaddonTemplateResource: defineResource(apiVer + "/orderaddons/template/:planId", {planId :'@planId',chargeCode :'@chargeCode'}, {
                get: {method: 'GET', params: {}}
            }),
            
            orderaddonResource: defineResource(apiVer + "/orderaddons/:orderId", {orderId : '@orderId'}, {
                get: {method: 'GET', params: {}, isArray: true}
            }),
            
           
           
            patnerDisbursementResource: defineResource(apiVer + "/patnerdisbursement", {}, {
            	update: { method: 'PUT' }
            }),
           
            
            propertydeviceMappingResource: defineResource(apiVer + "/property/allocatedevice/:clientId", {clientId:'@clientId'}, {
            	update: { method: 'PUT' }
            }),
            
            
            
            serviceTransferRequestResource: defineResource(apiVer + "/servicetransfer/:clientId", {clientId:'@clientId'}, {}),
            
            KeyInfoResource: defineResource(apiVer + "/keyinfo", {},{}),
            
           
        };
      }];
    }
  });
  mifosX.ng.services.config(function($provide) {
    $provide.provider('ResourceFactory', mifosX.services.ResourceFactoryProvider);
  }).run(function($log) { $log.info("ResourceFactory initialized"); });
}(mifosX.services || {}));
