({
	initBoatType : function(component) {
		
        let action = component.get("c.getBoatTypes");
        
        action.setCallback( this, function(resp){
            
            let state = resp.getState();
            
            if(state === "SUCCESS"){
                component.set("v.boatTypes", resp.getReturnValue());
            } else if (state === "ERROR"){
                console.log(response.getError());
            } else {
                console.log(response);
            }
        });
        $A.enqueueAction(action);
	}
})