({
	onSearch : function(cmp) {
		
        let action = cmp.get("c.getBoats");
        action.setParams({
            "boatTypeId" : cmp.get("v.boatTypeId")
        });
        
        action.setCallback(this, function(resp){
            let state = resp.getState();
            if(state === "SUCCESS"){
                component.set("v.boats", state.getReturnValue());
            } else if (state === "ERROR"){
                console.log(resp.getError());
            }else{
                console.log(resp);
            }
        });
        $A.enqueueAction(action);
	}
})