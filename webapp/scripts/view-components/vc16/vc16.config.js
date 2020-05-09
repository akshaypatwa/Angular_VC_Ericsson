(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc16')
        .config(function (rxViewComponentProvider) {
        rxViewComponentProvider.registerComponent([
            {
                name: 'Panel',
                group: 'vyomlib',
                icon: 'ellipsis_horizontal_bottom',
                type: 'com-vyom-vyomlib-vc16',  
                designType: 'com-vyom-vyomlib-vc16-design', 
                designManagerService: 'comVyomVyomlibVc16Design',
                bundleId: 'com.vyom.vyomlib',
                propertiesByName: [
                                 
                    {

                        name: 'subscribers',
                        isConfig: true,
                        type: "string",
                        enableExpressionEvaluation: true, 
                        defaultValue: '0'


                    },
                     {

                        name: 'incidents',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true ,
                        defaultValue: '0'


                    },
                     {

                        name: 'changes',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true ,
                        defaultValue: '0'


                    },
                     {

                        name: 'incidentaction',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true 
                    


                    },
                     {

                        name: 'subscriberaction',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true 


                    },
                     {

                        name: 'changeaction',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true 


                    },
                     {

                        name: 'IncidentRecDef',
                        isConfig: true,
                        type: "string"
                        


                    } 


                ]
            }
        ]);
    });
})();