({
	initBoatSearchForm : function(component, event, helper) {
		
        let createRecordEvent = $A.get("e.force:createRecord");
        
        if (createRecordEvent){
            component.set("v.showNewButton", true);
        }
        helper.initBoatType(component);
	},
    
    onFormSubmit : function(component, event, helper) {
        
        let boatTypeId = component.find("boatTypeSelect").get("v.value");
        let data = {
            "boatTypeId" : boatTypeId
        }
        let formSubmit = component.getEvent("formSubmit");
        formSubmit.setParams({
            "formData" : data
        });
        formSubmit.fire();
    },
    
    createNewBoat : function(component, event, helper) {
        
        let boatTypeId = component.find("boatTypeSelect").get("v.value");
        
        let params = {
            "entityApiName": "Boat__c"
        };
        if(boatTypeId){
            params.defaultFieldValues = {"BoatType__c" : boatTypeId};
        }
        let createBoatRecordEvent = $A.get("e.force:createRecord");
        createBoatRecordEvent.setParams(params);
        createAcountContactEvent.fire();
    }
})