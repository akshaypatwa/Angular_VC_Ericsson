/* This code is run at 'design' phase, in Innovation Studio.
The factory is defined in the 'config.js':
*/
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.marquee2').factory('comVyomVyomlibMarquee2Design', function (comVyomVyomlibMarquee2Model, rxGUID, RX_DEFINITION_PICKER) {
        function getRxConfig(componentDefinition, componentDescriptor) {
            return {
                id: componentDefinition.guid || rxGUID.generate(),
                type: componentDefinition.type,
                rxData: getRxData(componentDefinition, componentDescriptor),
                rxInspector: getRxInspector()
            };
        }

        // Getting configuration defined in Innovation Studio parameters.
        // We can also setup default values.
        function getRxData(componentDefinition, componentDescriptor) {
            /*var defaultMaxAmountOfStars = _.find(componentDescriptor.propertiesByName, {
                name: 'maxAmountOfStars'
            }).defaultValue;

            var defaultDefaultValueStars = _.find(componentDescriptor.propertiesByName, {
                name: 'defaultValueStars'
            }).defaultValue;

            var defaultColorStarsSelected = _.find(componentDescriptor.propertiesByName, {
                name: 'colorStarsSelected'
            }).defaultValue;

            var defaultColorStarsNotSelected = _.find(componentDescriptor.propertiesByName, {
                name: 'colorStarsNotSelected'
            }).defaultValue;*/
           
           

            return {
				FieldID1: componentDefinition.propertiesByName.FieldID1,
                FieldID2: componentDefinition.propertiesByName.FieldID2,
				FieldID3: componentDefinition.propertiesByName.FieldID3,
                FieldID4: componentDefinition.propertiesByName.FieldID4,
				FieldID1Title: componentDefinition.propertiesByName.FieldID1Title,
                FieldID2Title: componentDefinition.propertiesByName.FieldID2Title,
				FieldID3Title: componentDefinition.propertiesByName.FieldID3Title,
                FieldID4Title: componentDefinition.propertiesByName.FieldID4Title,
				//ColourHeader: componentDefinition.propertiesByName.ColourHeader,
                ColourText: componentDefinition.propertiesByName.ColourText,
				IncidentRecDef: componentDefinition.propertiesByName.IncidentRecDef,
                FilterExp: componentDefinition.propertiesByName.FilterExp,
				Width: componentDefinition.propertiesByName.Width,
                duration: componentDefinition.propertiesByName.duration,
				recordSeperator: componentDefinition.propertiesByName.recordSeperator
            };
        }

        // Defining the parameters types with helper.
        // We "overwrite" the options from the config.js files with those ones.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {
                         FieldID1: {
                            label: 'Field ID1',
                            type: 'rx-inspector-expression-node-field', // Standard Inspector
							
                            group: 'general',
                            index: 2
                        },
						FieldID1Title: {
                            label: 'Field ID1 Title',
                            type: 'rx-inspector-expression-node-field', // Standard Inspector
							
                            group: 'general',
                            index: 3
                        },
						FieldID2: {
                            label: 'Field ID2',
                            type: 'rx-inspector-expression-node-field', // Standard Inspector
							
                            group: 'general',
                            index: 4
                        },
						FieldID2Title: {
                            label: 'Field ID2 Title',
                            type: 'rx-inspector-expression-node-field', // Standard Inspector
							
                            group: 'general',
                            index: 5
                        },
						FieldID3: {
                            label: 'Field ID3',
                            type: 'rx-inspector-expression-node-field', // Standard Inspector
							
                            group: 'general',
                            index: 6
                        },
						FieldID3Title: {
                            label: 'Field ID3 Title',
                            type: 'rx-inspector-expression-node-field', // Standard Inspector
							
                            group: 'general',
                            index: 7
                        },
						FieldID4: {
                            label: 'Field ID4',
                            type: 'rx-inspector-expression-node-field', // Standard Inspector
							
                            group: 'general',
                            index: 8
                        },
						FieldID4Title: {
                            label: 'Field ID4 Title',
                            type: 'rx-inspector-expression-node-field', // Standard Inspector
							
                            group: 'general',
                            index: 9
                        },
						Width: {
                            label: 'Component Width',
                            type: 'rx-inspector-expression-node-field', // Standard Inspector							
                            group: 'display',
							defaultValue: '1038',							
                            index: 2
                        },
						recordSeperator: {
                            label: 'Incident Record Seperator String',
                            type: 'rx-inspector-text-input', // Standard Inspector	
							tooltip: {
                                        text: "Enter a symbol string which would act as delimeter for the records dispalyed.",
                                        placement: "left"
                                    },
							defaultValue: '||||||||||||||',		
                            group: 'display',
                            index: 3
                        },
						IncidentRecDef: {
                            label: 'Incident Record Definition',
                            //type: 'rx-inspector-expression-node-field', // Standard Inspector
							type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type, //  define which definition user can select
                            group: 'general',
                            index: 1
                        },
						FilterExp: {
                            label: 'Filter By Expression',
                            type: 'rx-inspector-expression-node-field', // Standard Inspector
							tooltip: {
                                        text: "Enter a condition to control which items should appear on the list with marquee effect in the deployed application.",
                                        placement: "left"
                                    },
							//isReadOnly: _.isEmpty(e.name),
							when: {and: [{ne: {"rxData/IncidentRecDef": void 0}}, {ne: {"rxData/IncidentRecDef": ""}}]},
                            group: 'filter',
                            index: 1
                        },
						/* ColourHeader: {
                            label: 'Background Colour of Marquee Header',
                            type: 'com-bmc-vyomlib-inspector-marquee1-color-picker-select', // Custom inspector 'comExampleSamplelibraryInspectorStarClickRatingColorPickerSelect'
                            group: 'display',
                            index: 1
                        }, */
                        ColourText: {
                            label: 'Background Colour of Marquee Text',
                            type: 'com-vyom-vyomlib-inspector-marquee2-color-picker-select',  // Custom inspector //'comExampleSamplelibraryInspectorStarClickRatingColorPickerSelect'
							//'comExampleSamplelibraryInspectorStarClickRatingColorPickerSelect
							//com-bmc-vyomlib-inspector-marquee1-color-picker-select
                            group: 'display',
                            index: 1
                        },
                        duration: {
                            label: 'Marquee Scroll Amount',
                            type: 'rx-inspector-text-input', // Standard Inspector
							defaultValue: '50000',		
                            group: 'display',
                            index: 4
                        },
                    }
                },
                groups: {
                  general: {
                        label: 'General',
                        index: 1
                    },
					filter: {
                        label: 'Filter',
                        index: 2,
						closed: 1
                    },
					display: {
                        label: 'Display Properties',
                        index: 3,
						closed: 1
                    }
                }
            };
        }

        return {
            //  should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comVyomVyomlibMarquee2Model(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();