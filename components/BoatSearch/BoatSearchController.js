({
    onFormSubmit : function(component, event, helper) {
        
        let data = event.getParam("formData");
        
        let boatSearchResultsCmp = component.find("boatSearchResultsCmp");
        if (boatSearchResultsCmp) {
            boatSearchResultsCmp.search(data.boatTypeId);
        }
    }
})