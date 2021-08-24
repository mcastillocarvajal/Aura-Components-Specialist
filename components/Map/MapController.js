({
    onPlotMapMarker : function(component, event) {

        component.set("v.mapMarkers", {
            location: {
                Latitude: event.getParam("lat"),
                Longitude: event.getParam("long"),
            },
        });
        component.set('v.markersTitle', event.getParam("label"));
        component.set('v.zoomLevel', 10);
    } 
    
})
