({
    onBoatClick : function(component, event, helper) {
        
        let selectedBoat = component.get("v.boat");
        
        let boatSelect = component.getEvent("BoatSelect");
        boatSelect.setParams({
            "boatId" : selectedBoat.Id
        });
        boatSelect.fire();
        
        let boatSelected = $A.get("e.c:BoatSelected");
        boatSelected.setParams({
            "boat" : selectedBoat
        });
        boatSelected.fire();
        
        var plotMapMarkerEvent = $A.get("e.c:PlotMapMarker");
        plotMapMarkerEvent.setParams({
            "sObjectId" : selectedBoat.Id,
            "lat" : selectedBoat.Geolocation__Latitude__s,
            "long" : selectedBoat.Geolocation__Longitude__s,
            "label" : selectedBoat.Name
        });
        plotMapMarkerEvent.fire();
        
    }
})