
(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc19')
        .directive('comVyomVyomlibVc19',

                   function (RX_RECORD_DEFINITION,rxRecordDefinitionResource,rxRecordInstanceDataPageResource,rxRecordInstanceResource, $window,rxViewComponentEventManager,rxCurrentUser,$timeout,rxString,$document,rxNotificationMessage,$sce) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc19/com-vyom-vyomlib-vc19.directive.html',

            scope: {
                rxConfiguration: '='
            },

            link: function ($scope) {
                var _config;
             


                var init = function () {
                    _config = $scope.rxConfiguration.propertiesByName;
                    
                    
                    $scope.RecordDefinition=_config.recordDefinitionFullName;
                    $scope.ApprovalFieldID=_config.ApprovalFieldID;
                    $scope.CreatedDateFieldID=_config.CreatedDateFieldID;
                    $scope.DueDateFieldID=_config.DueDateFieldID;
                    $scope.AdditionalField=_config. AdditionalField;
                    $scope.displayIdFieldID=_config.displayIdFieldID;
    
                    
                    $scope.HiddenTargetAchievment=_config.HiddenTargetAchievment;
                    console.log($scope.HiddenTargetAchievment);
                    $scope.target=$scope.HiddenTargetAchievment;
                    $scope.ViewReqGuid=_config.ViewReqGuid;
                    $scope.ViewReqColor=_config.ViewReqColor;
                    
                   
                    
                    $scope.FilterExp=_config.FilterExp;
                    
                    $scope.list=(_config.list==null||_config.list==''||_config.list==undefined)?[]:angular.fromJson(_config.list);
                    $scope.listFieldIds="";
                    if($scope.list.length>=1){
                        for(var i in $scope.list)
                        {
                           
                            $scope.listFieldIds+=$scope.list[i].id+",";
                        }
                    }
                    
                    
                    
                    $scope.selectedcheckbox=[];
                 
                    
                    $scope.mydata=[];
                    $scope.col=[{}];
                   
                   
                    $scope.getRecordDefinition();
                    
                    $scope.fields=[];
                    $scope.selectionFields=[];
                    
                   
                    
                    
                 
                    
                    
                    // get selection Field Label
                    if($scope.RecordDefinition)
					{
						rxRecordDefinitionResource.get($scope.RecordDefinition).then(function (recordDefinition) {
							$scope.TempRecordDefinition = recordDefinition;
							$scope.fields=($scope.TempRecordDefinition.fieldDefinitions).map(function (fieldDefinition) {
								return {
									id: fieldDefinition.id,
									name: fieldDefinition.name,
									resourceType: fieldDefinition.resourceType
								};
							});
							
							for (var i in $scope.fields) {
								if(($scope.fields[i].resourceType == RX_RECORD_DEFINITION.dataTypes.selection.resourceType))
								{
									$scope.selectionFields.push({id:$scope.fields[i].id, name:$scope.fields[i].name, resourceType:$scope.fields[i].resourceType, optionNamesById:_.find($scope.TempRecordDefinition.fieldDefinitions, function(obj) { return obj.id == $scope.fields[i].id }).optionNamesById});
								}
							}
							
						}).catch(function (e) {
							console.log("Unable to retrieve "+$scope.RecordDefinition+" RecordDefinition."+e);
						});
					}
                    
                    $scope.customFields=$scope.fields;

                };

               
                
                
                // <!----------- buit in functions------------------>
                
                
                $scope.getValues=function(FieldID,FieldValue)
				{					
					if(!FieldID||($scope.fields==null||$scope.fields.length==0))return null;					
					
					if(FieldID) if(_.find($scope.fields, function(obj) { return obj.id == FieldID }).resourceType == RX_RECORD_DEFINITION.dataTypes.selection.resourceType)
						{
							return (_.find($scope.selectionFields, function(obj) { return obj.id == FieldID })).optionNamesById[FieldValue];
							
						}
						else return FieldValue;
						else return FieldValue?FieldValue:null;
				}
                
                $scope.getRecordDefinition=function()
                {   
                    
                    
                    var foo = rxRecordInstanceDataPageResource.withName($scope.RecordDefinition);
					 var queryParams = {
							propertySelection:"179,"+$scope.displayIdFieldID+","+$scope.listFieldIds+","+$scope.CreatedDateFieldID+","+$scope.DueDateFieldID+","+$scope.ApprovalFieldID,
                            queryExpression: $scope.FilterExp?$scope.FilterExp:""
                            
                        };

						foo.get(100, 0, queryParams).then(
                        function (allRecords) {
                            $scope.mydata = allRecords.data;//.slice()
                  
                        }
                    );
                }
                
                $scope.getTargetAchievment=function(createdDate,DueDate)
                {
                    var submittedDate=moment(createdDate).format('YYYY-MM-DD hh:mm:ss');
                    var endDate=moment(DueDate).format('YYYY-MM-DD hh:mm:ss');
                    var currentDate=moment().format('YYYY-MM-DD hh:mm:ss');
                    
                    var totalDays=moment(endDate).diff(moment(submittedDate), 'days');
                    var remainDays=moment(endDate).diff(moment(currentDate), 'days');
                    var completedDays=moment(currentDate).diff(moment(submittedDate), 'days');
                    
                    var target=Math.round(completedDays*100/totalDays);
                    
                    if(totalDays < 0 || target < 0)
                        {
                            return 0;
                        }else 
                    if(target >100)
                        {
                                    return 100;
                        }else{
                            
                    
                            return  target;
                        }
                  
                    
                     
                }
                
                 $scope.executeAction=function()
                {
                    
                     $timeout(function(){
                            var button;

                            
                                
                                var buttonGuid = rxString.format('rx-action-button[rx-view-component-id=\'%s\'] > button', $scope.ViewReqGuid);
                              
                                button = $document.find(buttonGuid);
                            

                            if (button) {
                                button.click();
                            } else {
                                rxNotificationMessage.error('Cannot find button ' + $scope.buttonGuid);
                            }
                        });
                }
                  
                $scope.getApproval=function(guid , value)
                {   
                    $scope.selectedcheckbox=[];
                    
                    var objectRecord = rxRecordInstanceResource.withName($scope.RecordDefinition);  
                    objectRecord.get(guid).then(  
                        function(record) {  
                            record.setValue($scope.ApprovalFieldID, value);  
                            record.put(); 
                            
                        }  

                    ).then(function()
                          {
                        $scope.getRecordDefinition();
                        $scope.getRecordDefinition();
                      
                        
                        
                    }); 
                                
                    rxNotificationMessage.success("Request "+value+" Successfully.");
                    
                  
                    
                }
                
                
                
                $scope.bulkedit=function(value)
                {
    
                    for( var temp in $scope.selectedcheckbox)
                        {
                         
                            if($scope.selectedcheckbox[temp] == true)
                                {
                                    
                                      var objectRecord = rxRecordInstanceResource.withName($scope.RecordDefinition);  
                                    objectRecord.get(temp).then(  
                                            function(record) {  
                                                record.setValue($scope.ApprovalFieldID, value);  
                                                record.put(); 
                            
                                            }  

                                    ).then( function()
                                           {
                                        
                                        $scope.selectedcheckbox=[];
                                        $scope.getRecordDefinition();
                                        $scope.getRecordDefinition();
                                        rxNotificationMessage.success("Request "+value+" Successfully.");
                                    })
                                }
                            
                            
                        }
                    

                }
                
                $scope.getSelectedCheckbox=function()
                {
                    
                    $scope.temp=$scope.selectedcheckbox;
                   // console.log($scope.temp);
                }
               

              
              
             
                $scope.hideColumn=function(obj) 
                {
                    
                    
                    if(obj.check == true)
                        {
                            return false;
                        }else{
                            return true;
                        }
                    
                }
             

                
                init();

            }

        };
    });
})();