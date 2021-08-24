({
	initSearch : function(component, event, helper) {
		helper.onSearch(component);
	},
    
    doSearch : function(component, event, helper){
        let params = event.getParam('arguments');
        component.set("v.boatTypeId", params.boatTypeId);
        helper.onSearch(component);
    },
    
    onBoatSelect : function(component, event, helper){
     
        let boatId = event.getParam('boatId');
        component.set("v.selectedBoatId", boatId);
    }
})