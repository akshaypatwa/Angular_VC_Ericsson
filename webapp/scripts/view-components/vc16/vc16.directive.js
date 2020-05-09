
(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc16')
        .directive('comVyomVyomlibVc16',

                   function (rxRecordInstanceDataPageResource,$window) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc16/com-vyom-vyomlib-vc16.directive.html',

            scope: {
                rxConfiguration: '='
            },

            link: function ($scope) {
                var _config;

                var init = function () {
                    _config = $scope.rxConfiguration.propertiesByName;
                    $scope.subscribers=_config.subscribers;
                    $scope.incidents=_config.incidents;
                    $scope.changes=_config.changes;
                    $scope.incidentaction=_config.incidentaction;
                    $scope.subscriberaction=_config.subscriberaction;
                    $scope.changeaction=_config.changeaction;
                    $scope.IncidentRecDef=_config.IncidentRecDef;

                    $scope.getIncidentRec();             
                    $scope.mydata=[];
                    $scope.statusValue=[];
                   
                   
                    
              

                };

               
                
                $scope.getIncidentRec=function()
                {
                         var foo = rxRecordInstanceDataPageResource.withName($scope.IncidentRecDef);

                    foo.get(100, 0, { propertySelection:"2,179,1,7,8,"
                                    }).then(
                        function (allRecords) {
                            $scope.mydata = allRecords.data;
     

                        }
                    );
                    
                     foo.get(100, 0, { propertySelection:"2,179,1,7,8,",              queryExpression: "'7' == 0"
                                    }).then(
                        function (allRecords) {
                            $scope.statusValue[0] = allRecords.data.length;//New
     

                        }
                    );
                    
                    foo.get(100, 0, { propertySelection:"2,179,1,7,8,",              queryExpression: "'7' == 1"
                                    }).then(
                        function (allRecords) {
                           $scope.statusValue[1] = allRecords.data.length; // $window.Assigned 
     

                        }
                    );
                    
                    foo.get(100, 0, { propertySelection:"2,179,1,7,8,",              queryExpression: "'7' == 2"
                                    }).then(
                        function (allRecords) {
                           $scope.statusValue[2]  = allRecords.data.length;  //$window.Fixed
     

                        }
                    );
                     foo.get(100, 0, { propertySelection:"2,179,1,7,8,",              queryExpression: "'7' == 3"
                                    }).then(
                        function (allRecords) {
                          $scope.statusValue[3]  = allRecords.data.length;  //$window.Rejected
     

                        }
                    );
                    
                     foo.get(100, 0, { propertySelection:"2,179,1,7,8,",              queryExpression: "'7' == 4"
                                    }).then(
                        function (allRecords) {
                            $scope.statusValue[4] = allRecords.data.length; //$window.Closed
     

                        }
                    );
                    
                    
                    

                    
                }
                


                init();

            }

        };
    });
})();