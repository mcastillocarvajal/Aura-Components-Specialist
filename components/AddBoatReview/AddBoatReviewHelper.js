({
	onInit : function(component, event, helper) {
		
        let service = component.find("service");
        
        service.getNewRecord(
            "BoatReview__c",
            null,
            false,
            $A.getCallback(function(){
                let boatReview = component.get("v.boatReview");
                let err = component.get("v.recordError");
                
                if(err || !boatReview ){
                    console.log("Error: " + err);
                    return;
                }
                
                boatReview.Boat__c = component.get("v.boat").Id;
                component.set("v.boatReview", boatReview);
            })
        )
	}
})