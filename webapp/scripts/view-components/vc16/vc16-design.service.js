// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.vc16').factory('comVyomVyomlibVc16Design', function (comVyomVyomlibVc16Model, rxGUID, RX_DEFINITION_PICKER) {
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
            var defaultSubscriber = _.find(componentDescriptor.propertiesByName, {
                name: 'subscribers'
            }).defaultValue;
            var defaultIncident = _.find(componentDescriptor.propertiesByName, {
                name: 'incidents'
            }).defaultValue;
            var defaultChange = _.find(componentDescriptor.propertiesByName, {
                name: 'changes'
            }).defaultValue;

           

            return {
                IncidentRecDef: componentDefinition.propertiesByName.IncidentRecDef,
                subscribers: componentDefinition.propertiesByName.subscribers || defaultSubscriber,
                incidents: componentDefinition.propertiesByName.incidents || defaultIncident,
                changes: componentDefinition.propertiesByName.changes || defaultChange,
                incidentaction:componentDefinition.propertiesByName.incidentaction,
                subscriberaction: componentDefinition.propertiesByName.subscriberaction,
                changeaction: componentDefinition.propertiesByName.changeaction
                
            };
        }

        // Defining the parameters types with helper.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {
                       
                        subscribers: {
                            label: 'subscribers',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 1
                        },
                        incidents: {
                            label: 'incidents',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 2
                        },
                        changes: {
                            label: 'changes',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 3
                        },
                        incidentaction: {
                            label: 'incidentaction',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 4
                        },
                        subscriberaction: {
                            label: 'subscriberaction',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 5
                        },
                        changeaction: {
                            label: 'changeaction',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 6
                        }, 
                        IncidentRecDef: {
                            label: 'IncidentRecDef',
                            type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type, //  define which definition user can select
                            group: 'general',
                            index: 7
                        }
                    }
                },
                groups: {
                    general: {
                        label: 'General',
                        index: 1
                    }
                }
            };
        }

        return {
            //  should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comVyomVyomlibVc16Model(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();