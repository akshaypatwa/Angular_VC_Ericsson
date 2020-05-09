(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.marquee2')
        .config(function (rxViewComponentProvider) {
        rxViewComponentProvider.registerComponent([
            {
                name: 'marquee2',
                group: 'vyomlib',
                icon: 'internet_plus_circle',
                type: 'com-vyom-vyomlib-marquee2',  
                designType: 'com-vyom-vyomlib-marquee2-design', 
				designManagerService: 'comVyomVyomlibMarquee2Design',
                bundleId: 'com.vyom.vyomlib',
                propertiesByName: [
					{
                        name: 'FieldID1',
                        isConfig: true,
						//isRequired: true,
                        type: 'string'

                    },
					{
                        name: 'FieldID1Title',
                        isConfig: true,
						//isRequired: true,
                        type: 'string'

                    },
					{
                        name: 'FieldID2',
                        isConfig: true,
						//isRequired: true,
                        type: 'string'

                    },
					{
                        name: 'FieldID2Title',
                        isConfig: true,
						//isRequired: true,
                        type: 'string'

                    },
					{
                        name: 'FieldID3',
                        isConfig: true,
						//isRequired: true,
                        type: 'string'

                    },
					{
                        name: 'FieldID3Title',
                        isConfig: true,
						//isRequired: true,
                        type: 'string'

                    },
					{
                        name: 'FieldID4',
                        isConfig: true,
						//isRequired: true,
                        type: 'string'

                    },
					{
                        name: 'FieldID4Title',
                        isConfig: true,
						//isRequired: true,
                        type: 'string'

                    },
                    {
                        name: 'ColourText',
                        isConfig: true,
                        type: 'string',
						defaultValue: 'grey'

                    },
                    {
                        name: 'IncidentRecDef',
                        isConfig: true,
						//isRequired: true,
                        type: 'string'

                    },
                    {
                        name: 'FilterExp',
                        isConfig: true,
                        type: 'string'

                    },
                    {
                        name: 'Width',
                        isConfig: true,
                        type: 'string'

                    },
                    {
                        name: 'recordSeperator',
                        isConfig: true,
                        type: 'string'

                    },
                    {
                        name: 'duration',
                        isConfig: true
                        

                    }
                   
                   
                    


                ]
            }
        ]);
    });
})();