(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc11')
        .config(function (rxViewComponentProvider) {
        rxViewComponentProvider.registerComponent([
            {
                name: 'HomePage4',
                group: 'vyomlib',
                icon: 'server_web_node',
                type: 'com-vyom-vyomlib-vc11',  
                designType: 'com-vyom-vyomlib-vc11-design', 
                designManagerService: 'comVyomVyomlibVc11Design',
                bundleId: 'com.vyom.vyomlib',
                propertiesByName: [
                                {

                        name: 'count1',
                        isConfig: true,
                        type: "string",
                        enableExpressionEvaluation: true, 
                        defaultValue: '0'


                    },
                     {

                        name: 'count2',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true ,
                        defaultValue: '0'


                    },
                     {

                        name: 'count3',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true ,
                        defaultValue: '0'


                    },
                     {

                        name: 'actionguid1',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true 
                    


                    },
                     {

                        name: 'actionguid2',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true 


                    },
                     {

                        name: 'actionguid3',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true 


                    },
                     {

                        name: 'innerBlockWidth',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true 


                    },       
                    {

                        name: 'note1',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true 


                    },
                    {

                        name: 'note2',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true 


                    },
                    {
                        name: 'note3',
                        isConfig: true,
                        type: "string",
                         enableExpressionEvaluation: true 

                    },
                    {
                        name: 'Color1',
                        isConfig: true,
                        defaultValue:'orange'
                      
                    },
                    {
                        name: 'Color2',
                        isConfig: true,
                        defaultValue:'blue'

                    },
                    {
                        name: 'Color3',
                        isConfig: true,
                        defaultValue:'green'

                    },
                    {
                        name: 'header1',
                        isConfig: true,
                        enableExpressionEvaluation: true,
                        defaultValue:'"Manage Subscription"'
                      
                    },
                    {
                        name: 'header2',
                        isConfig: true,
                        enableExpressionEvaluation: true,
                        defaultValue:'"Incident Management"'

                    },
                    {
                        name: 'header3',
                        isConfig: true,
                        enableExpressionEvaluation: true,
                        defaultValue:'"Change Management"'

                    }

                ]
            }
        ]);
    });
})();