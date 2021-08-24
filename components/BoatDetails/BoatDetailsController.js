({
	onBoatSelected : function(component, event, helper) {
		
        let boat = event.getParam('boat');
        component.set("v.id", boat.Id);
        component.find("service").reloadRecord();
	},
    
    onRecordUpdated : function(component, event, helper) {
        var boatReviewsCmp = component.find("boatReviewsCmp");
        if(boatReviewsCmp){
            boatReviewsCmp.refresh();
        }
	},
    
    onBoatReviewAdded : function(component, event, helper) {
        
        component.find("tabSet").set('v.selectedTabId', 'boatreviewtab');
        let boatReviewsCmp = component.find("boatReviewsCmp");
        if(boatReviewsCmp){
            boatReviewsCmp.refresh();
        }
	}
})