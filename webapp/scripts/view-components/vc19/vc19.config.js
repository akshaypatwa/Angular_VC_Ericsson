(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc19')
        .config(function (rxViewComponentProvider) {
        rxViewComponentProvider.registerComponent([
            {
                name: 'Approvals',
                group: 'vyomlib',
                icon: 'approvals_change',
                type: 'com-vyom-vyomlib-vc19',  
                designType: 'com-vyom-vyomlib-vc19-design', 
                designManagerService: 'comVyomVyomlibVc19Design',
                bundleId: 'com.vyom.vyomlib',
                
                propertiesByName: [
                    {
                        name: 'recordDefinitionFullName',
                        type: 'string',
                        isConfig: true
                    },
                    {
                        name: 'ApprovalFieldID',
                        isConfig: true,
                        isRequired: true,
                        type:'string'
                    },
                    {
                        name: 'CreatedDateFieldID',
                        isConfig: true,
                        isRequired: true,
                        defaultValue: 3,
                        type:'string'
                    },
                    {
                        name: 'DueDateFieldID',
                        isConfig: true,
                         isRequired: true,
                        type:'string'
                    },
                    {
                        name: 'AdditionalField',
                        isConfig: true,
                        type: 'string',
                        enableExpressionEvaluation: true
                 
                        
                    },
                    {
                        name: 'list',
                        isConfig: true
                        
                 
                        
                    },
                    {
                        name: 'displayIdFieldID',
                         isRequired: true,
                        defaultValue: 1,
                        isConfig: true
                        
                 
                        
                    },
                    {
                        name: 'ViewReqColor',
                        isConfig: true,
                        defaultValue:'orange'
                        
                 
                        
                    },
                    
                      {
                        name: 'HiddenTargetAchievment',
                        type: "boolean",
                        isConfig: true,
                        enableExpressionEvaluation: true
                        

                        
                    },
                    {
                        name: 'ViewReqGuid',
                        isConfig: true
                        

                        
                    },
                    
                    {
                        name: 'FilterExp',
                        isConfig: true
                        
                 
                        
                    }
                ]
            }
        ]);
    });
})();